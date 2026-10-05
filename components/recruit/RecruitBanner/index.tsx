import {
  LINK_BY_STATUS,
  RECRUITING_DEADLINE,
  RECRUITING_EXTRA_DEADLINE,
  RECRUITING_START,
  RECRUITING_STATUS,
  RecruitStatus,
} from '../../../constants/status';
import { RECRUIT_BANNER_BY_STATUS } from 'database/recruit';
import { useDday } from 'hooks/useDday';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';
import TimeBlock from '../TimeBlock';
import { useEffect, useState } from 'react';

function RecruitBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<RecruitStatus>(
    RecruitStatus.PRE,
  );

  useEffect(() => {
    setIsMounted(true);
    setCurrentStatus(RECRUITING_STATUS());

    const timer = setInterval(() => {
      const nextStatus = RECRUITING_STATUS();
      setCurrentStatus(nextStatus);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const targetDate = (() => {
    switch (currentStatus) {
      case RecruitStatus.PRE:
        return new Date(RECRUITING_START);
      case RecruitStatus.ACTIVE:
        return new Date(RECRUITING_DEADLINE);
      case RecruitStatus.EXTRA:
        return new Date(RECRUITING_EXTRA_DEADLINE);
      default:
        return new Date();
    }
  })();

  const { days, hrs, mins, secs } = useDday(targetDate);

  if (!isMounted) return null;

  const BannerInfo = RECRUIT_BANNER_BY_STATUS[currentStatus];
  const targetLink = LINK_BY_STATUS[currentStatus];
  /* 모집 기간이 아닐 때의 버튼은 모집 알림 신청이라 종 아이콘을 붙인다 */
  const isAlertButton =
    currentStatus === RecruitStatus.PRE || currentStatus === RecruitStatus.POST;

  return (
    <RecruitBannerContainer>
      <BannerImageBox>
        <InnerContainer>
          <TimerBox>
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
          </TimerBox>
          <ApplyButton
            onClick={() => {
              window.open(targetLink, '_blank');
            }}
          >
            {isAlertButton && <BellIcon />}
            {BannerInfo.buttonName}
          </ApplyButton>
        </InnerContainer>
      </BannerImageBox>
    </RecruitBannerContainer>
  );
}

function BellIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 2.5a5 5 0 0 0-5 5v2.6c0 .7-.2 1.4-.6 2L3.3 14a.8.8 0 0 0 .7 1.2h12a.8.8 0 0 0 .7-1.2l-1.1-1.9c-.4-.6-.6-1.3-.6-2V7.5a5 5 0 0 0-5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 17.2a2.2 2.2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* 시안: 1920 화면에서 위아래 120px, 좌우 160px 여백 안에 1600x960 카드 */
const RecruitBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 16px;
  background: ${({ theme }) => theme.palette.white};

  ${media.mobile} {
    padding: 116px 16px 115px;
  }
`;

const BannerImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1600px;
  height: 960px;
  border-radius: 32px;
  background: url('/assets/images/29th/recruit_bg.webp') no-repeat center/cover;

  /* 시안: 834 화면 802x960 */
  ${media.tablet} {
    background-image: url('/assets/images/29th/recruit_bg_tablet.webp');
  }

  /* 타이머가 작아지는 폭부터는 낮은 카드. 가로로 긴 동안은 PC 배경이 맞다 */
  ${media.mobile} {
    height: 489px;
    background-image: url('/assets/images/29th/recruit_bg.webp');
    background-position: 75% center;
  }

  /* 시안: 360 화면 328x489 */
  ${media.small} {
    background-image: url('/assets/images/29th/recruit_bg_mo.webp');
    background-position: center;
  }
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
  padding-top: 146px;
  animation: ${slideUp} 1s ease-in-out forwards;

  ${media.mobile} {
    padding-top: 70px;
  }
`;

/* 시안: 제목과 타이머 사이 6px */
const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const TimeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0;

  ${media.mobile} {
    gap: 14px;
  }
`;

const Colon = styled.span`
  color: ${({ theme }) => theme.palette.white_100};
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
  gap: 6px;
  padding: 12px 20px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.black_100};
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export default RecruitBanner;
