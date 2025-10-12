import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

interface SectionTemplateProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: PaletteKeyTypes;
}

function SectionTemplate({
  backgroundColor = 'white_100',
  children,
  className,
}: SectionTemplateProps): ReactElement {
  return (
    <TemplateBlock backgroundColor={backgroundColor}>{children}</TemplateBlock>
  );
}

const TemplateBlock = styled.div<{
  backgroundColor: PaletteKeyTypes;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    theme.palette[backgroundColor]};
  width: auto;
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

export default SectionTemplate;
