import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SectionTemplate } from 'pages/components';
import { Button } from 'components';
import media from 'styles/media';
import Yapp from 'constants/yapp';

function IntroSection(): ReactElement {
  return (
    <IntroSectionContainer>
      <TitleContainer>
        <span className="main-text">
          작은 아이디어로
          <br />
          세상을 크게 변화시키다.
        </span>
      </TitleContainer>
      <Button
        width={220}
        height={78}
        fontColor="yellow_400"
        buttonColor="grey_900"
        onClick={() => Router.push('/recruit')}
      >
        {Yapp.YAPP_GENERATION} 지원하기
      </Button>
    </IntroSectionContainer>
  );
}

const IntroSectionContainer = styled(SectionTemplate)`
  height: 100vh;
  background-color: #c4c4c4;
`;

const TitleContainer = styled.div`
  text-align: center;
  word-break: keep-all;
  margin-bottom: 48px;

  .main-text {
    color: ${({ theme }) => theme.palette['white']};

    ${({ theme }) => theme.textStyle.web.Head}
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Head}
    }
  }
`;

export default IntroSection;
