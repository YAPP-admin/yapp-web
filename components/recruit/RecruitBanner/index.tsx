import {
  IS_RECRUITING,
  NEXT_GENERATION_RECRUIT_LINK,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import { useDday } from 'hooks/useDday';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';
import TimeBlock from '../TimeBlock';
import Yapp from 'constants/yapp';

function RecruitBanner() {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { days, hrs, mins, secs } = useDday(new Date('2026-04-17T00:00:00'));

  return (
    <RecruitBannerContainer>
      <BannerImageBox>
        <InnerContainer>
          <BannerTitle>{BannerInfo.title}</BannerTitle>
          <TimeList>
            <TimeBlock type="DAYS" time={days} />
            <Colon>:</Colon>
            <TimeBlock type="HRS" time={hrs} />
            <Colon>:</Colon>
            <TimeBlock type="MINS" time={mins} />
            <Colon>:</Colon>
            <TimeBlock type="SECS" time={secs} />
          </TimeList>
          {/*
          <ApplyButton
            onClick={() => {
              if (!IS_RECRUITING) {
                window.open(NEXT_GENERATION_RECRUIT_LINK, '_blank');
                return;
              }
              window.open(Yapp.YAPP_RECRUIT_ALL, '_blank');
            }}
          >
            {BannerInfo.buttonName}
          </ApplyButton>
          */}
        </InnerContainer>
      </BannerImageBox>
    </RecruitBannerContainer>
  );
}

const RecruitBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 960px;
  background: ${({ theme }) => theme.palette.white};

  ${media.mobile} {
    height: 100vh;
  }
`;

const BannerImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/assets/images/28th/recruit_bg.png') no-repeat center/cover;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  text-align: center;
  padding-top: 238px;
  animation: ${slideUp} 1s ease-in-out forwards;

  ${media.mobile} {
    padding-top: 144px;
    gap: 24px;
  }
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  color: ${({ theme }) => theme.palette.discovery_28th_text_80};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const TimeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${media.mobile} {
    gap: 14px;
  }
`;

const Colon = styled.span`
  color: ${({ theme }) => theme.palette.discovery_28th_text};
  opacity: 0.8;
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

const ApplyButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 18px 8px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.discovery_28th_button};
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.97);
  }

  ${media.mobile} {
    padding: 8px 18px;
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

export default RecruitBanner;
