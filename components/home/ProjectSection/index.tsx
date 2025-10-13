import type { ReactElement } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SectionTemplate } from 'components/home';
import { Button, Carousel } from 'components/common';
import { CAROUSEL_DATA } from 'database/home';
import media from 'styles/media';
import SectionTitle from 'components/common/SectionTitle';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function ProjectSection(): ReactElement {
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
      <SectionTitle
        fontColor="black_100"
        subFontColor="black_60"
        align="center"
        title="YAPP의 서비스들"
        subTitle="YAPP에서 활동하는 구성원인 ‘야뿌’들이 만들어낸 프로젝트들이에요."
      />
      <Carousel data={CAROUSEL_DATA} />
      <StyledButton variant="black" onClick={() => Router.push('/project')}>
        프로젝트 더보기
      </StyledButton>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(SectionTemplate)`
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
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

export default ProjectSection;
