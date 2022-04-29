import { useState } from 'react';
import type { ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { Button } from 'components/common';
import media from 'styles/media';
import Yapp from 'constants/yapp';
import { useSpring, animated } from '@react-spring/web';
import { slideIn, slideOut } from 'styles/utils-styles';

function IntroSection(): ReactElement {
  const [isHover, setIsHover] = useState(false);
  const [move, setMove] = useState({ ix: 0, iy: 0 });

  const handleEnter = () => setIsHover(!isHover);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    setMove({
      ix: (window.innerWidth - e.pageX * 2) / 25,
      iy: (window.innerHeight - e.pageY * 2) / 25,
    });
  };

  const styles = useSpring({
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
      <animated.div className="background" style={styles} />
      <ContentWrapper>
        <TitleContainer>
          <span className="main-text">
            작은 아이디어로
            <br />
            세상을 크게 변화시키다.
          </span>
        </TitleContainer>
        <ButtonBlock>
          {/* <RecruitButton
            width={168}
            height={65}
            fontColor="white"
            buttonColor="orange_400"
            onClick={() => Router.push('/recruit')}
          >
            <svg
              width="172px"
              height="65px"
              viewBox="0 0 168 65"
              className="border"
            >
              <rect x="-0.9" y="1" width="166" height="63" rx="32" ry="32" />
            </svg>
            <span className="text-group">
              <span className="main-text">
                {Yapp.YAPP_GENERATION}기 지원하기
              </span>
              <span className="clone-text">
                {Yapp.YAPP_GENERATION}기 지원하기
              </span>
            </span>
          </RecruitButton> */}
          <RecruitButton
            width={190}
            height={65}
            fontColor="white"
            buttonColor="orange_400"
            isDisabled
          >
            <svg
              width="192px"
              height="65px"
              viewBox="0 0 190 65"
              className="border"
            >
              <rect x="-0.9" y="1" width="188" height="63" rx="32" ry="32" />
            </svg>
            <span className="text-group">
              <span className="main-text">21기에서 만나요!</span>
              <span className="clone-text">21기에서 만나요!</span>
            </span>
          </RecruitButton>
        </ButtonBlock>
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
    background-image: url('/assets/images/main.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    transition: all 0.5s ease-out;
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

const ButtonBlock = styled.div`
  display: block;
  ${media.mobile} {
    display: flex;
    justify-content: center;
  }
  svg {
    position: absolute;
    left: 0px;
    top: 0;
    border-radius: 20px;
    fill: none;
    stroke: ${({ theme }) => theme.palette.orange_400};
    stroke-width: 2px;
    stroke-dasharray: 168 480;
    stroke-dashoffset: 168;
    transition: 1s ease-in-out;
  }
`;

const RecruitButton = styled(Button)<{ isDisabled?: boolean }>`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  cursor: pointer;
  ${({ isDisabled }) => isDisabled && `cursor: not-allowed;`}
  outline: none;
  transition: 1s ease-in-out;
  color: ${({ theme }) => theme.palette.white};

  ${({ theme }) => theme.textStyle.web.Button_Point};
  ${media.mobile} {
    width: 148px;
    height: 56px;
    ${({ theme }) => theme.textStyle.mobile.Button_Point}
  }

  .text-group {
    position: relative;
  }

  .clone-text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: inline-block;
  }

  &:hover {
    transition: 1s ease-in-out;
    background: ${({ theme }) => theme.palette.grey_900};
    color: ${({ theme }) => theme.palette.orange_300};
    border: none;
    svg {
      stroke-dashoffset: -480;
    }
    .main-text {
      animation: ${slideOut} 0.533s cubic-bezier(0.33, 0, 0.67, 1) forwards;
    }
    .clone-text {
      animation: ${slideIn} 0.567s cubic-bezier(0.22, 1, 0.36, 1) 0.367s
        forwards;
    }
    ${media.mobile} {
      svg {
        display: none;
      }
    }
  }
`;

export default IntroSection;
