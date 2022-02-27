import type { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionTemplate } from 'pages/components';
import { Button, NewsCard } from 'components';
import { NEWS_DATA } from 'database/home';
import Yapp from 'constants/yapp';

function MainContainer(): ReactElement {
  return (
    <SocialContainer>
      <SectionTitle>YAPP의 소식</SectionTitle>
      <CardContainer>
        {NEWS_DATA.map((data, index) => {
          return <NewsCard key={index} data={data} />;
        })}
      </CardContainer>
      <Button
        width={252}
        height={78}
        fontColor="white"
        buttonColor="grey_850"
        onClick={() => window.open(Yapp.YAPP_FACEBOOK, '_blank')}
      >
        페이스북 둘러보기
      </Button>
    </SocialContainer>
  );
}

const SocialContainer = styled(SectionTemplate)`
  padding: 200px 0;
`;

const CardContainer = styled.article`
  margin: 49px 0;
  text-align: center;
`;

export default MainContainer;
