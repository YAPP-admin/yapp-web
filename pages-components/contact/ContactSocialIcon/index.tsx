import {
  Facebook_24,
  Instagram_24,
  Kakao_24,
  Mail_24,
} from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import { SocialTypes } from '../ContactList';

function ContactSocialIcon({ social }: SocialTypes): ReactElement {
  const getIcon = (): ReactElement => {
    switch (social) {
      case 'mail':
        return (
          <IconBoxStyled boxColor="orange_400">
            <IconStyled social={social} />
          </IconBoxStyled>
        );
      case 'kakao':
        return (
          <IconBoxStyled boxColor="yellow_300">
            <IconStyled social={social} />
          </IconBoxStyled>
        );
      case 'facebook':
        return (
          <IconBoxStyled boxColor="facebook">
            <IconStyled social={social} />
          </IconBoxStyled>
        );
      case 'instagram':
        return (
          <IconBoxStyled boxColor="instagram">
            <IconStyled social={social} />
          </IconBoxStyled>
        );
    }
  };

  return <>{getIcon()}</>;
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

const IconStyled = styled.div<SocialTypes>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  ${media.mobile} {
    width: 14px;
    height: 14px;
  }
  ${({ social }) => {
    switch (social) {
      case 'mail':
        return css`
          background-image: url(${Mail_24});
        `;
      case 'kakao':
        return css`
          background-image: url(${Kakao_24});
        `;
      case 'facebook':
        return css`
          background-image: url(${Facebook_24});
        `;
      case 'instagram':
        return css`
          background-image: url(${Instagram_24});
        `;
    }
  }}
`;

export default ContactSocialIcon;
