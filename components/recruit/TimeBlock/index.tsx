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
  color: ${({ theme }) => theme.palette.white_100};
  font-variant-numeric: tabular-nums;

  text-align: center;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.timer_sm};
  }
`;

const TimeLabel = styled.span`
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  color: ${({ theme }) => theme.palette.white_50};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;
