import { HACKATHON_APPLY_LINK } from 'constants/hackathon';
import { motion, useAnimation } from 'framer-motion';
import {
  type PointerEvent,
  type ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import theme from 'styles/theme';
import { hackathonFont } from '../shared';

/*
 * 하단 고정 지원 버튼. 크기·간격은 수정된 시안(Variant 1: 9002:4763 · 9079:4415 · 9002:4809),
 * 동작은 홈의 지원 버튼(components/home/RecuitBtn)과 같다.
 * - 마우스를 올리면 버튼 색이 반전된다(검정 바탕 흰 글자). 손가락 터치에는 적용하지 않는다.
 * - 푸터가 버튼 자리(화면 아래 100px)까지 올라오면 숨겨 푸터 글자를 가리지 않는다.
 */
function ApplyButton(): ReactElement {
  const controls = useAnimation();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return undefined;

    const update = () => {
      setIsHidden(
        footer.getBoundingClientRect().top < window.innerHeight - 100,
      );
    };

    update();
    /* 페이지는 #__next 안에서 스크롤되므로 캡처 단계에서 듣는다 */
    document.addEventListener('scroll', update, {
      capture: true,
      passive: true,
    });
    window.addEventListener('resize', update);
    return () => {
      document.removeEventListener('scroll', update, { capture: true });
      window.removeEventListener('resize', update);
    };
  }, []);

  const handleHoverStart = useCallback(() => {
    controls.start({
      color: theme.palette.white_100,
      backgroundColor: theme.palette.grey_1000,
      transition: { duration: 0.4, ease: 'easeOut' },
    });
  }, [controls]);

  const handleHoverEnd = useCallback(() => {
    controls.start({
      color: theme.palette.grey_1000,
      backgroundColor: theme.palette.white_100,
      transition: { duration: 0.4, ease: 'easeOut' },
    });
  }, [controls]);

  return (
    <BtnContainer
      $visible={!isHidden}
      onPointerEnter={(event: PointerEvent<HTMLElement>) => {
        if (event.pointerType === 'mouse') handleHoverStart();
      }}
      onPointerLeave={(event: PointerEvent<HTMLElement>) => {
        if (event.pointerType === 'mouse') handleHoverEnd();
      }}
    >
      <InfoText>12월 19일 (토요일)</InfoText>
      <AnimatedButton
        type="button"
        animate={controls}
        whileTap={{ scale: 0.97 }}
        onClick={() =>
          window.open(HACKATHON_APPLY_LINK, '_blank', 'noopener,noreferrer')
        }
      >
        얍커톤 지원하기
      </AnimatedButton>
    </BtnContainer>
  );
}

/*
 * 1920·834: 357×69, 안쪽 여백 8 8 8 24, 간격 16, 그림자 0 4 16 검정 16%, 화면 아래 36px
 * 360: 283×53, 안쪽 여백 6 6 6 20, 간격 12, 화면 아래 24px
 */
const BtnContainer = styled.section<{ $visible: boolean }>`
  width: max-content;
  position: fixed;
  /* 전용 헤더(5000)와 모바일 메뉴(4999)보다 아래 */
  z-index: 100;
  display: flex;
  padding: 8px 8px 8px 24px;
  align-items: center;
  gap: 16px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  box-shadow: 0 4px 16px
    ${({ theme }) => theme.palette.hackathon_top_pill_shadow};
  left: 50%;
  transform: translateX(-50%);
  bottom: 36px;

  ${media.mobile} {
    bottom: 24px;
    gap: 12px;
    padding: 6px 6px 6px 20px;
  }

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.4s ease;
`;

/* Figma는 글자 상자 너비를 정수로 올린다(149 · 118). 브라우저 글자 폭이 1px쯤 좁아 최소 너비로 맞춘다 */
const InfoText = styled.span`
  min-width: 149px;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.grey_800};
  ${hackathonFont(20, 500, 28.8, -0.36)};

  ${media.mobile} {
    min-width: 118px;
    ${hackathonFont(16, 500, 28.8, -0.36)};
  }
`;

/* 1920·834: 160×53, 안쪽 여백 12 18, 그림자 0 0 12 검정 8% · 360: 127×41, 6 14 */
const AnimatedButton = styled(motion.button)`
  all: unset;
  box-sizing: border-box;
  min-width: 160px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.white_100};
  box-shadow: 0 0 12px
    ${({ theme }) => theme.palette.hackathon_apply_button_shadow};
  color: ${({ theme }) => theme.palette.grey_1000};
  ${hackathonFont(20, 600, 28.8, -0.36)};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.chemistry_29th_point};
    outline-offset: 2px;
  }

  ${media.mobile} {
    min-width: 127px;
    padding: 6px 14px;
    ${hackathonFont(16, 600, 28.8, -0.36)};
  }
`;

export default ApplyButton;
