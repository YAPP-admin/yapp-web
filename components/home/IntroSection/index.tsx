import { useState } from 'react';
import type { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import media from 'styles/media';
import IntroImage from 'public/assets/images/main.png';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import Yapp from 'constants/yapp';
import { AnimatedButton } from 'components/common';

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

  const styles = useSpring({
    delay: 200,
    to: isHover
      ? {
          transform: `scale(1.1) translateX(${move.ix}px) translateY(${move.iy}px)`,
        }
      : {
          transform: `scale(1) translateX(0px) translateY(0px)`,
        },
  });

  return (
    <IntroSectionContainer
      onMouseEnter={handleEnter}
      onMouseLeave={handleEnter}
      onMouseMove={handleMove}
    >
      <Dimension />
      <animated.div className="background" style={styles}>
        <Image src={IntroImage} layout="fill" objectFit="cover" priority />
      </animated.div>
      <ContentWrapper>
        <TitleContainer>
          <span className="main-text">
            작은 아이디어로
            <br />
            세상을 크게 변화시키다.
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
  opacity: 0.25;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.black};
`;

const ContentWrapper = styled.div`
  text-align: center;
  z-index: 3;
`;

const TitleContainer = styled.div`
  text-align: center;
  word-break: keep-all;
  margin: 0 5px 48px 5px;

  .main-text {
    color: ${({ theme }) => theme.palette['white']};

    ${({ theme }) => theme.textStyle.web.Head}
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Head}
    }
  }
`;

export default IntroSection;
