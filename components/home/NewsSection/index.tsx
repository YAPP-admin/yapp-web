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
        title="YAPP 안의 사람들, 그리고 이야기"
        subTitle="야뿌들의 성장 과정, 활동 후기, 밋업 현장과 다양한 이야기를 담고 있어요."
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
