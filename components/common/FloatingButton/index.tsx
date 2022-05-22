import React, { useState } from 'react';
import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/common/Button';
import { Mail, Facebook, Plus, Kakao } from 'public/assets/icons';
import media from 'styles/media';
import Yapp from 'constants/yapp';

function FloatingButton(): ReactElement {
  const [visible, setVisible] = useState(false);
  const handleTrigger = () => {
    setVisible(!visible);
  };

  return (
    <>
      <TriggerButton
        width={56}
        height={56}
        borderRadius={28}
        onClick={handleTrigger}
        visible={visible}
      >
        <Plus />
      </TriggerButton>
      <FixedFloatingContainer visible={visible}>
        <AnimatedFloatingContainer visible={visible}>
          <ButtonLinked
            href={`mailto:${Yapp.YAPP_OFFICIAL_EMAIL}`}
            rel="noreferrer"
          >
            <Button
              width={56}
              height={56}
              borderRadius={28}
              buttonColor="orange_400"
              className="floating-button mail"
            >
              <Mail />
              <span className="text mail">이메일 문의</span>
            </Button>
          </ButtonLinked>
          <ButtonLinked
            target="_blank"
            href={Yapp.YAPP_FACEBOOK}
            rel="noreferrer"
          >
            <Button
              width={56}
              height={56}
              borderRadius={28}
              buttonColor="facebook"
              className="floating-button facebook"
            >
              <Facebook />
              <span className="text facebook">페이스북 문의</span>
            </Button>
          </ButtonLinked>
          <ButtonLinked target="_blank" href={Yapp.YAPP_KAKAO} rel="noreferrer">
            <Button
              width={56}
              height={56}
              borderRadius={28}
              buttonColor="kakao"
              className="floating-button kakao"
            >
              <Kakao />
              <span className="text kakao">카카오톡 문의</span>
            </Button>
          </ButtonLinked>
        </AnimatedFloatingContainer>
      </FixedFloatingContainer>
    </>
  );
}

const TriggerButton = styled(Button)<{ visible: boolean }>`
  position: fixed;
  bottom: 48px;
  right: 48px;
  z-index: 10000;
  background: ${({ theme }) =>
    `linear-gradient(208.15deg, ${theme.palette.orange_300} 12.08%, ${theme.palette.orange_500} 86.71%)`};

  ${media.mobile} {
    width: 48px;
    height: 48px;
    bottom: 12px;
    right: 12px;
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
  z-index: 9000;
  opacity: 0;
  visibility: 'hidden';
  pointer-events: none;

  ${media.mobile} {
    bottom: 12px;
    right: 12px;
  }

  /* floating container transition
   해당 transition을 통해 버튼이 Plus 버튼에서 자연스럽게 올라와지는 것 처럼 보임 */
  transition: all 1.2s;
  ${({ visible }) =>
    visible &&
    css`
      bottom: 108px; // Plus 버튼에서의 간격
      opacity: 1;
      visibility: visible;
      pointer-events: auto;

      ${media.mobile} {
        bottom: 63px;
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

    ${media.mobile} {
      width: 48px;
      height: 48px;
    }

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
      width: 174px;
      padding: 0 20px 0 5px;
      .text {
        display: inline-block;
      }

      ${media.mobile} {
        width: 140px;
      }
    }
  }
`;

const ButtonLinked = styled.a`
  text-decoration: none;
`;

export default FloatingButton;
