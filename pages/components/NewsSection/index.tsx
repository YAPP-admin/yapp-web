import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Button, SectionTitle } from 'components';

function MainContainer(): ReactElement {
  return (
    <SocialContainer>
      <SectionTitle>YAPP의 소식</SectionTitle>
      <CardContainer></CardContainer>
      <Button width={252} height={78} fontColor="white" buttonColor="grey_850">
        페이스북 둘러보기
      </Button>
    </SocialContainer>
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

const SocialContainer = styled(ContainerLayout)`
  background-color: #f9f9f9;
`;

const CardContainer = styled.article`
  background-color: #f9f9f9;
`;

export default MainContainer;
