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
        transition: { duration: 0.8, ease: 'easeInOut' },
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
      <Button variant="black" onClick={() => Router.push('/project')}>
        프로젝트 더보기
      </Button>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(SectionTemplate)`
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBoxLayout = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;

  & > div {
    max-width: 1200px;
  }

  ${media.tablet} {
    & > div {
      margin: 0 80px;
    }
  }

  ${media.mobile} {
    & > div {
      margin: 0 12px;
    }
  }
`;

export default ProjectSection;
