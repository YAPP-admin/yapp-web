import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function AnimatedTextSection(): ReactElement {
  return (
    <YappIntroContainer>
      <span className="intro-text">Animated</span>
    </YappIntroContainer>
  );
}

const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 200px 0;
`;

const YappIntroContainer = styled(ContainerLayout)`
  text-align: center;
  word-break: keep-all;
  background-color: #f9f9f9;

  ${({ theme }) => theme.textStyle.web.Body_Point}
  ${media.mobile} {
    .intro-text {
      ${({ theme }) => theme.textStyle.mobile.Body_Point}
    }
  }
`;

export default AnimatedTextSection;
