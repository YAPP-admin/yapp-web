import React, { useState } from 'react';
import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/Button';
import { Mail, Facebook, Plus, Kakao } from 'public/assets/icons';
import media from 'styles/media';

function FloatingButton(): ReactElement {
  const [visible, setVisible] = useState(false);
  const handleTrigger = () => {
    setVisible(!visible);
  };

  return (
    <>
      <TriggerButton
        width={64}
        height={64}
        borderRadius={32}
        onClick={handleTrigger}
        visible={visible}
      >
        <Plus />
      </TriggerButton>
      <FixedFloatingContainer visible={visible}>
        <AnimatedFloatingContainer visible={visible}>
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
        </AnimatedFloatingContainer>
      </FixedFloatingContainer>
    </>
  );
}

const TriggerButton = styled(Button)<{ visible: boolean }>`
  position: fixed;
  bottom: 48px;
  right: 48px;
  z-index: 1000;
  background: ${({ theme }) =>
    `linear-gradient(208.15deg, ${theme.palette.orange_300} 12.08%, ${theme.palette.orange_500} 86.71%)`};

  ${media.mobile} {
    bottom: 24px;
    right: 24px;
  }

  svg {
    // plus 버튼 각도 조절 transition
    transition: transform 0.5s;
  }

  ${({ visible }) =>
    visible &&
    css`
      background: ${({ theme }) => theme.palette.grey_800};
      svg {
        transform: rotate(45deg);
      }
    `};
`;

const FixedFloatingContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  overflow: hidden;
  bottom: 48px;
  right: 48px;
  z-index: 900;
  opacity: 0;
  visibility: 'hidden';
  pointer-events: none;

  ${media.mobile} {
    bottom: 24px;
    right: 24px;
  }

  /* floating container transition
   해당 transition을 통해 버튼이 Plus 버튼에서 자연스럽게 올라와지는 것 처럼 보임 */
  transition: all 1.2s;
  ${({ visible }) =>
    visible &&
    css`
      bottom: 117px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;

      ${media.mobile} {
        bottom: 93px;
      }
    `};
`;

const AnimatedFloatingContainer = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  bottom: -150px;

  // floating 버튼 등장 transition
  transition: all 1s;
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

export default FloatingButton;
