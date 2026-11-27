/*
 * 해커톤 랜딩(/hackathon) 링크와 섹션 앵커.
 * 링크는 아직 확정 전이다. 확정되면 여기만 바꾼다.
 */

/** 행사 장소(아키스케치 성수) 네이버 지도 */
export const HACKATHON_VENUE_LINK = 'https://naver.me/GsjpGnlb';

/** 참가 신청 구글폼 */
export const HACKATHON_APPLY_LINK = 'https://forms.gle/4nZzxhpWoCk18PZ8A';

/** FAQ의 특정 질문을 펼치고 FAQ로 이동시키는 이벤트. detail: { topic } */
export const HACKATHON_FAQ_OPEN_EVENT = 'hackathon:faq-open';
export type HackathonFaqTopic = 'deposit';

/** 전용 헤더 메뉴가 스크롤해 가는 섹션의 id */
export const HACKATHON_SECTION_ID = {
  intro: 'intro', // 01_행사소개 — 헤더 "행사 안내"
  recruit: 'recruit', // 05_모집안내 — 헤더 "모집 안내"
  award: 'award', // 06_시상안내 — 헤더 "시상 안내"
  faq: 'faq', // 09_FAQ — 헤더 "FAQ"
} as const;
