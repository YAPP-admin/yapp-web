import Breakpoints from 'constants/breakpoints';
import React, { ReactElement, ReactNode } from 'react';
import media from 'styles/media';
import styled from 'styled-components';

interface StoryLayoutProps {
  children: ReactNode;
}

function StoryLayout({ children }: StoryLayoutProps): ReactElement {
  return <StoryLayoutContainer>{children}</StoryLayoutContainer>;
}

const StoryLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 188px;

  ${media.tablet} {
    width: auto;
    padding-bottom: 164px;
    margin: inherit;
  }
  ${media.mobile} {
    padding-bottom: 100px;
    min-width: 280px;
  }
`;

export default StoryLayout;
