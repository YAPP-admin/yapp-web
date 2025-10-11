import { Button, NewsCard } from 'components/common';
import { SectionTemplate, SectionTitle } from 'components/home';
import Yapp from 'constants/yapp';
import { NEWS_DATA } from 'database/home';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function MainContainer(): ReactElement {
  return (
    <SocialContainer>
      <SectionTitle
        fontColor="black_100"
        subFontColor="black_60"
        align="left"
        title="YAPP의 서비스들"
        subTitle="YAPP에서 활동하는 구성원인 ‘야뿌’들이 만들어낸 프로젝트들이에요."
      />
      <CardContainer>
        {NEWS_DATA.map((data, index) => {
          return <NewsCard key={index} data={data} />;
        })}
      </CardContainer>
      <Button
        fontColor="white"
        buttonColor="grey_850"
        onClick={() => window.open(Yapp.YAPP_FACEBOOK, '_blank')}
      >
        이야기 더보기
      </Button>
    </SocialContainer>
  );
}

const SocialContainer = styled(SectionTemplate)`
  padding: 200px 80px;
  ${media.mobile} {
    padding: 120px 20px;
  }
`;

const CardContainer = styled.article`
  margin: 49px 0;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${media.mobile} {
    grid-template-columns: 1fr 1fr;
  }
  ${media.small} {
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled(Button)`
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_700};
  }

  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

export default MainContainer;
