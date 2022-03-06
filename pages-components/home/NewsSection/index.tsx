import type { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionTemplate } from 'pages-components/home';
import { Button, NewsCard } from 'components';
import { NEWS_DATA } from 'database/home';
import media from 'styles/media';
import Yapp from 'constants/yapp';

function MainContainer(): ReactElement {
  return (
    <SocialContainer>
      <SectionTitle>따끈한 최신 소식</SectionTitle>
      <CardContainer>
        {NEWS_DATA.map((data, index) => {
          return <NewsCard key={index} data={data} />;
        })}
      </CardContainer>
      <StyledButton
        width={176}
        height={65}
        fontColor="white"
        buttonColor="grey_850"
        onClick={() => window.open(Yapp.YAPP_FACEBOOK, '_blank')}
      >
        소식 더보기
      </StyledButton>
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
