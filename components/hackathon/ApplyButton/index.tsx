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

/*
 * 하단 고정 지원 버튼. 홈의 지원 버튼(components/home/RecuitBtn)과 크기·모양·동작을 맞췄다.
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

const BtnContainer = styled.section<{ $visible: boolean }>`
  width: max-content;
  position: fixed;
  /* 전용 헤더(5000)와 모바일 메뉴(4999)보다 아래 */
  z-index: 100;
  display: flex;
  padding: 6px 6px 6px 24px;
  align-items: center;
  gap: 24px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  filter: drop-shadow(
    0px 4px 6px ${({ theme }) => theme.palette.hackathon_apply_shadow}
  );
  left: 50%;
  transform: translateX(-50%);
  bottom: 41px;

  ${media.mobile} {
    bottom: 40px;
  }

  /* 360px보다 좁으면 화면 양끝에 닿지 않게 간격을 줄인다 */
  ${media.custom(359)} {
    gap: 10px;
    padding-left: 14px;
  }

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
  all: unset;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  padding: 7px 20px 8px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.white_100};
  box-shadow: 0px 0px 6px
    ${({ theme }) => theme.palette.hackathon_top_pill_shadow};
  color: ${({ theme }) => theme.palette.grey_1000};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.chemistry_29th_point};
    outline-offset: 2px;
  }

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }

  ${media.custom(359)} {
    padding: 7px 14px 8px;
  }
`;

export default ApplyButton;
