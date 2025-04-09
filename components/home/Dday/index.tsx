import { Box } from 'components/common';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function Dday(): ReactElement {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const targetDate = new Date('2025-04-10'); // 채용 시작 날짜
      const diffTime = targetDate.getTime() - today.getTime();

      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 9,
      );
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60),
      );
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

      setTimeLeft({
        days: diffDays,
        hours: diffHours,
        mins: diffMinutes,
        secs: diffSeconds,
      });

      if (diffTime <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DdayContainer>
      <StyledBox
        width={164.5}
        height={147}
        backgroundColor="white"
        borderRadius={18}
      >
        <TimeSpan>{timeLeft.days}</TimeSpan>
        <TimeText>DAYS</TimeText>
      </StyledBox>
      <Dot>:</Dot>

      <StyledBox
        width={164.5}
        height={147}
        backgroundColor="white"
        borderRadius={18}
      >
        <TimeSpan>{timeLeft.hours}</TimeSpan>
        <TimeText>HOURS</TimeText>
      </StyledBox>
      <Dot>:</Dot>

      <StyledBox
        width={164.5}
        height={147}
        backgroundColor="white"
        borderRadius={18}
      >
        <TimeSpan>{timeLeft.mins}</TimeSpan>
        <TimeText>MINS</TimeText>
      </StyledBox>
      <Dot>:</Dot>
      <StyledBox
        width={164.5}
        height={147}
        backgroundColor="white"
        borderRadius={18}
      >
        <TimeSpan>{timeLeft.secs}</TimeSpan>
        <TimeText>SECS</TimeText>
      </StyledBox>
    </DdayContainer>
  );
}

const DdayContainer = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  ${media.small} {
    gap: 4px;
  }
`;
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    width: 151.75px;
    height: 147px;
  }
  ${media.small} {
    width: 64.75px;
    height: 81px;
    border-radius: 8px;
  }
`;
const TimeSpan = styled.span`
  color: ${({ theme }) => theme.palette.blue_100};
  font-weight: 700;
  font-size: 6rem;
  line-height: 140%;

  ${media.small} {
    line-height: 160%;
    letter-spacing: -2%;
    font-size: 2.4rem;
  }
`;
const TimeText = styled.span`
  color: ${({ theme }) => theme.palette.grey_400};
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 100%;
  letter-spacing: -2%;

  ${media.small} {
    font-size: 1.5rem;
    line-height: 130%;
    letter-spacing: 0%;
  }
`;
const Dot = styled.div`
  width: 17px;
  color: ${({ theme }) => theme.palette.white};
  font-size: 6rem;
  font-weight: 600;
  line-height: 160%;
  display: flex;
  align-items: center;

  ${media.small} {
    width: 7px;
    font-size: 2.4rem;
  }
`;
export default Dday;
