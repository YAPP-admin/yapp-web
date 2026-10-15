import Yapp from './yapp';

/* 리크루팅 상태: PRE(모집 오픈 전), ACTIVE(모집 중), POST(모집 마감), EXTRA(추가 모집) */
export enum RecruitStatus {
  PRE = 'PRE',
  ACTIVE = 'ACTIVE',
  POST = 'POST',
  EXTRA = 'EXTRA',
}

/* 한국 시간 기준. 시간대(+09:00)를 빼면 방문자 기기의 시간대로 해석돼 전환 시각이 어긋난다 */
/* 모집 시작: 10월 16일 오후 3시 */
export const RECRUITING_START = '2026-10-16T15:00:00+09:00';
export const RECRUITING_DEADLINE = '2026-10-25T23:59:59+09:00';
// 추가 모집이 없으면 마감일과 같은 값으로 둔다 (EXTRA 상태를 건너뜀)
export const RECRUITING_EXTRA_DEADLINE = RECRUITING_DEADLINE;

/* 화면에 표시하는 모집 기간 문구 */
export const RECRUITING_PERIOD_TEXT = '10.16(금) - 10.25(일)';

/*
 * 오픈 테스트: 운영 도메인이 아닌 곳(미리보기, 로컬)에서 주소 뒤에 ?openTest=10 을 붙이면
 * 페이지에 들어온 시각에서 10초 뒤를 모집 시작으로 본다. 모집 전 → 모집 중 전환을 미리 볼 때 쓴다.
 * 시작 시각은 페이지를 처음 불러올 때 한 번 정하고, 링크로 다른 페이지로 옮겨도 이어진다.
 * 새로고침하면 다시 센다.
 */
const PRODUCTION_HOSTS = ['www.yapp.co.kr', 'yapp.co.kr'];
let openTestStart: string | null | undefined;

const getOpenTestStart = (): string | null => {
  if (typeof window === 'undefined') return null;
  if (openTestStart !== undefined) return openTestStart;

  openTestStart = null;
  if (PRODUCTION_HOSTS.includes(window.location.hostname)) return null;

  const param = new URLSearchParams(window.location.search).get('openTest');
  const seconds = Number(param);
  if (param !== null && param !== '' && Number.isFinite(seconds)) {
    openTestStart = new Date(Date.now() + seconds * 1000).toISOString();
  }
  return openTestStart;
};

/* 모집 시작 시각. 오픈 테스트 중이면 테스트 시각을 돌려준다 */
export const getRecruitingStart = (): string =>
  getOpenTestStart() ?? RECRUITING_START;

export const RECRUITING_STATUS = (): RecruitStatus => {
  const now = new Date();
  const start = new Date(getRecruitingStart());
  const deadline = new Date(RECRUITING_DEADLINE);
  const extraDeadline = new Date(RECRUITING_EXTRA_DEADLINE);

  if (now < start) return RecruitStatus.PRE;
  if (now > deadline && now <= extraDeadline) return RecruitStatus.EXTRA;
  if (now > deadline) return RecruitStatus.POST;
  return RecruitStatus.ACTIVE;
};

export const LINK_BY_STATUS: Record<RecruitStatus, string> = {
  [RecruitStatus.PRE]: Yapp.PREVIOUS_GENERATION_RECRUIT_LINK,
  [RecruitStatus.ACTIVE]: Yapp.YAPP_RECRUIT_ALL,
  [RecruitStatus.POST]: Yapp.NEXT_GENERATION_RECRUIT_LINK,
  [RecruitStatus.EXTRA]: Yapp.YAPP_RECRUIT_ALL,
};
