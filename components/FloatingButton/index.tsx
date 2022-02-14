import React, { useState } from 'react';
import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/Button';
import Mail from 'public/assets/icons/mail.svg';
import Contact from 'public/assets/icons/contact.svg';
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
            buttonColor="white"
            className="floating-button mail"
          >
            <Mail />
          </Button>
          <Button
            width={64}
            height={64}
            borderRadius={32}
            buttonColor="facebook"
            className="floating-button facebook"
          >
            <Facebook />
          </Button>
          <Button
            width={64}
            height={64}
            borderRadius={32}
            buttonColor="kakao"
            className="floating-button kakao"
          >
            <Kakao />
          </Button>
        </SubContainer>
      </MainContainer>
      <TriggerButton
        width={64}
        height={64}
        borderRadius={32}
        onClick={handleTrigger}
      >
        <Contact />
      </TriggerButton>
    </FloatingButtonsContainer>
  );
}

const FloatingButtonsContainer = styled.div`
  position: fixed;
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

const TriggerButton = styled(Button)`
  position: relative;
  margin-top: 5px;
  z-index: 101;
  background: linear-gradient(208.15deg, #fa9855 12.08%, #f06c11 86.71%);
`;

const SubContainer = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  bottom: -150px;
  z-index: 100;

  .floating-button {
    margin: 5px 0;
  }

  transition: all 0.7s ease-out;
  ${({ visible }) =>
    visible &&
    css`
      bottom: 0;
    `};
`;

export default FloatingButton;
