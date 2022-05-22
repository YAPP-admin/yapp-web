import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import { TabMenu, ProjectCard, Button } from 'components/common';
import { getAllProjects } from 'utils/getAllProjects';
import { PROJECT_CATEGORIES } from 'database/project';
import media from 'styles/media';
import { Project as ProjectType } from 'types/project';
import useSmoothScroll from 'hooks/useSmoothScroll';

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();

  const projectData = projects.map(({ project, slug }: any) => {
    return {
      title: project.name,
      thumbnail: project.thumbnail,
      tags: project.tags,
      category: project.field,
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

export type ProjectCategoryTypes = 'iOS' | 'Android' | 'Web' | 'ML';

interface ProjectProps {
  projects: ProjectType[];
}

const INITIAL_CARD_COUNT = 9; // '기본' 카드 표현 수
const NEXT_CARD_COUNT = 6; // '더보기' 카드 표현 수

function Project({ projects }: ProjectProps) {
  const [viewCardCount, setViewCardCount] = useState(INITIAL_CARD_COUNT);
  const [category, setCategory] = useState<ProjectCategoryTypes>(
    PROJECT_CATEGORIES[0],
  );
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
      <ProjectContainer ref={containerRef}>
        <ProjectTitleWrapper>
          기획부터 런칭까지,
          <br /> 다양한 프로젝트를 경험해 보세요!
        </ProjectTitleWrapper>
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
            .filter((project: any) => project.category.includes(category)) // 현재 카테고리 필터링
            .sort((a, b) => b.generation - a.generation) // 기수 순 정렬
            .slice(0, viewCardCount) // 기본 9개 카드 표현
            .map((project: any) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </ProjectGridWrapper>
        <ButtonWrapper>
          <StyledButton
            width={148}
            height={65}
            fontColor="white"
            buttonColor="grey_850"
            onClick={handleMoreButtonClick}
          >
            더보기
          </StyledButton>
        </ButtonWrapper>
      </ProjectContainer>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.grey_100};
  padding: 174px 0;

  ${media.mobile} {
    padding: 80px 0;
  }
`;

const ProjectContainer = styled.section`
  position: relative;
  flex: 0 1 1200px;
  margin: 0 10px;
`;

const ProjectTitleWrapper = styled.div`
  ${({ theme }) => theme.textStyle.web.Title};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_2};
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 140px;
  ${media.mobile} {
    padding-top: 80px;
  }
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
  text-align: center;
  margin-top: 56px;
`;

const StyledButton = styled(Button)`
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_700};
  }

  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

export default Project;
