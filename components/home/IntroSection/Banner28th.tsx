import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Image from 'next/image';

const Banner28th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Banner28thTextContentBox className={mounted ? 'appear' : ''}>
        <TitlePc>
          <Image
            src="/assets/images/28th/title_pc.png"
            alt="28th Title"
            width={1200}
            height={303}
            priority
          />
        </TitlePc>
        <TitleTablet>
          <Image
            src="/assets/images/28th/title_tablet.png"
            alt="28th Title"
            width={720}
            height={200}
            priority
          />
        </TitleTablet>
        <TitleMobile>
          <Image
            src="/assets/images/28th/title_mobile.png"
            alt="28th Title"
            width={423}
            height={107}
            priority
          />
        </TitleMobile>
      </Banner28thTextContentBox>

      <BannerBackgroundInner className={mounted ? 'appear' : ''} />
    </>
  );
};

export default Banner28th;

const BannerBackgroundInner = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;

  &.appear {
    opacity: 1;
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/28th/banner_home_pc.png');

  ${media.tablet} {
    background-image: url('/assets/images/28th/banner_home_tablet.png');
  }

  ${media.mobile} {
    background-image: url('/assets/images/28th/banner_home_mobile.png');
  }
`;

const TitlePc = styled.div`
  display: block;
  ${media.tablet} {
    display: none;
  }
`;

const TitleTablet = styled.div`
  display: none;
  ${media.tablet} {
    display: block;
  }
  ${media.mobile} {
    display: none;
  }
`;

const TitleMobile = styled.div`
  display: none;
  ${media.mobile} {
    display: block;
  }
`;

const Banner28thTextContentBox = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  z-index: 20;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  transition: transform 1s ease, opacity 1s ease;
  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;

  &.appear {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;

    animation: floatY 1s ease-in-out infinite alternate;
  }

  ${media.tablet} {
    top: 220px;
  }

  @keyframes floatY {
    0% {
      transform: translate3d(-50%, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 10px, 0);
    }
  }
`;
