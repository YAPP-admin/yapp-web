import { Badge, ProjectCard } from 'components/common';
import Banner from 'components/common/Banner';
import Tag from 'components/common/Tag';
import { ProjectContent, ProjectRetrospects } from 'components/project';
import Breakpoints from 'constants/breakpoints';
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
        <ResponsiveLayout>
          <BadgeList>
            {tags?.map((tag) => (
              <Badge key={tag}>{`#${tag}`}</Badge>
            ))}
          </BadgeList>
          <ProjectName>{title}</ProjectName>
          <ProjectContent project={project} />
        </ResponsiveLayout>
        {contentImages.length > 0 && (
          <div style={{ margin: '100px auto 100px' }}>
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
          </div>
        )}

        {retrospects?.length > 0 && (
          <>
            <ProjectSubTitle>팀 회고</ProjectSubTitle>
            <ProjectRetrospects retrospects={retrospects} />
          </>
        )}
        <ProjectSubTitle>더 둘러보기</ProjectSubTitle>

        <OtherProjectList>
          {randomProjects.map((otherProject, i) => (
            <ProjectCard key={i} project={otherProject} isSubCard />
          ))}
        </OtherProjectList>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 64px 0 209px 0;
  height: 100%;
  .tag {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  ${media.tablet} {
    width: 100%;
    padding: 174px 0 200px 0;
  }
  ${media.mobile} {
    padding: 80px 0 120px 0;
  }
`;

const BadgeList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ResponsiveLayout = styled.div`
  ${media.tablet} {
    padding: 0 76px 0 80px;
  }
  ${media.mobile} {
    padding: 0 20px;
  }
`;

const ProjectName = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  margin-top: 16px;
  margin-bottom: 26px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title2_md};
    margin-bottom: 32px;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const ProjectSubTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  text-align: start;
  margin-bottom: 72px;

  ${media.tablet} {
    padding: 0 80px;
  }

  ${media.mobile} {
    padding: 0 20px;
    margin-bottom: 32px;
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const OtherProjectList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    > div {
      margin-bottom: 32px;
      &:not(:last-child) {
        margin-right: 0px;
      }
    }
  }

  ${media.mobile} {
    > div {
      margin-bottom: 20px;
      height: 267px;
    }
  }
`;

export default ProjectDetail;
