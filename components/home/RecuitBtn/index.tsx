import { useCallback, type ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { motion, useAnimation } from 'framer-motion';
import theme from 'styles/theme';
import { useRouter } from 'next/navigation';
import Yapp from 'constants/yapp';

function RecuitBtn(): ReactElement {
  const controls = useAnimation();
  const router = useRouter();

  const handleHoverStart = useCallback(async () => {
    await controls.start({
      rotateX: 360,
      color: theme.palette.black_100,
      backgroundColor: theme.palette.white_100,
      transition: { duration: 1.5, ease: 'easeInOut' },
    });
    await controls.set({ rotateX: 0 });
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    controls.start({
      color: theme.palette.white_100,
      backgroundColor: theme.palette.black_100,
      transition: { duration: 0.4, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <BtnContainer
      onClick={() => window.open(Yapp.YAPP_RECRUIT_ALL, '_blank')}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <InfoText>10.16(목) - 10.25(토)</InfoText>
      <AnimatedButton animate={controls} whileTap={{ scale: 0.97 }}>
        27기 지원하기
      </AnimatedButton>
    </BtnContainer>
  );
}

const BtnContainer = styled.section`
  width: max-content;
  position: fixed;
  display: flex;
  padding: 6px 6px 6px 24px;
  align-items: center;
  gap: 24px;
  border-radius: 99px;
  background-color: #2c2c2c;
  left: 50%;
  transform: translateX(-50%);
  bottom: 36px;
`;

const InfoText = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.white_70};
  ${({ theme }) => theme.textStyleV2.resp.body_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_sm};
  }
`;

const AnimatedButton = styled(motion.button)`
  white-space: nowrap;
  all: unset;
  cursor: pointer;
  display: flex;
  padding: 7px 20px 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: #484848;
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }

  transform-origin: center;
`;

export default RecuitBtn;
