import Breakpoints from 'constants/breakpoints';
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface SectionTemplateProps {
  children: ReactNode;
}

function SectionTemplate({ children }: SectionTemplateProps): ReactElement {
  return (
    <TemplateBlock>
      <TemplateInner>{children}</TemplateInner>
    </TemplateBlock>
  );
}

const TemplateBlock = styled.div`
  width: 100%;
`;

const TemplateInner = styled.div`
  width: ${Breakpoints.large}px;
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
