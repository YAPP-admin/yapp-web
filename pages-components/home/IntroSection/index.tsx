import React from 'react';
import type { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import Router from 'next/router';
import { SectionTemplate } from 'pages-components/home';
import { Button } from 'components';
import media from 'styles/media';
import Yapp from 'constants/yapp';
import { slideIn, slideOut } from 'styles/utils-styles';

function IntroSection(): ReactElement {
  return (
    <IntroSectionContainer>
      <Dimension />
      <Background className="background" />
      <ContentWrapper>
        <TitleContainer>
          <span className="main-text">
            작은 아이디어로
            <br />
            세상을 크게 변화시키다.
          </span>
        </TitleContainer>
        <ButtonBlock>
          <RecruitButton
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
              <rect x="-0.9" y="0" width="168" height="65" rx="32" ry="32" />
            </svg>
            <span className="textgroup">
              <span className="mainText">
                {Yapp.YAPP_GENERATION}기 지원하기
              </span>
              <span className="cloneText">
                {Yapp.YAPP_GENERATION}기 지원하기
              </span>
            </span>
          </RecruitButton>
        </ButtonBlock>
      </ContentWrapper>
    </IntroSectionContainer>
  );
}

const IntroSectionContainer = styled(SectionTemplate)`
  position: relative;
  height: 100vh;
  overflow: hidden;

  :hover {
    > .background {
      transform: scale(1.15);
    }
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/main.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  transition: all 1.5s;
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
  margin-bottom: 48px;
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
    stroke: #fff;
    stroke-width: 2px;
    stroke-dasharray: 168 480;
    stroke-dashoffset: 168;
    transition: 1s ease-in-out;
  }
`;

const RecruitButton = styled(Button)`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  cursor: pointer;
  outline: none;
  transition: 1s ease-in-out;
  color: ${({ theme }) => theme.palette.white};

  .textgroup {
    position: relative;
  }

  .cloneText {
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
    .mainText {
      animation: ${slideOut} 0.533s cubic-bezier(0.33, 0, 0.67, 1) forwards;
    }
    .cloneText {
      animation: ${slideIn} 0.567s cubic-bezier(0.22, 1, 0.36, 1) 0.367s
        forwards;
    }
    ${media.mobile} {
      svg {
        display: none;
      }
    }
  }

  ${media.mobile} {
    width: 112px;
    height: 56px;
  }
`;

export default IntroSection;
