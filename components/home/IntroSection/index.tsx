import { useState } from 'react';
import type { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import Yapp from 'constants/yapp';
import { AnimatedButton } from 'components/common';
import Spline from '@splinetool/react-spline';

function IntroSection(): ReactElement {
  const [isHover, setIsHover] = useState(false);
  const [move, setMove] = useState({ ix: 0, iy: 0 });
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { buttonName } = BannerInfo;
  const buttonParams = IS_RECRUITING
    ? { href: Yapp.YAPP_RECRUIT, width: 168 }
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
        <Spline scene="https://prod.spline.design/HKqZopYQ1xZfXZFr/scene.splinecode" />
      </MainBanner>
      <ContentWrapper>
        <TitleContainer>
          <span className="main-text">
            Sprint Time
            <br />
            Open To Anyone
          </span>
        </TitleContainer>

        <AnimatedButton
          height={65}
          fontColor="white"
          buttonColor="orange_400"
          className="recruitButton"
          buttonText={buttonName}
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
    ${({ theme }) => theme.textStyle.web.Head};

    color: ${({ theme }) => theme.palette['white']};
    font-family: 'Syne-ExtraBold';

    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Head_2};
      line-height: 48px;
    }

    ${media.small} {
      ${({ theme }) => theme.textStyle.mobile.Head_3};
      line-height: 44.8px;
    }
  }
`;

export default IntroSection;
