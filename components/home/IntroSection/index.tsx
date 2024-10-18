import { FloatingArrow } from 'components/common';
import type { MouseEvent, ReactElement } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Banner25th from './Banner25th';

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
      <Banner25th />
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

export default IntroSection;
