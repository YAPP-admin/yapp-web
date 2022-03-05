import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface SectionTemplateProps {
  children: ReactNode;
  className?: string;
}

function SectionTemplate({
  children,
  className,
}: SectionTemplateProps): ReactElement {
  return (
    <StyledSectionTemplate className={className}>
      {children}
    </StyledSectionTemplate>
  );
}

const StyledSectionTemplate = styled.section`
  background-color: ${({ theme }) => theme.palette.grey_100};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default SectionTemplate;
