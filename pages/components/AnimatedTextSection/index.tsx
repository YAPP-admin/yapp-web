import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate } from 'pages/components';

function AnimatedTextSection(): ReactElement {
  return (
    <AnimatedTextSectionContainer>
      <span className="intro-text">Animated</span>
    </AnimatedTextSectionContainer>
  );
}

const AnimatedTextSectionContainer = styled(SectionTemplate)`
  height: 100vh;
  border: 1px solid black;
  ${({ theme }) => theme.textStyle.web.Body_Point}
  ${media.mobile} {
    .intro-text {
      ${({ theme }) => theme.textStyle.mobile.Body_Point}
    }
  }
`;

export default AnimatedTextSection;
