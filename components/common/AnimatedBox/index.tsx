import { useEffect, useCallback, useRef, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box } from 'components/common';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

export interface AnimatedBoxProps {
  children: ReactNode;
  className?: string;
  color: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
}

function AnimatedBox({
  children,
  className,
  color,
  fontColor,
}: AnimatedBoxProps): ReactElement {
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
        backgroundColor={color}
        fontColor={fontColor}
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  width: auto;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
  color: ${({ theme, fontColor }) => fontColor && theme.palette[fontColor]};

  ${media.mobile} {
    width: auto;
  }
`;
