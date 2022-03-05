import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface SectionTitleProps {
  title: string;
  className?: string;
}

function SectionTitle({ title, className }: SectionTitleProps): ReactElement {
  return <StyledSectionTitle className={className}>{title}</StyledSectionTitle>;
}

const StyledSectionTitle = styled.h2`
  ${({ theme }) => theme.textStyle.web.Title};
  margin-bottom: 72px;
  margin-top: 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.grey_1000};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_2};
    margin-bottom: 32px;
  }
`;

export default SectionTitle;
