import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjects } from 'utils/getAllProjects';
import Image from 'next/image';
import styled from 'styled-components';
import Breakpoints from 'constants/breakpoints';
import { Project } from 'types/project';
import ProjectContent from 'components/project/ProjectContent';
import Tag from 'components/common/Tag';
import { ProjectTitle } from 'components/project/ProjectText/ProjectTitle';
import media from 'styles/media';
import ProjectRetrospects from 'components/project/ProjectRetrospects';
import { ProjectSubTitle } from 'components/project/ProjectText/ProjectSubTitle';

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

  const projectData = projects.find(
    (project: any) => project.slug[1] === slug[1],
  ); // 현재 PATH 와 맞는 프로젝트 찾기

  if (projectData) {
    return {
      props: {
        project: projectData.project,
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
}

function ProjectDetail({ project }: Props) {
  const { content, retrospects, tags, title } = project;
  return (
    <Wrapper>
      <ResponsiveLayout>
        {tags.map((tag) => (
          <Tag label={tag} key={tag} className="tag" />
        ))}
        <ProjectName>{title}</ProjectName>
        <ProjectContent project={project} />
      </ResponsiveLayout>
      <ProjectImage src={content} alt="project-content-image" />
      <ProjectSubTitle>팀 회고</ProjectSubTitle>
      <ProjectRetrospects retrospects={retrospects} />
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

const ProjectName = styled(ProjectTitle)`
  margin-top: 16px;
  margin-bottom: 26px;
  ${media.mobile} {
    margin-bottom: 32px;
  }
`;

const ProjectImage = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
  margin: 100px 0 200px;
`;

export default ProjectDetail;
