import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import media from 'styles/media';
import { Button } from 'components';

function Custom404() {
  const Router = useRouter();

  return (
    <Custom404Wrapper>
      <ContentContainer>
        <TextContainer>
          <div className="main-text">
            페이지 <span>공사중</span>입니다!
          </div>
          <div className="sub-text">
            프로젝트들을 더 매력적으로 보여드릴 수 있게 준비중입니다.
            <br />
            YAPP의 멋진 결과물들을 기대해 주세요!
          </div>
        </TextContainer>
        <ImageContainer>
          <Image src={'/assets/images/character.png'} layout="fill"></Image>
        </ImageContainer>
      </ContentContainer>
      <StyledButton
        width={176}
        height={65}
        fontColor="white"
        buttonColor="grey_850"
        onClick={() => Router.push('/')}
      >
        홈으로 돌아가기
      </StyledButton>
    </Custom404Wrapper>
  );
}

const Custom404Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(
    100vh - 70px - 336px - 49px
  ); // viewport - header - footer - copyright
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 210px;
  gap: 99px;
  margin-bottom: 64px;

  ${media.mobile} {
    flex-direction: column;
    height: 70%;
    gap: 0px;
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  word-break: keep-all;

  .main-text {
    ${({ theme }) => theme.textStyle.web.Title}
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Title_2}
    }

    > span {
      color: ${({ theme }) => theme.palette.orange_400};
    }
  }

  .sub-text {
    margin-top: 24px;

    ${({ theme }) => theme.textStyle.web.Body_1}
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Body_1}
    }
  }

  ${media.mobile} {
    align-items: center;
    margin: 0 15px;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 288px;
  height: 100%;

  ${media.mobile} {
    margin-top: 10px;
    width: 116px;
    height: 84px;
  }
`;

const StyledButton = styled(Button)`
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_800};
  }

  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

export default Custom404;
