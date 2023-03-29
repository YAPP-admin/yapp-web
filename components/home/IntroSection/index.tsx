import { useState } from 'react';
import type { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import { AnimatedButton } from 'components/common';
import Spline from '@splinetool/react-spline';
import Path from 'constants/path';
import { useRouter } from 'next/router';

function IntroSection(): ReactElement {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [move, setMove] = useState({ ix: 0, iy: 0 });
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { buttonName } = BannerInfo;
  const buttonParams = IS_RECRUITING
    ? { width: 168 }
    : { disabled: true, width: 190 };

  const handleEnter = () => setIsHover(!isHover);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    setMove({
      ix: (window.innerWidth - e.pageX * 2) / 25,
      iy: (window.innerHeight - e.pageY * 2) / 25,
    });
  };

  return (
    <IntroSectionContainer
      onMouseEnter={handleEnter}
      onMouseLeave={handleEnter}
      onMouseMove={handleMove}
    >
      <Dimension />
      <MainBanner>
        <Spline scene="https://prod.spline.design/oefJFTsP9MuFSYvY/scene.splinecode" />
      </MainBanner>
      <ContentWrapper>
        <TitleContainer>
          <span className="main-text">
            Together We Gather,
            <br />
            Together We Grow
          </span>
        </TitleContainer>

        <AnimatedButton
          height={65}
          fontColor="white"
          buttonColor="orange_400"
          className="recruitButton"
          buttonText={buttonName}
          onClick={() => {
            router.push(Path.Recruit);
          }}
          {...buttonParams}
        />
      </ContentWrapper>
    </IntroSectionContainer>
  );
}

const IntroSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);
  ${media.mobile} {
    height: calc(100vh - 64px);
  }
  overflow: hidden;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s ease-out;
  }

  .recruitButton {
    ${media.mobile} {
      width: 148px;
      height: 56px;
      ${({ theme }) => theme.textStyle.mobile.Button_Point}
    }
  }
`;

const Dimension = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.black};
`;

const MainBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.black};
`;

const ContentWrapper = styled.div`
  text-align: center;
  z-index: 3;
`;

const TitleContainer = styled.div`
  margin: 0 5px 48px 5px;
  text-align: center;
  word-break: keep-all;

  .main-text {
    color: ${({ theme }) => theme.palette['white']};
    font-family: 'Poppins-ExtraBold';
    font-size: 80px;
    font-weight: 800;
    line-height: 100%;
    letter-spacing: 0;

    ${media.mobile} {
      font-size: 58px;
      font-weight: 800;
      line-height: 100%;
      letter-spacing: 0;
    }

    ${media.small} {
      font-size: 32px;
      font-weight: 800;
      line-height: 100%;
      letter-spacing: 0;
    }
  }
`;

export default IntroSection;
