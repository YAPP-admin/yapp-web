import React, { useState } from 'react';
import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/Button';
import Mail from 'public/assets/icons/mail.svg';
import Plus from 'public/assets/icons/plus.svg';
import Facebook from 'public/assets/icons/facebook.svg';
import Kakao from 'public/assets/icons/kakao.svg';

function FloatingButton(): ReactElement {
  const [visible, setVisible] = useState(false);
  const handleTrigger = () => {
    setVisible(!visible);
  };

  return (
    <FloatingButtonsContainer>
      <MainContainer visible={visible}>
        <SubContainer visible={visible}>
          <Button
            width={64}
            height={64}
            borderRadius={32}
            buttonColor="orange_400"
            className="floating-button mail"
          >
            <Mail />
            <span className="text mail">이메일 문의</span>
          </Button>
          <Button
            width={64}
            height={64}
            borderRadius={32}
            buttonColor="facebook"
            className="floating-button facebook"
          >
            <Facebook />
            <span className="text facebook">페이스북 문의</span>
          </Button>
          <Button
            width={64}
            height={64}
            borderRadius={32}
            buttonColor="kakao"
            className="floating-button kakao"
          >
            <Kakao />
            <span className="text kakao">카카오톡 문의</span>
          </Button>
        </SubContainer>
      </MainContainer>
      <TriggerButton
        width={64}
        height={64}
        borderRadius={32}
        onClick={handleTrigger}
      >
        <Plus className="temp" />
      </TriggerButton>
    </FloatingButtonsContainer>
  );
}

const FloatingButtonsContainer = styled.div`
  position: fixed;
  text-align: right;
  bottom: 48px;
  right: 48px;
  z-index: 1000;
`;

const MainContainer = styled.div<{ visible: boolean }>`
  position: relative;
  bottom: -65px;
  overflow: hidden;
  opacity: 0;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  transition: all 1.5s;
  ${({ visible }) =>
    visible &&
    css`
      bottom: 0;
      opacity: 1;
    `};
`;

const SubContainer = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  bottom: -150px;

  // floating 버튼 등장 transition
  transition: all 0.7s ease-out;
  ${({ visible }) =>
    visible &&
    css`
      bottom: 0;
    `};

  .floating-button {
    display: flex;
    justify-content: space-around;
    margin: 5px 0;

    .text {
      display: none;
      flex-grow: 0;
      flex-shrink: 0;
      ${({ theme }) => theme.textStyle.web.Category}

      &.facebook, &.mail {
        color: ${({ theme }) => theme.palette.white};
      }
    }

    // floating 버튼 길이 transition
    transition: all 0.5s;
    :hover {
      width: 188px;
      padding: 0 20px 0 5px;
      .text {
        display: inline-block;
      }
    }
  }
`;

const TriggerButton = styled(Button)`
  position: relative;
  margin-top: 5px;
  background-image: ${({ theme }) =>
    `linear-gradient(208.15deg, ${theme.palette.orange_300} 12.08%, ${theme.palette.orange_500} 86.71%)`};

  // 버튼 길이 transition
  svg {
    transition: transform 0.5s;
  }
  transition: all 0.5s;
  :hover {
    background-image: ${({ theme }) => theme.palette.grey_800};
    svg {
      transform: rotate(45deg);
    }
  }
`;

export default FloatingButton;
