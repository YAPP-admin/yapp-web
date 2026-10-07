import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function AnimatedTextSection(): ReactElement {
  const { ref, controls, itemVariants } = useScrollAnimation();

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
  background-color: ${({ theme }) => theme.palette.white};
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

  /*
   * 가운데가 진하고 양끝이 옅은 글자. 글자색에 투명도 마스크를 씌워 만든다.
   * 배경 그라데이션을 글자 모양으로 오려 내는 방식(background-clip: text)은
   * 브라우저가 강제로 다크모드를 적용하면 배경과 같이 어두워져 글자가 사라진다.
   */
  color: ${({ theme }) => theme.palette.black};
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  mask-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );

  ${media.small} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle2_sm};
  }
`;

export default AnimatedTextSection;
