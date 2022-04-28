import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from 'utils/getAllProjects';
import styled from 'styled-components';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();
  const projectData = projects.map(({ project, slug }: any) => {
    return {
      title: project.title,
      thumbnail: project.thumbnail,
      url: slug.join('/'),
    };
  });

  if (projectData) {
    return {
      props: {
        projects: projectData,
      },
    };
  }

  return {
    notFound: true,
  };
};

interface ProjectProps {
  projects: any;
}

// Project Grid View
function Project({ projects }: ProjectProps) {
  return (
    <>
      {projects.map(({ title, url, thumbnail }: any) => (
        <Link href={`/project/${url}`} key={title}>
          <div style={{ cursor: 'pointer', width: '280px' }}>
            <ThumbnailWrapper>
              <Image
                src={thumbnail}
                alt="project-thumbnail"
                layout="fill"
                placeholder="blur"
                blurDataURL={thumbnail}
              />
            </ThumbnailWrapper>
            <h2>{title}</h2>
          </div>
        </Link>
      ))}
    </>
  );
}

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 380px;
  height: 214px;
`;

export default Project;
