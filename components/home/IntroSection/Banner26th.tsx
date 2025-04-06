import { Box, Button } from 'components/common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Dday from '../Dday';
import YappuLogo from 'public/assets/images/26th/illust_mini.svg';
import { NEXT_GENERATION_RECRUIT_LINK } from 'database/recruit';

const Banner26th = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Banner25thTextContentBox className={mounted ? 'appear' : ''}>
        <BannerTitleBox>
          <YappuLogoBox />
          <YappSubTitleBox>탐색을 넘어 세상을 넓혀가는</YappSubTitleBox>
          <h3>
            <BannerTitleSpan>26기의 주인공</BannerTitleSpan>이
            <br />
            되어주세요
          </h3>
          <BannerRecruitDateBox>4.10 (목) - 4.20 (일)</BannerRecruitDateBox>
        </BannerTitleBox>
        <Dday />
        <StyledButton
          width={265}
          height={72}
          borderRadius={16}
          buttonColor={'blue_100'}
          fontColor={'white'}
          onClick={() => (window.location.href = NEXT_GENERATION_RECRUIT_LINK)}
        >
          ⏰ 26기 모집 알림 신청하기
        </StyledButton>
      </Banner25thTextContentBox>
      <BannerBackgroundInner className={mounted ? 'appear' : ''} />
    </>
  );
};
export default Banner26th;

const BannerBackgroundInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/assets/images/26th/banner-pc.png'),
    linear-gradient(#bdeaff, #67b2ff);
  transform: scale(0.8);
  opacity: 0;
  transition: transform 2s ease, opacity 2s ease;

  &.appear {
    transform: scale(1);
    opacity: 1;
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  ${media.mobile} {
    background: url('/assets/images/26th/banner-tablet.png'),
      linear-gradient(#bdeaff, #67b2ff);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  ${media.small} {
    background: url('/assets/images/26th/banner-mobile.png'),
      linear-gradient(#bdeaff, #67b2ff);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Banner25thTextContentBox = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  z-index: 20;
  flex: 1;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 8rem;
  transition: transform 2s ease, opacity 2s ease;
  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;

  &.appear {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
  ${media.small} {
    gap: 4rem;
  }
`;

const BannerTitleBox = styled.div`
  display: flex;
  gap: 1rem;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    margin: 0;
    text-align: center;
    font-size: 6.8rem;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: -0.07rem;
    color: ${({ theme }) => theme.palette.black};
  }

  ${media.small} {
    top: 20%;
    gap: 1rem;

    & > h3 {
      font-size: 3.6rem;
      letter-spacing: -0.032rem;
    }
  }

  ${media.small} {
    gap: 0.8rem;
  }
`;
const BannerTitleSpan = styled.span`
  color: ${({ theme }) => theme.palette.blue_100};
  font-weight: 600;
`;
const BannerRecruitDateBox = styled.div`
  color: ${({ theme }) => theme.palette.grey_700};
  font-weight: 600;
  font-size: 2.6rem;
  margin-top: 4rem;
`;

const YappuLogoBox = styled(YappuLogo)``;

const YappSubTitleBox = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.grey_700};
  margin-top: 1.4rem;

  ${media.small} {
    font-size: 1.6rem;
  }
`;

const StyledButton = styled(Button)`
  ${media.mobile} {
    font-size: 2rem;
  }
  ${media.small} {
    font-size: 1.6rem;
    width: 229px;
    height: 59px;
    border-radius: 12px;
  }
`;
