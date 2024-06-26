import { FloatingArrow } from 'components/common';
import type { MouseEvent, ReactElement } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Banner24th from './Banner24th';

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

  return (
    <IntroSectionContainer
      onMouseEnter={handleEnter}
      onMouseLeave={handleEnter}
      onMouseMove={handleMove}
    >
      <Banner24th />
      <FloatingArrow />
    </IntroSectionContainer>
  );
}

const IntroSectionContainer = styled.div`
  background-color: black;
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

const ArrowDownConatiner = styled.div`
  position: fixed;
  bottom: 70px;
  left: 0px;
  transform: translateX(calc(50vw - 50%));

  svg {
    width: 64px;
    height: 64px;
    transform: translateY(-30px);
  }

  ${media.mobile} {
    & > svg {
      width: 48px;
      height: 48px;
      transform: translateY(-36px);
    }
  }
`;

const MainBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.black};
`;

const Dimension = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 2;
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
