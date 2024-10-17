import YappSubTitle from 'public/assets/images/25th/yapp_subtitle.svg';
import YappuLogo from 'public/assets/images/25th/yappu.svg';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const Banner25th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Banner24thTextContentBox className={mounted ? 'appear' : ''}>
        <BannerTitleBox>
          <YappuLogoBox />
          <YappSubTitleBox />
        </BannerTitleBox>
        <h3>
          큐브를 완성할
          <br />
          25기 야뿌를 찾습니다
        </h3>
        {/* <CubeBox /> */}
      </Banner24thTextContentBox>

      <BannerBackgroundInner className={mounted ? 'appear' : ''} />
    </>
  );
};

export default Banner25th;

const BannerBackgroundInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(0.8);
  opacity: 0;
  transition: transform 2s ease, opacity 2s ease;

  &.appear {
    transform: scale(1);
    opacity: 1;
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/25th/banner-pc.png');

  ${media.mobile} {
    background-image: url('/assets/images/25th/banner-tablet.png');
  }

  ${media.small} {
    background-image: url('/assets/images/25th/banner-phone.png');
  }
`;

const CubeBox = styled.div`
  width: 900px;
  height: 376px;
  margin: 0 auto;

  background-size: cover; // 비율을 고정하여 화면에 맞게 조정
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/25th/cube-pc.png');

  ${media.mobile} {
    width: 680px;
    height: 287px;
    background-image: url('/assets/images/25th/cube-tablet.png');
  }

  ${media.small} {
    width: 287px;
    height: 120px;
    background-image: url('/assets/images/25th/cube-mobile.png');
  }
`;
const Banner24thTextContentBox = styled.div`
  position: absolute;
  top: 10%;
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

  & > h3 {
    margin: 0;
    text-align: center;
    font-size: 4.25rem;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: -0.07rem;
    color: ${({ theme }) => theme.palette.white};
  }
  ${media.mobile} {
    & > h3 {
      font-size: 3rem;
      letter-spacing: -0.032rem;
    }
  }
  ${media.small} {
    top: 20%;
    gap: 1rem;

    & > h3 {
      font-size: 2rem;
      letter-spacing: -0.032rem;
    }
  }
`;

const BannerTitleBox = styled.div`
  display: flex;
  gap: 1rem;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.small} {
    gap: 0.8rem;
  }
`;

const YappuLogoBox = styled(YappuLogo)`
  width: 44.38px;
  height: 36.95px;
  ${media.small} {
    width: 2rem;
    height: 2rem;
  }
`;

const YappSubTitleBox = styled(YappSubTitle)`
  width: 254px;
  height: 48px;

  ${media.small} {
    width: 161px;
    height: 30px;
  }
`;
