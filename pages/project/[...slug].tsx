import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjects } from 'utils/getAllProjects';
import Image from 'next/image';
import styled from 'styled-components';
import Breakpoints from 'constants/breakpoints';
import { Project, ProjectUIModel } from 'types/project';
import Tag from 'components/common/Tag';
import media from 'styles/media';
import { ProjectContent, ProjectRetrospects } from 'components/project';
import { ProjectCard } from 'components/common';
import { useEffect, useState } from 'react';

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
    return {
      props: {
        project: projectData.project,
        otherProjects,
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
  otherProjects: ProjectUIModel[];
}

function ProjectDetail({ project, otherProjects }: Props) {
  const { content, retrospects, tags, title } = project;

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
    <Wrapper>
      <ResponsiveLayout>
        {tags?.map((tag) => (
          <Tag label={tag} key={tag} className="tag" />
        ))}
        <ProjectName>{title}</ProjectName>
        <ProjectContent project={project} />
      </ResponsiveLayout>
      <ProjectImage src={content} alt="project-content-image" />

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
  );
}

const Wrapper = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 174px 0 209px 0;
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

const ResponsiveLayout = styled.div`
  ${media.tablet} {
    padding: 0 76px 0 80px;
  }
  ${media.mobile} {
    padding: 0 20px;
  }
`;

const ProjectName = styled.div`
  ${({ theme }) => theme.textStyle.web.Title};
  margin-top: 16px;
  margin-bottom: 26px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_1};
    margin-bottom: 32px;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 100px auto 200px;
  ${media.mobile} {
    margin: 120px 0 120px;
  }
`;

const ProjectSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Title};
  text-align: center;
  margin-bottom: 72px;
  ${media.mobile} {
    margin-bottom: 32px;
    ${({ theme }) => theme.textStyle.mobile.Title_2};
  }
`;

const OtherProjectList = styled.div`
  display: flex;
  align-items: center;

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
