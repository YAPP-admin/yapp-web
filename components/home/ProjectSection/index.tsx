import type { ReactElement } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SectionTemplate } from 'components/home';
import { Button, Carousel } from 'components/common';
import { CAROUSEL_DATA, PROJECT_SECTION } from 'database/home';
import media from 'styles/media';
import SectionTitle from 'components/common/SectionTitle';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function ProjectSection(): ReactElement {
  const { title, subTitle } = PROJECT_SECTION;
  const { ref, controls, containerVariants } = useScrollAnimation({
    containerVariants: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    },
  });

  return (
    <ProjectContainer
      as={motion.section}
      ref={ref}
      animate={controls}
      variants={containerVariants}
    >
      <TextBoxLayout>
        <SectionTitle
          fontColor="black_100"
          subFontColor="black_60"
          align="flex-start"
          title={title}
          subTitle={subTitle}
        />
      </TextBoxLayout>
      <Carousel data={CAROUSEL_DATA} />
      <MoreButton variant="black" onClick={() => Router.push('/project')}>
        프로젝트 더보기
      </MoreButton>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(SectionTemplate)`
  padding: 200px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*
   * 캐러셀은 폭이 1920px로 고정이라 화면보다 넓다. 여기서 잘라 두지 않으면 페이지 전체가
   * 가로로 넘치는 것으로 계산돼, 모바일에서 화면을 누르고 끌 때 페이지가 옆으로 딸려 온다.
   */
  overflow: hidden;

  /* 시안: 834·360 화면에서는 위아래 100px */
  ${media.tablet} {
    padding: 100px 80px;
  }

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const TextBoxLayout = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;

  & > div {
    max-width: 1040px;
  }
`;

/* 시안: 점 아래 48px에 151x53 버튼 (360 화면은 32px 아래에 135x42) */
const MoreButton = styled(Button)`
  box-sizing: border-box;
  height: 53px;
  margin-top: 48px;
  padding: 12px 20px;

  ${media.mobile} {
    margin-top: 32px;
  }

  ${media.small} {
    height: auto;
    padding: 8px 18px;
  }
`;

export default ProjectSection;
