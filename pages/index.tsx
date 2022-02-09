import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Button, Box, Carousel } from 'components';
import { CURRENT_INFO_DATA, CAROUSEL_DATA } from 'database/home';

function Home(): ReactElement {
  return (
    <HomeContainer>
      <YappIntroContainer>
        <span className="intro-text">
          아이디어와 열정, 그리고 가능성을 바탕으로
          <br />
          기존에 없던 새로운 가치를 만들기 위해 노력하는
          <br />
          대학생 연합 기업형 IT동아리 YAPP
        </span>
      </YappIntroContainer>
      <YappCurrentContainer>
        <TitleText>YAPP의 현재</TitleText>
        <GridContainer>
          {CURRENT_INFO_DATA.map(({ title, content }, index) => (
            <Box
              className="grid-box"
              width={380}
              height={268}
              backgroundColor="lightGray"
              borderRadius={20}
              key={index}
            >
              <span className="title-text">{title}</span>
              <span className="content-text">{content}</span>
            </Box>
          ))}
        </GridContainer>
      </YappCurrentContainer>
      <ProjectContainer>
        <TitleText>YAPP의 프로젝트</TitleText>
        <Carousel data={CAROUSEL_DATA} />
        <Button fontColor="black" buttonColor="white" borderColor="lightGray">
          프로젝트 더보기
        </Button>
      </ProjectContainer>
      <SocialContainer>
        <TitleText>YAPP의 소식</TitleText>
        <CardContainer></CardContainer>
        <Button fontColor="black" buttonColor="white" borderColor="lightGray">
          페이스북 둘러보기
        </Button>
      </SocialContainer>
      <SponsorContainer>
        <TitleText>YAPP의 후원사</TitleText>
        <span className="detail-text">
          YAPP은 운영을 위한 다양한 후원사를 기다리고 있습니다.
        </span>
        <Button fontColor="white" buttonColor="gray" borderColor="lightGray">
          후원 문의
        </Button>
      </SponsorContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 200px 0;
`;

const TitleText = styled.span`
  ${({ theme }) => theme.textStyle.web.Title};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_2}
  }
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

const YappCurrentContainer = styled(ContainerLayout)``;

const GridContainer = styled.article`
  display: grid;
  row-gap: 32px;
  column-gap: 30px;

  grid-template-columns: repeat(3, 1fr);
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;

    .title-text {
      ${({ theme }) => theme.textStyle.web.Subtitle}
    }
    .content-text {
      ${({ theme }) => theme.textStyle.web.Head}
    }

    ${media.mobile} {
      width: 335px;
      height: 220px;

      .title-text {
        ${({ theme }) => theme.textStyle.mobile.Subtitle}
      }
      .content-text {
        ${({ theme }) => theme.textStyle.mobile.Head}
      }
    }
  }
`;

const ProjectContainer = styled(ContainerLayout)``;

const CardContainer = styled.article``;

const SocialContainer = styled(ContainerLayout)``;

const SponsorContainer = styled(ContainerLayout)`
  .detail-text {
    ${({ theme }) => theme.textStyle.web.Body_1};
  }

  ${media.mobile} {
    .detail-text {
      ${({ theme }) => theme.textStyle.mobile.Body_1}
    }
  }
`;

export default Home;
