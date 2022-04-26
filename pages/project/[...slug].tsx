import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjects } from 'utils/getAllProjects';
import Image from 'next/image';
import styled from 'styled-components';

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

// Project Detail View
interface ProjectDetailProps {
  project: any;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  console.log(project); // 프로젝트 데이터 확인용
  return (
    <TempWrapper>
      <ContentImageWrapper>
        <Image
          src={project.content}
          alt="project-content-image"
          layout="fill"
          placeholder="blur"
          blurDataURL={project.content}
        />
      </ContentImageWrapper>
    </TempWrapper>
  );
}

const TempWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const ContentImageWrapper = styled.div`
  position: relative;
  width: 75%;
`;

export default ProjectDetail;
