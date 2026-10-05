const Yapp = {
  YAPP_NAME: 'YAPP',
  YAPP_GENERATION: 29, // 기수
  YAPP_OFFICIAL_EMAIL: 'support@yapp.co.kr',
  YAPP_OFFICIAL_KAKAO: '@YAPP',
  YAPP_OFFICIAL_FACEBOOK: '@YAPP',
  YAPP_OFFICIAL_INSTAGRAM: 'about.yapp',
  YAPP_FACEBOOK: 'https://ko-kr.facebook.com/yapp.co.kr/',
  YAPP_INSTAGRAM: 'https://www.instagram.com/about.yapp/',
  YAPP_KAKAO: 'https://pf.kakao.com/_aGxofd',
  YAPP_GITHUB: 'https://github.com/YAPP-Github',
  YAPP_MEDIUM: 'https://medium.com/@about.yapp',
  YAPP_LINKEDIN: 'https://www.linkedin.com/company/yappu/',
  YAPP_THREADS: 'https://www.threads.com/@about.yapp',

  // 공고 링크
  YAPP_RECRUIT_ALL: 'https://yapp-recruit.career.greetinghr.com/ko/apply',
  YAPP_RECRUIT_EXTRA: 'https://yapp-recruit.career.greetinghr.com/ko/apply',
  YAPP_RECRUIT_PROJECT_MANAGER:
    'https://yapp-recruit.career.greetinghr.com/o/210447',
  YAPP_RECRUIT_DESIGNER: 'https://yapp-recruit.career.greetinghr.com/o/210451',
  YAPP_RECRUIT_IOS: 'https://yapp-recruit.career.greetinghr.com/o/210434',
  YAPP_RECRUIT_ANDROID: 'https://yapp-recruit.career.greetinghr.com/o/210373',
  YAPP_RECRUIT_FRONT_END: 'https://yapp-recruit.career.greetinghr.com/o/210439',
  YAPP_RECRUIT_BACK_END: 'https://yapp-recruit.career.greetinghr.com/o/210444',
  // TODO: 29기 Mobile, AI Native 공고 링크가 나오면 교체 (지금은 전체 공고로 연결)
  YAPP_RECRUIT_MOBILE: 'https://yapp-recruit.career.greetinghr.com/ko/apply',
  YAPP_RECRUIT_AI_NATIVE: 'https://yapp-recruit.career.greetinghr.com/ko/apply',
  YAPP_RECRUIT_CROSS_PLATFORM:
    'https://yapp-recruit.career.greetinghr.com/o/106740',

  // FAQ 링크
  YAPP_FAQ_NOTION: 'https://yapp-workspace.notion.site/yapp-28-faq',

  /*
   * 모집 알림 신청 폼 (구글 폼)
   * - PREVIOUS_GENERATION_RECRUIT_LINK: 이번 기수 모집 전(PRE)에 쓰는 "N기 모집 알림 신청" 폼
   * - NEXT_GENERATION_RECRUIT_LINK: 모집이 끝난 뒤(POST)에 쓰는 "N+1기 모집 알림 신청" 폼
   * 기수를 올릴 때는 NEXT 값을 PREVIOUS로 옮기고, NEXT에는 새 폼 주소를 넣는다.
   */
  // YAPP 29기 모집 사전 알림 등록
  PREVIOUS_GENERATION_RECRUIT_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSdR_3RMidWSG47YeM5kVMYGGdAIBYfNLHB8HpEkaBPvS4o-6A/viewform',
  // TODO: 30기 모집 알림 폼이 나오면 교체 (지금은 29기 폼을 가리킨다)
  NEXT_GENERATION_RECRUIT_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSdR_3RMidWSG47YeM5kVMYGGdAIBYfNLHB8HpEkaBPvS4o-6A/viewform',
};
export default Yapp;
