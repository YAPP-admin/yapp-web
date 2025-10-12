import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface SectionTemplateProps {
  children: ReactNode;
  className?: string;
}

function SectionTemplate({
  children,
  className,
}: SectionTemplateProps): ReactElement {
  return (
    <TemplateBlock>
      <TemplateInner className={className}>{children}</TemplateInner>
    </TemplateBlock>
  );
}

const TemplateBlock = styled.div`
  width: auto;
  padding: 0 80px;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

const TemplateInner = styled.div`
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
