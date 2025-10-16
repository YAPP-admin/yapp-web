import { Button, ProjectCard, TabMenu } from 'components/common';
import Banner from 'components/common/Banner';
import useSmoothScroll from 'hooks/useSmoothScroll';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { ProjectCardType, ProjectField } from 'types/project';
import { getAllProjects } from 'utils/getAllProjects';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();

  const projectData = projects.map(({ project, slug }: any) => {
    return {
      title: project.name,
      thumbnail: project.thumbnail,
      tags: project.tags,
      field: project.field,
      generation: project.generation,
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

/* 프로젝트 분류 */
export const PROJECT_CATEGORIES: ProjectField[] = [
  'ALL',
  'iOS',
  'Android',
  'Web',
  'ML',
];

interface ProjectProps {
  projects: ProjectCardType[];
}

const INITIAL_CARD_COUNT = 9; // '기본' 카드 표현 수
const NEXT_CARD_COUNT = 6; // '더보기' 카드 표현 수

function Project({ projects }: ProjectProps) {
  const [viewCardCount, setViewCardCount] = useState(INITIAL_CARD_COUNT);
  const [category, setCategory] = useState<ProjectField>(PROJECT_CATEGORIES[0]);

  const { ref: containerRef, trigger: triggerContainerScroll } =
    useSmoothScroll<HTMLDivElement>({
      block: 'end',
    });

  const { ref: categoryRef, trigger: triggerCategoryScroll } =
    useSmoothScroll<HTMLDivElement>({
      block: 'start',
    });

  const handleMoreButtonClick = () => {
    setViewCardCount(() => viewCardCount + NEXT_CARD_COUNT);
    setTimeout(() => {
      triggerContainerScroll();
    }, 100);
  };

  useEffect(() => {
    setViewCardCount(INITIAL_CARD_COUNT);
    triggerCategoryScroll();
  }, [category]);

  return (
    <ProjectWrapper>
      <Banner
        title={`아이디어에서 런칭까지,\nYAPP의 서비스들`}
        description={`YAPP에서 활동하는 구성원인\n‘야뿌’들이 만들어낸 프로젝트들이에요.`}
      />
      <ProjectContainer ref={containerRef}>
        <CategoriesWrapper ref={categoryRef}>
          <TabMenu
            tabs={PROJECT_CATEGORIES}
            currentTab={category}
            onClick={setCategory}
            backgroundColor="white"
          />
        </CategoriesWrapper>
        <ProjectGridWrapper>
          {projects
            .filter((project) => {
              // 현재 카테고리 필터링
              if (category !== 'ALL') return project.field.includes(category);
              else return true;
            })
            .sort((a, b) => b.generation - a.generation) // 기수 순 정렬
            .slice(0, viewCardCount) // 기본 9개 카드 표현
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </ProjectGridWrapper>
        {projects.filter((project) => {
          // 현재 카테고리 필터링
          if (category !== 'ALL') return project.field.includes(category);
          else return true;
        }).length > viewCardCount && (
          <ButtonWrapper>
            <Button variant="black" onClick={handleMoreButtonClick}>
              프로젝트 더보기
            </Button>
          </ButtonWrapper>
        )}
      </ProjectContainer>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile} {
    align-items: normal;
  }
  background-color: ${({ theme }) => theme.palette.white};
`;

const ProjectContainer = styled.section`
  position: relative;
  flex: 0 1 1200px;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
`;

const ProjectGridWrapper = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 64px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 56px 0 80px 0;
`;

const StyledButton = styled(Button)`
  transition: background-color 0.5s;

  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

export default Project;
