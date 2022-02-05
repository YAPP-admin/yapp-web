import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps): ReactElement {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
}

const StyledSectionTitle = styled.h2`
  ${({ theme }) => theme.textStyle.web.Title};
  margin-bottom: 64px;
  text-align: center;
`;

export default SectionTitle;
