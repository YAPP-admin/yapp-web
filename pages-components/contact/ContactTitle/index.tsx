import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function ContactTitle(): ReactElement {
  return <TitleStyled>YAPP 문의</TitleStyled>;
}

const TitleStyled = styled.h2`
  ${({ theme }) => theme.textStyle.web.Title};
  color: ${({ theme }) => theme.palette.grey_1000};
  margin: 0;
  margin-bottom: 74px;
  ${media.tablet} {
    margin-bottom: 85px;
    text-align: center;
  }
  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

export default ContactTitle;
