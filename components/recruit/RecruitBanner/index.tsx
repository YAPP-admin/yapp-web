import { AnimatedButton, Button } from 'components/common';
import Path from 'constants/path';
import {
  IS_RECRUITING,
  NEXT_GENERATION_RECRUIT_LINK,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import { useDday } from 'hooks/useDday';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import media from 'styles/media';
import TimeBlock from '../TimeBlock';

function RecruitBanner() {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { days, hrs, mins, secs } = useDday(new Date('2025-10-25'));

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
              window.location.href = NEXT_GENERATION_RECRUIT_LINK;
              return;
            }
            router.push(Path.Recruit);
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
  width: 100vw;
  height: 100vh;
  background: url('/assets/images/27th/recruit.png') no-repeat center/cover;
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  color: ${({ theme }) => theme.palette.white_80};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 338px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;

  ${media.mobile} {
    top: 344px;
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
