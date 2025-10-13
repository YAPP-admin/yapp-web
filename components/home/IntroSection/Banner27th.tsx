import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import RecuitBtn from '../RecuitBtn';
import Image from 'next/image';

const Banner27th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Banner27thTextContentBox className={mounted ? 'appear' : ''}>
        <TextBox>
          <Image
            src="/assets/images/27th/title.png"
            alt="27th Title"
            width={580}
            height={309}
          />
        </TextBox>
      </Banner27thTextContentBox>

      <BannerBackgroundInner className={mounted ? 'appear' : ''}>
        <RecuitBtn />
      </BannerBackgroundInner>
    </>
  );
};

export default Banner27th;

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
  background-image: url('/assets/images/27th/banner_home_pc_tablet.png');

  ${media.mobile} {
    background-image: url('/assets/images/27th/banner_home_mobile.png');
  }

  ${media.small} {
    background-image: url('/assets/images/27th/banner_home_mobile.png');
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 80px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${media.tablet} {
    top: 220px;
    img {
      width: 340px;
      height: 181px;
    }
  }
`;

const Banner27thTextContentBox = styled.div`
  position: relative;
  left: 50%;
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

  @keyframes floatY {
    0% {
      transform: translate3d(-50%, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 10px, 0);
    }
  }
`;
