import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  title: string;
  className?: string;
}

function SectionTitle({ title, className }: SectionTitleProps): ReactElement {
  return <StyledSectionTitle className={className}>{title}</StyledSectionTitle>;
}

const StyledSectionTitle = styled.h2`
  ${({ theme }) => theme.textStyle.web.Title};
  margin-bottom: 64px;
  text-align: center;
`;

export default SectionTitle;
