import { Button } from 'components/common';
import Path from 'constants/path';
import {
  IS_RECRUITING,
  NEXT_GENERATION_RECRUIT_LINK,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import { useDday } from 'hooks/useDday';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';
import TimeBlock from '../TimeBlock';
import Yapp from 'constants/yapp';

function RecruitBanner() {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { days, hrs, mins, secs } = useDday(new Date('2025-10-25T23:59:59'));

  const router = useRouter();

  return (
    <RecruitBannerContainer>
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
        <Button
          variant="primary"
          onClick={() => {
            if (!IS_RECRUITING) {
              window.open(NEXT_GENERATION_RECRUIT_LINK, '_blank');
              return;
            }
            window.open(Yapp.YAPP_RECRUIT_ALL, '_blank');
          }}
        >
          {BannerInfo.buttonName}
        </Button>
      </InnerContainer>
    </RecruitBannerContainer>
  );
}

const RecruitBannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('/assets/images/27th/recruit.png') no-repeat center/cover;
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

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  color: ${({ theme }) => theme.palette.white_80};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const InnerContainer = styled.div`
  padding-top: 238px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
  animation: ${slideUp} 1s ease-in-out forwards;

  ${media.mobile} {
    padding-top: 144px;
  }
`;

const TimeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 0 32px 0;
`;

const Colon = styled.span`
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

export default RecruitBanner;
