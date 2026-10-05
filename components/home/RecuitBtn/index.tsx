import {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { motion, useAnimation } from 'framer-motion';
import theme from 'styles/theme';
import Yapp from 'constants/yapp';
import {
  LINK_BY_STATUS,
  RECRUITING_PERIOD_TEXT,
  RecruitStatus,
} from '../../../constants/status';
import { RECRUIT_BANNER_BY_STATUS } from '../../../database/recruit';

interface RecuitBtnProps {
  status: RecruitStatus;
}

function RecuitBtn({ status }: RecuitBtnProps): ReactElement | null {
  const controls = useAnimation();
  const [isSectionInView, setIsSectionInView] = useState(false);
  const joinSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = document.querySelector('#join-section');
    if (!section) return;

    joinSectionRef.current = section as HTMLElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleHoverStart = useCallback(async () => {
    await controls.start({
      rotateX: 360,
      color: theme.palette.white_100,
      backgroundColor: theme.palette.grey_1000,
      transition: { duration: 1.5, ease: 'easeInOut' },
    });
    await controls.set({ rotateX: 0 });
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    controls.start({
      color: theme.palette.grey_1000,
      backgroundColor: theme.palette.white_100,
      transition: { duration: 0.4, ease: 'easeOut' },
    });
  }, [controls]);

  const isVisible = status === RecruitStatus.ACTIVE && isSectionInView;
  const targetLink = LINK_BY_STATUS[status];
  const BannerInfo = RECRUIT_BANNER_BY_STATUS[status];

  return (
    <BtnContainer
      $visible={isVisible}
      onClick={() => window.open(targetLink, '_blank')}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <InfoText>{RECRUITING_PERIOD_TEXT}</InfoText>
      <AnimatedButton animate={controls} whileTap={{ scale: 0.97 }}>
        {BannerInfo.buttonName}
      </AnimatedButton>
    </BtnContainer>
  );
}

const BtnContainer = styled.section<{ $visible: boolean }>`
  width: max-content;
  position: fixed;
  display: flex;
  padding: 6px 6px 6px 24px;
  align-items: center;
  gap: 24px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.24));
  left: 50%;
  transform: translateX(-50%);
  bottom: 36px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
`;

const InfoText = styled.span`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.grey_800};
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
  background-color: ${({ theme }) => theme.palette.white_100};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  color: ${({ theme }) => theme.palette.grey_1000};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }

  transform-origin: center;
`;

export default RecuitBtn;
