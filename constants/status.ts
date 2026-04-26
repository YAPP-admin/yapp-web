import Yapp from './yapp';

/* 리크루팅 상태: PRE(모집 오픈 전), ACTIVE(모집 중), POST(모집 마감), EXTRA(추가 모집) */
export enum RecruitStatus {
  PRE = 'PRE',
  ACTIVE = 'ACTIVE',
  POST = 'POST',
  EXTRA = 'EXTRA',
}

export const RECRUITING_START = '2026-04-17T00:00:00';
export const RECRUITING_DEADLINE = '2026-04-26T23:59:59';
export const RECRUITING_EXTRA_DEADLINE = '2026-04-28T23:59:59';

export const RECRUITING_STATUS = (): RecruitStatus => {
  const now = new Date();
  const start = new Date(RECRUITING_START);
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
