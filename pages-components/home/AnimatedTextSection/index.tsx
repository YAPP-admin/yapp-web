import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate } from 'pages-components/home';

function AnimatedTextSection(): ReactElement {
  const animatedTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animatedTextRef.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('public/assets/lottie/motion.json'),
    });
  }, []);

  return (
    <AnimatedTextSectionContainer>
      <div ref={animatedTextRef} />
    </AnimatedTextSectionContainer>
  );
}

const AnimatedTextSectionContainer = styled(SectionTemplate)`
  height: 100vh;

  ${({ theme }) => theme.textStyle.web.Body_Point}
  ${media.mobile} {
    .intro-text {
      ${({ theme }) => theme.textStyle.mobile.Body_Point}
    }
  }
`;

export default AnimatedTextSection;
