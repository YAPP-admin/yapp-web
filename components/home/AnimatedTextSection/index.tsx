import { AnimatedButton } from 'components/common';
import { SectionTemplate } from 'components/home';
import Path from 'constants/path';
import {
  IS_RECRUITING,
  NEXT_GENERATION_RECRUIT_LINK,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import lottie from 'lottie-web';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function AnimatedTextSection(): ReactElement {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { buttonName } = BannerInfo;
  const buttonParams = IS_RECRUITING ? { width: 168 } : { width: 190 };

  const router = useRouter();
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
      <AnimatedButton
        height={65}
        fontColor="white"
        buttonColor="blue_100"
        className="recruitButton"
        buttonText={buttonName}
        onClick={() => {
          if (!IS_RECRUITING) {
            window.location.href = NEXT_GENERATION_RECRUIT_LINK;
            return;
          }

          router.push(Path.Recruit);
        }}
        {...buttonParams}
      />
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
