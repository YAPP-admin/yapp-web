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

  const BannerInfo = RECRUIT_BANNER_BY_STATUS[currentStatus];
  const targetLink = LINK_BY_STATUS[currentStatus];
  /* 모집 기간이 아닐 때의 버튼은 모집 알림 신청이라 종 아이콘을 붙인다 */
  const isAlertButton =
    currentStatus === RecruitStatus.PRE || currentStatus === RecruitStatus.POST;

  return (
    <RecruitBannerContainer>
      {/*
       * 카드 자리는 처음부터 잡아 둔다. 자리가 없으면 아래 섹션이 화면 맨 위에서 그려졌다가 밀려 내려가고,
       * 그 사이에 등장 애니메이션이 화면 밖에서 끝나 버린다.
       * 남은 시간과 문구는 방문자의 시계로 정하므로 브라우저에서만 그린다.
       */}
      <BannerImageBox>
        {isMounted && (
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
              $hasIcon={isAlertButton}
              onClick={() => {
                window.open(targetLink, '_blank');
              }}
            >
              {isAlertButton && <BellIcon />}
              {BannerInfo.buttonName}
            </ApplyButton>
          </InnerContainer>
        )}
      </BannerImageBox>
      <ScrollHint width="52" height="19" viewBox="0 0 52 19" aria-hidden="true">
        <path
          d="M2 2L26 17L50 2"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </ScrollHint>
    </RecruitBannerContainer>
  );
}

/* 시안: 20x20, 속을 채운 종 */
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
        d="M9.99979 2C8.40849 2 6.88236 2.63214 5.75715 3.75736C4.63193 4.88258 3.99979 6.4087 3.99979 8V11.586L3.29279 12.293C3.15298 12.4329 3.05777 12.611 3.0192 12.805C2.98064 12.9989 3.00044 13.2 3.07611 13.3827C3.15178 13.5654 3.27992 13.7215 3.44433 13.8314C3.60874 13.9413 3.80204 14 3.99979 14H15.9998C16.1975 14 16.3908 13.9413 16.5552 13.8314C16.7197 13.7215 16.8478 13.5654 16.9235 13.3827C16.9991 13.2 17.0189 12.9989 16.9804 12.805C16.9418 12.611 16.8466 12.4329 16.7068 12.293L15.9998 11.586V8C15.9998 6.4087 15.3676 4.88258 14.2424 3.75736C13.1172 2.63214 11.5911 2 9.99979 2ZM9.99979 18C9.20414 18 8.44108 17.6839 7.87847 17.1213C7.31586 16.5587 6.99979 15.7956 6.99979 15H12.9998C12.9998 15.7956 12.6837 16.5587 12.1211 17.1213C11.5585 17.6839 10.7954 18 9.99979 18Z"
        fill="currentColor"
      />
      <ellipse cx="10" cy="2.22021" rx="1.5" ry="2" fill="currentColor" />
    </svg>
  );
}

const RecruitBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 16px 48px;
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
  /* 시안: 1600x960. 카드가 좁아지면 같은 비율로 낮춰 배경 양옆이 잘리지 않게 한다 */
  --card-height: min(960px, calc((100vw - 32px) * 0.6));
  height: var(--card-height);
  border-radius: 32px;
  background: url('/assets/images/29th/recruit_bg.webp') no-repeat center/cover;

  /* 시안: 834 화면 802x960 */
  ${media.tablet} {
    --card-height: 960px;
    background-image: url('/assets/images/29th/recruit_bg_tablet.webp');
  }

  /* 타이머가 작아지는 폭부터는 낮은 카드. 가로로 긴 동안은 PC 배경이 맞다 */
  ${media.mobile} {
    --card-height: 489px;
    background-image: url('/assets/images/29th/recruit_bg.webp');
    background-position: 75% center;
  }

  /* 시안: 360 화면 328x489 */
  ${media.small} {
    background-image: url('/assets/images/29th/recruit_bg_mo.webp');
    background-position: center;
  }
`;

/* 시안: 카드 아래 26px에 놓이는 아래쪽 화살표 (좁은 화면 시안에는 없다) */
const ScrollHint = styled.svg`
  flex-shrink: 0;
  margin: 39px 0 14px;
  color: ${({ theme }) => theme.palette.grey_400};

  ${media.mobile} {
    display: none;
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
  /* 시안: 높이 960px 카드에서 위 146px */
  padding-top: calc(var(--card-height) * 0.152);
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

  /* 360px보다 좁으면 타이머 양끝이 카드 밖으로 나간다 */
  ${media.custom(359)} {
    gap: 8px;
  }
`;

const Colon = styled.span`
  /* 시안: 불투명도 80% */
  opacity: 0.8;
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

const ApplyButton = styled.button<{ $hasIcon: boolean }>`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  /* 시안: 아이콘이 있으면 왼쪽 18px */
  padding: ${({ $hasIcon }) =>
    $hasIcon ? '12px 20px 12px 18px' : '12px 20px'};
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
