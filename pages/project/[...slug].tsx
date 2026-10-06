import { ProjectCard } from 'components/common';
import Banner from 'components/common/Banner';
import { ProjectContent, ProjectRetrospects } from 'components/project';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Project, ProjectUIModel } from 'types/project';
import { getAllProjects } from 'utils/getAllProjects';
import { getImageSize } from 'utils/getImageSize';

interface SlugType {
  [key: string]: string | string[] | undefined;
  slug: string[];
}

// 프로젝트 모든 PATH 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjects();
  // 생성될 수 있는 모든 동적 PATH 생성
  return {
    paths: projects.map((project: any) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: 'blocking', // 새로운 PATH 접근시 Fallback(로딩) 값을 보여주지 않음
  };
};

/* 
getStaticPaths으로 동적 라우팅(PATH)를 생성해줘야
getStaticProps의 Params 사용이 가능합니다. 
*/

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as SlugType;
  const projects = await getAllProjects();

  const projectData = projects.find((project) => project.slug[1] === slug[1]); // 현재 PATH 와 맞는 프로젝트 찾기

  const otherProjects = projects
    .filter(
      (otherProject) =>
        otherProject.project.generation === projectData?.project.generation, // 같은 기수 찾기
    )
    .filter(
      (otherProject) =>
        otherProject.project.title !== projectData?.project.title, // 현재 프로젝트는 제외
    )
    .map((otherProject) => {
      return {
        ...otherProject.project,
        url: otherProject.slug.join('/'),
      };
    });

  if (projectData) {
    const { content } = projectData.project;
    // 레이아웃 공간 확보(lazy loading, CLS 방지)를 위해 이미지 크기를 함께 전달
    const contentImages = (Array.isArray(content) ? content : [content])
      .filter(Boolean)
      .map((src) => ({ src, ...getImageSize(src) }));

    const { name, description, thumbnail } = projectData.project;
    // 검색 결과·공유 미리보기용 설명: 태그와 줄바꿈을 걷어낸 한 줄 텍스트
    const plainDescription = (description || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    return {
      props: {
        project: projectData.project,
        contentImages,
        otherProjects,
        seo: {
          title: name,
          description:
            plainDescription.length > 150
              ? `${plainDescription.slice(0, 150)}…`
              : plainDescription,
          image: thumbnail,
          path: `/project/${projectData.slug
            .map((segment) => encodeURIComponent(segment))
            .join('/')}`,
        },
      },
    };
  }

  // 존재하지 않는 프로젝트는 NotFound 호출
  return {
    notFound: true,
  };
};

interface Props {
  project: Project;
  contentImages: Array<{ src: string; width?: number; height?: number }>;
  otherProjects: ProjectUIModel[];
}

function ProjectDetail({ project, contentImages, otherProjects }: Props) {
  const { retrospects, tags, title } = project;

  const [randomProjects, setRandomProjects] = useState<ProjectUIModel[]>([]);

  useEffect(() => {
    if (otherProjects.length > 3) {
      const randomProjects = otherProjects.sort(() => 0.5 - Math.random());
      setRandomProjects(randomProjects.slice(0, 3));
    } else {
      setRandomProjects(otherProjects);
    }
  }, []);

  return (
    <>
      <Banner
        title={`아이디어에서 런칭까지,\nYAPP의 서비스들`}
        description={`YAPP에서 활동하는 구성원인\n‘야뿌’들이 만들어낸 프로젝트들이에요.`}
      />
      <Wrapper>
        <BadgeList>
          {tags?.map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </BadgeList>
        <ProjectName>{title}</ProjectName>
        <ProjectContent project={project} />

        {contentImages.length > 0 && (
          <ImageBox>
            {contentImages.map(({ src, width, height }) => (
              <ProjectImage
                key={src}
                src={src}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                alt="project-content-image"
              />
            ))}
          </ImageBox>
        )}

        {retrospects?.length > 0 && (
          <RetrospectSection>
            <ProjectSubTitle>팀 회고</ProjectSubTitle>
            <ProjectRetrospects retrospects={retrospects} />
          </RetrospectSection>
        )}

        <section>
          <ProjectSubTitle>더 둘러보기</ProjectSubTitle>
          <OtherProjectList>
            {randomProjects.map((otherProject, i) => (
              <ProjectCard key={i} project={otherProject} isSubCard />
            ))}
          </OtherProjectList>
        </section>
      </Wrapper>
    </>
  );
}

/* 시안: 본문 폭 1040px, 배너 아래 64px. 834 화면은 좌우 80px, 360 화면은 20px */
const Wrapper = styled.div`
  box-sizing: content-box;
  max-width: 1040px;
  margin: 0 auto;
  padding: 64px 80px 144px;

  ${media.mobile} {
    padding: 64px 20px;
  }
`;

const BadgeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
`;

/* 시안: 높이 37px(360 화면 34px), 기수와 플랫폼을 '#' 없이 보여 준다 */
const TagChip = styled.li`
  padding: 3.5px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  color: ${({ theme }) => theme.palette.black_60};
  ${({ theme }) => theme.textStyleV2.resp.body_md};
  line-height: 30px;

  ${media.mobile} {
    padding: 4px 8px;
    ${({ theme }) => theme.textStyleV2.resp.body_sm};
    line-height: 26px;
  }
`;

const ProjectName = styled.h2`
  margin: 7px 0 32px;
  ${({ theme }) => theme.textStyleV2.resp.title1_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

/* 시안: 본문 이미지는 위아래 95px. 834 이하 화면에서는 화면 폭을 꽉 채운다 */
const ImageBox = styled.div`
  margin: 95px 0;

  ${media.tablet} {
    margin: 95px -80px;
  }

  ${media.mobile} {
    margin: 95px -20px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

/* 시안: 팀 회고 아래 더 둘러보기 제목까지 151px(360 화면 94px). 카드 아래 여백 16px을 뺀 값 */
const RetrospectSection = styled.section`
  margin-bottom: 135px;

  ${media.mobile} {
    margin-bottom: 80px;
  }
`;

const ProjectSubTitle = styled.h2`
  margin: 0 0 24px;
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  text-align: start;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

/* 시안: 1920 화면 3열(간격 24px), 834 화면 2열, 360 화면 2열(간격 8px, 본문보다 좌우 8px씩 넓다) */
const OtherProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  > a {
    min-width: 0;
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.mobile} {
    gap: 16px 8px;
    margin: 0 -8px;
  }
`;

export default ProjectDetail;
