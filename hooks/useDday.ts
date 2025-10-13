import { useEffect, useState } from 'react';

interface DdayTime {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
}

/**
 * targetDate까지 남은 시간을 days, hrs, mins, secs로 반환
 * @param targetDate 목표 날짜
 */
export function useDday(targetDate: Date): DdayTime {
  const [timeLeft, setTimeLeft] = useState<DdayTime>({
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffTime = targetDate.getTime() - now.getTime();

      if (diffTime <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hrs: 0, mins: 0, secs: 0 });
        return;
      }

      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diffTime / (1000 * 60)) % 60);
      let secs = Math.floor((diffTime / 1000) % 60);
      secs = Number(String(secs).padStart(2, '0'));
      setTimeLeft({ days, hrs, mins, secs });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
