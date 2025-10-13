import { useEffect, useState } from 'react';

interface DdayTime {
  days: string;
  hrs: string;
  mins: string;
  secs: string;
}

const calculateTimeLeft = (targetDate: Date): DdayTime => {
  const diffTime = targetDate.getTime() - new Date().getTime();

  if (diffTime <= 0) return { days: '00', hrs: '00', mins: '00', secs: '00' };

  const days = String(Math.floor(diffTime / (1000 * 60 * 60 * 24))).padStart(
    2,
    '0',
  );
  const hrs = String(Math.floor((diffTime / (1000 * 60 * 60)) % 24)).padStart(
    2,
    '0',
  );
  const mins = String(Math.floor((diffTime / (1000 * 60)) % 60)).padStart(
    2,
    '0',
  );
  const secs = String(Math.floor((diffTime / 1000) % 60)).padStart(2, '0');

  return { days, hrs, mins, secs };
};

/**
 * targetDate까지 남은 시간을 days, hrs, mins, secs로 반환
 * @param targetDate 목표 날짜
 */

export function useDday(targetDate: Date): DdayTime {
  const [timeLeft, setTimeLeft] = useState<DdayTime>(() =>
    calculateTimeLeft(targetDate),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
