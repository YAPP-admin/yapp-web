import { useEffect, useCallback, useRef, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box } from 'components';
import styled from 'styled-components';
import media from 'styles/media';

interface AnimatedBox {
  children: ReactNode;
  className?: string;
}

function AnimatedBox({ children, className }: AnimatedBox): ReactElement {
  const animatedDivRef = useRef(null);
  const [isIntersect, setIsIntersect] = useState(false);

  const handleIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && animatedDivRef.current) {
        observer.unobserve(animatedDivRef.current); // 한번 observe된 ref 풀기
        setIsIntersect(true);
      }
    },
    [],
  );

  const styles = useSpring({
    config: { mass: 200, tension: 1500, friction: 1000 }, // 질량, 장력, 마찰력
    from: { opacity: 0, y: 50 }, // 처음 위치
    to: isIntersect && { opacity: 1, y: 0 }, // 이벤트 시작시 해당 값까지 애니메이션
  });

  useEffect(() => {
    let observer: IntersectionObserver;
    if (animatedDivRef.current) {
      observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 }); // 이벤트 부여
      observer.observe(animatedDivRef.current); // observe 시작
    }

    return () => observer && observer.disconnect();
  }, [handleIntersect]);

  return (
    <animated.div ref={animatedDivRef} style={styles}>
      <StyledBox
        className={className}
        width={380}
        height={268}
        backgroundColor="white"
        borderRadius={20}
      >
        {children}
      </StyledBox>
    </animated.div>
  );
}

export default AnimatedBox;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '3'}
  );

  .title-text {
    color: ${({ theme }) => theme.palette.grey_500};
    ${({ theme }) => theme.textStyle.web.Subtitle};
  }
  .content-text {
    ${({ theme }) => theme.textStyle.web.Head}
  }

  ${media.mobile} {
    width: 335px;
    height: 220px;

    .title-text {
      ${({ theme }) => theme.textStyle.mobile.Subtitle}
    }
    .content-text {
      ${({ theme }) => theme.textStyle.mobile.Head}
    }
  }
`;
