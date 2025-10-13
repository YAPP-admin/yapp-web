import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function AnimatedTextSection(): ReactElement {
  return (
    <SectionContainer>
      <HighLightText>
        <p>아이디어와 열정, 실행력을 가진 사람들이</p>
        <p>함께 세상을 바꾸는 프로젝트를 만들어요</p>
      </HighLightText>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HighLightText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;

  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

export default AnimatedTextSection;
