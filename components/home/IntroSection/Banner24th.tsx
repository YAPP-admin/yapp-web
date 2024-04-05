import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const Banner24th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div style={{ display: 'none' }}>
        <Image
          src={'/assets/images/24th/banner-pc.webp'}
          alt=""
          width={0}
          height={0}
          priority
        />
        <Image
          src={'/assets/images/24th/banner-tablet.webp'}
          alt=""
          width={0}
          height={0}
          priority
        />
        <Image
          src={'/assets/images/24th/banner-mobile.webp'}
          alt=""
          width={0}
          height={0}
          priority
        />
      </div>

      <Banner24thTextContentBox className={mounted ? 'appear' : ''}>
        <h2>YAPP 24TH RECRUITING</h2>
        <h3>
          세상을 바꿀
          <br />
          24기 야뿌를 찾습니다
        </h3>
      </Banner24thTextContentBox>

      <Banner24thBackgroundInner className={mounted ? 'appear' : ''} />
    </>
  );
};

export default Banner24th;

const Banner24thBackgroundInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  transform: scale(0.8);
  opacity: 0;
  transition: transform 2s ease, opacity 2s ease;

  &.appear {
    transform: scale(1);
    opacity: 1;
  }

  background-color: black;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/24th/banner-pc.webp');

  ${media.mobile} {
    background-size: 100% auto;
    background-position: center 30%;
    background-image: url('/assets/images/24th/banner-tablet.webp');
  }

  ${media.small} {
    background-size: 100% auto;
    background-position: center 30%;
    background-image: url('/assets/images/24th/banner-mobile.webp');
  }
`;

const Banner24thTextContentBox = styled.div`
  position: absolute;
  top: 14%;
  left: 50%;
  z-index: 20;
  flex: 1;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 2rem;

  transition: transform 2s ease, opacity 2s ease;
  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;

  &.appear {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }

  & > h2 {
    padding: 1rem 2.6rem;
    margin: 0;
    border: 1px solid rgba(255, 155, 83, 0.77);
    border-radius: 10rem;
    background-color: transparent;
    font-size: 2.5vw;
    font-weight: 500;
    line-height: 115%;
    letter-spacing: -0.032rem;
    color: ${({ theme }) => theme.palette.orange_450};
  }

  & > h3 {
    margin: 0;
    text-align: center;
    font-size: 4.5vw;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: -0.07rem;
    color: ${({ theme }) => theme.palette.white};
  }

  ${media.custom(1580)} {
    & > h2 {
      font-size: 1.8vw;
    }

    & > h3 {
      font-size: 4vw;
    }
  }

  ${media.mobile} {
    gap: 1.6rem;

    & > h2 {
      font-size: 2.4rem;
      letter-spacing: -0.014rem;
    }

    & > h3 {
      font-size: 4.8rem;
      letter-spacing: -0.032rem;
    }
  }

  ${media.custom(430)} {
    top: 20%;
    gap: 1rem;

    & > h2 {
      font-size: 1.4rem;
      letter-spacing: -0.014rem;
    }

    & > h3 {
      font-size: 2.8rem;
      letter-spacing: -0.032rem;
    }
  }
`;
