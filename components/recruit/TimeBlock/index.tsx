import styled from 'styled-components';
import media from 'styles/media';

interface TimeBlockProps {
  type: 'DAYS' | 'HRS' | 'MINS' | 'SECS';
  time: string;
}

function TimeBlock({ type, time }: TimeBlockProps) {
  return (
    <TimeBlockContainer>
      <TimeText>{time}</TimeText>
      <TimeLabel>{type}</TimeLabel>
    </TimeBlockContainer>
  );
}

export default TimeBlock;

const TimeBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.textStyleV2.resp.timer_md};
  /* 테두리가 글자 안쪽에 겹쳐 보이지 않게 숫자는 고정 굵기 글꼴로 그린다(styles/fonts.ts) */
  font-family: 'Timer Digits', 'Pretendard Variable', Pretendard, sans-serif;
  /* 시안: 흰색 → 흰색 60% 그라데이션, 흰 테두리 1px, 하늘색 그림자 */
  color: transparent;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.white_100},
    rgba(255, 255, 255, 0.6)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px ${({ theme }) => theme.palette.white_100};
  filter: drop-shadow(0px 4px 24px rgba(40, 180, 255, 0.6));
  font-variant-numeric: tabular-nums;

  text-align: center;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.timer_sm};
  }
`;

const TimeLabel = styled.span`
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;
