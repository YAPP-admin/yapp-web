import {
  Facebook_24,
  Instagram_24,
  Kakao_24,
  Mail_24,
} from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PaletteKeyTypes } from 'styles/theme';

export function ContactMailIcon(): ReactElement {
  return (
    <IconBoxStyled boxColor="orange_400">
      <Mail_24 />
    </IconBoxStyled>
  );
}

export function ContactKakaoIcon(): ReactElement {
  return (
    <IconBoxStyled boxColor="yellow_300">
      <Kakao_24 />
    </IconBoxStyled>
  );
}

export function ContactFacebookIcon(): ReactElement {
  return (
    <IconBoxStyled boxColor="facebook">
      <Facebook_24 />
    </IconBoxStyled>
  );
}

export function ContactInstagramIcon(): ReactElement {
  return (
    <IconBoxStyled boxColor="instagram">
      <Instagram_24 />
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
`;
