import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { motion, useAnimation } from 'framer-motion';
import theme from 'styles/theme';
import Yapp from 'constants/yapp';
import { IS_RECRUITING, NEXT_GENERATION_RECRUIT_LINK } from 'database/recruit';
import { RECRUIT_BANNER, RECRUIT_BANNER_ACTIVE } from 'database/home';

function RecuitBtn(): ReactElement {
  const controls = useAnimation();
  const [visible, setVisible] = useState(true);
  const joinSectionRef = useRef<HTMLElement | null>(null);
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;

  useEffect(() => {
    const section = document.querySelector('#join-section');
    if (!section) return;

    joinSectionRef.current = section as HTMLElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // JoinSection 전까지 범위에서만 FAB 노출
        } else {
          setVisible(false); // JoinSection 벗어나면 FAB 숨김
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

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
      $visible={visible}
      onClick={() => window.open(Yapp.YAPP_RECRUIT_ALL, '_blank')}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <InfoText>{BannerInfo.date}</InfoText>
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
  background-color: #2c2c2c;
  left: 50%;
  transform: translateX(-50%);
  bottom: 36px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
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
