import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate } from 'components/home';
import { AnimatedButton } from 'components/common';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import { useRouter } from 'next/router';
import Path from 'constants/path';

function AnimatedTextSection(): ReactElement {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { buttonName } = BannerInfo;
  const buttonParams = IS_RECRUITING
    ? { width: 168 }
    : { disabled: true, width: 190 };

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
        style={{ marginTop: 120 }}
        fontColor="white"
        buttonColor="orange_400"
        className="recruitButton"
        buttonText={buttonName}
        onClick={() => {
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
