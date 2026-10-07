import { Button, ProjectCard, TabMenu } from 'components/common';
import Banner from 'components/common/Banner';
import useSmoothScroll from 'hooks/useSmoothScroll';
import { GetStaticProps } from 'next';
import Router from 'next/router';
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
      ...(project.thumbnailBlurDataURL !== undefined && {
        thumbnailBlurDataURL: project.thumbnailBlurDataURL,
      }),
      tags: project.tags,
      field: project.field,
      generation: project.generation,
      ...(project.order !== undefined && { order: project.order }),
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

/*
 * 상세 페이지에서 뒤로 돌아오면 보던 분류와 펼친 개수를 되살린다.
 * 페이지를 떠나면 컴포넌트 상태가 사라지므로 모듈에 남겨 두고, 뒤로·앞으로 가기일 때만 꺼내 쓴다.
 */
let lastListState: { category: ProjectField; count: number } | null = null;
let isHistoryMove = false;
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    isHistoryMove = true;
  });
  Router.events.on('routeChangeComplete', () => {
    isHistoryMove = false;
  });
}

function Project({ projects }: ProjectProps) {
  const [restored] = useState(() => (isHistoryMove ? lastListState : null));
  const [viewCardCount, setViewCardCount] = useState(
    restored?.count ?? INITIAL_CARD_COUNT,
  );
  const [category, setCategory] = useState<ProjectField>(
    restored?.category ?? PROJECT_CATEGORIES[0],
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

  const handleCategoryClick = (nextCategory: ProjectField) => {
    setCategory(nextCategory);
    setViewCardCount(INITIAL_CARD_COUNT);
    triggerCategoryScroll();
  };

  useEffect(() => {
    lastListState = { category, count: viewCardCount };
  }, [category, viewCardCount]);

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
            onClick={handleCategoryClick}
            label="프로젝트 분류"
          />
        </CategoriesWrapper>
        <ProjectGridWrapper>
          {projects
            .filter((project) => {
              // 현재 카테고리 필터링
              if (category !== 'ALL') return project.field.includes(category);
              else return true;
            })
            .sort((a, b) => {
              const generationOrder = b.generation - a.generation;
              if (generationOrder !== 0) {
                return generationOrder;
              }

              return (
                (a.order ?? Number.MAX_SAFE_INTEGER) -
                (b.order ?? Number.MAX_SAFE_INTEGER)
              );
            })
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
  width: 1024px;
  max-width: calc(100% - 24px);
  margin: 0 auto;
  /* 시안: 맨 아래 80px (360 화면은 64px). 더보기 버튼이 없는 분류에서도 같은 여백을 둔다 */
  padding-bottom: 80px;
  ${media.tablet} {
    width: 674px;
  }
  ${media.mobile} {
    width: 100%;
  }
  ${media.small} {
    padding-bottom: 64px;
  }
`;

/* 시안: 배너 아래 56px에 탭, 그 아래 48px에 카드 (360 화면은 32px, 32px) */
const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 56px;

  ${media.small} {
    padding-top: 32px;
  }
`;

const ProjectGridWrapper = styled.div`
  display: grid;
  gap: 24px;
  margin-top: 48px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  > a {
    width: 100%;
    min-width: 0;
  }
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  /* 시안: 360 화면에서는 카드 사이 8px, 줄 사이 16px */
  ${media.small} {
    gap: 16px 8px;
    margin-top: 32px;
  }
`;

/* 시안: 카드 아래 48px에 버튼 (360 화면은 32px). 버튼 아래 여백은 ProjectContainer가 둔다 */
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 48px;

  ${media.small} {
    margin-top: 32px;
  }
`;

export default Project;
