import Breakpoints from 'constants/breakpoints';
import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  Facebook_14,
  Facebook_24,
  Instagram_14,
  Instagram_24,
  Kakao_14,
  Kakao_24,
  Mail_14,
  Mail_24,
} from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

export function ContactMailIcon(): ReactElement {
  const { windowWidth } = useWindowDimensions();
  return (
    <IconBoxStyled boxColor="orange_400">
      {windowWidth > Breakpoints.medium ? <Mail_24 /> : <Mail_14 />}
    </IconBoxStyled>
  );
}

export function ContactKakaoIcon(): ReactElement {
  const { windowWidth } = useWindowDimensions();
  return (
    <IconBoxStyled boxColor="yellow_300">
      {windowWidth > Breakpoints.medium ? <Kakao_24 /> : <Kakao_14 />}
    </IconBoxStyled>
  );
}

export function ContactFacebookIcon(): ReactElement {
  const { windowWidth } = useWindowDimensions();
  return (
    <IconBoxStyled boxColor="facebook">
      {windowWidth > Breakpoints.medium ? <Facebook_24 /> : <Facebook_14 />}
    </IconBoxStyled>
  );
}

export function ContactInstagramIcon(): ReactElement {
  const { windowWidth } = useWindowDimensions();
  return (
    <IconBoxStyled boxColor="instagram">
      {windowWidth > Breakpoints.medium ? <Instagram_24 /> : <Instagram_14 />}
    </IconBoxStyled>
  );
}

const IconBoxStyled = styled.div<{ boxColor: PaletteKeyTypes }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme, boxColor }) => theme.palette[boxColor]};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.mobile} {
    width: 24px;
    height: 24px;
  }
`;
