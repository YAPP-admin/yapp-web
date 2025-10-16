import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function AnimatedTextSection(): ReactElement {
  const { ref, controls, itemVariants } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <SectionContainer>
      <HighLightText
        as={motion.section}
        ref={ref}
        // variants={containerVariants}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.p>아이디어와 열정, 실행력을 가진 사람들이</motion.p>
        <motion.p>함께 세상을 바꾸는 프로젝트를 만들어요</motion.p>
      </HighLightText>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HighLightText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  ${({ theme }) => theme.textStyleV2.resp.subtitle2_md};

  & p {
    margin: 0;
  }

  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background-position: center;
  background-size: cover;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle2_sm};
  }
`;

export default AnimatedTextSection;
