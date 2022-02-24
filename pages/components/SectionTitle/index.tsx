import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface SectionTitleProps {
  children: string | ReactNode;
  className?: string;
}

function SectionTitle({
  children,
  className,
}: SectionTitleProps): ReactElement {
  return (
    <StyledSectionTitle className={className}>{children}</StyledSectionTitle>
  );
}

const StyledSectionTitle = styled.span`
  text-align: center;

  ${({ theme }) => theme.textStyle.web.Title};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_2};
  }
`;

export default SectionTitle;
