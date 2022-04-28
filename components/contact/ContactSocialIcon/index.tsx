import {
  Facebook_24,
  Instagram_24,
  Kakao_24,
  Mail_24,
} from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { SocialTypes } from '../ContactList';

function ContactSocialIcon({ social }: SocialTypes): ReactElement {
  return (
    <IconBoxStyled social={social}>
      <div className="icon" />
    </IconBoxStyled>
  );
}

const IconBoxStyled = styled.div<SocialTypes>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ social, theme }) => {
    switch (social) {
      case 'mail':
        return css`
          background-color: ${theme.palette.orange_400};
          .icon {
            background-image: url(${Mail_24});
          }
        `;
      case 'kakao':
        return css`
          background-color: ${theme.palette.yellow_300};
          .icon {
            background-image: url(${Kakao_24});
          }
        `;
      case 'facebook':
        return css`
          background-color: ${theme.palette.facebook};
          .icon {
            background-image: url(${Facebook_24});
          }
        `;
      case 'instagram':
        return css`
          background-color: ${theme.palette.instagram};
          .icon {
            background-image: url(${Instagram_24});
          }
        `;
    }
  }}

  ${media.mobile} {
    width: 24px;
    height: 24px;
  }

  .icon {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 24px;
    ${media.mobile} {
      width: 14px;
      height: 14px;
    }
  }
`;

export default ContactSocialIcon;
