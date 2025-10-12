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
    <TemplateBlock backgroundColor={backgroundColor}>
      <TemplateInner className={className}>{children}</TemplateInner>
    </TemplateBlock>
  );
}

const TemplateBlock = styled.div<{
  backgroundColor: PaletteKeyTypes;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    theme.palette[backgroundColor]};
  width: auto;
  padding: 0 80px;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

const TemplateInner = styled.div`
  height: auto;
  margin: 0 auto;
  padding: 100px 0;
  ${media.tablet} {
    width: 100%;
  }
  ${media.mobile} {
    padding: 0 0 120px 0;
  }
`;

export default SectionTemplate;
