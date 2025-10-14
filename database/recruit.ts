import Yapp from 'constants/yapp';

/* 현재 모집중이면 true 아니면 false */
export const IS_RECRUITING = true;

/** Banner  */
export const RECRUIT_BANNER = {
  title: '지금은 모집기간이 아닙니다',
  buttonName: `${Number(Yapp.YAPP_GENERATION) + 1}기 모집 알림 신청하기`,
};
export const RECRUIT_BANNER_PRE = {
  title: `${Number(Yapp.YAPP_GENERATION)}기 모집 마감까지`,
  buttonName: `${Number(Yapp.YAPP_GENERATION)}기 지원하기`,
};

export const RECRUIT_BANNER_ACTIVE = {
  title: `${Number(Yapp.YAPP_GENERATION)}기 모집 마감까지`,
  description: `YAPP ${Yapp.YAPP_GENERATION}기에서 4개월간 활동할<br class="mobile" /> PM(기획자)/디자이너/개발자 신입 회원을<br class="mobile" /> 모집합니다.<br class="desktop" /> 
    IT 분야에 대한 열정과 의지가<br class="mobile" /> 넘치고, 동아리에서 다양한 사람들과 즐겁게<br class="mobile" /> 활동하고 싶은 분들의 많은 지원 바랍니다!`,
  buttonName: `${Yapp.YAPP_GENERATION}기 지원하기`,
};

export const NEXT_GENERATION_RECRUIT_LINK =
  'https://forms.gle/9nABygW4JPaX5rfv6';

/** 세션일정 개요 */
export const SESSION_OVERVIEW = {
  title: '세션 일정',
  subtitle: '세션 일정은 내부 사정에 따라 조정될 수 있습니다.',
  overviewContents: [
    {
      date: '1-4주차',
      programs: ['OT', '팀매칭', '팀세션', '팀세션'],
      backgroundColor: 'circus_red',
    },
    {
      date: '5-8주차',
      programs: ['휴-얍', '기획세션', '팀세션', `1차 데브캠프\n(UT)`],
      backgroundColor: 'circus_blue',
    },
    {
      date: '9-12주차',
      programs: [
        '팀세션',
        `개발/디자인\n세션`,
        '팀세션',
        `2차 데브캠프\n(해커톤)`,
      ],
      backgroundColor: 'black_100',
    },
    {
      date: '13-17주차',
      programs: [`3차 데브캠프\n(UT)`, '팀세션', '데모데이', '최종 발표회'],
      backgroundColor: 'circus_red',
    },
  ],
};

/* 이런 사람을 찾아요 부분 */
export const FIND_YAPPU = [
  {
    textParts: [
      '새로운 가능성을',
      { img: '/assets/icons/yappu_red.svg' },
      '탐색하고,\n',
      '주도적인 협업을 통해 ',
      '의미있는 프로젝트를 만들어가는 사람을 찾아요',
    ],
  },
  {
    textParts: [
      '매주 토요일 정규 세션에\n',
      '참여 가능한 분을',
      { img: '/assets/icons/yappu_blue.svg' },
      '찾아요',
    ],
  },
  {
    textParts: [
      '타 직군과의 1회 이상\n',
      '협업 경험이 있는 분',
      { img: '/assets/icons/yappu_white.svg' },
      '을 찾아요',
    ],
  },
];

/* 모집 일정 */
export const RECRUIT_SCHEDULE = {
  title: '모집 일정',
  subTitle:
    '모집부터 최종 합류까지의 모든 과정은 아래 일정을 기준으로 진행됩니다.',
  schedules: [
    {
      title: '서류 접수',
      content: '10.16',
      icon: '/assets/icons/running_year.svg',
      color: 'circus_red',
      fontColor: 'white_100',
    },
    {
      title: '서류 마감',
      content: '10.25',
      icon: '/assets/icons/cohort.svg',
      color: 'circus_gray',
      fontColor: 'black_100',
    },
    {
      title: '서류 결과 발표',
      content: '10.29',
      icon: '/assets/icons/members.svg',
      color: 'circus_blue',
      fontColor: 'white_100',
    },
    {
      title: '면접',
      content: '11.01-05',
      icon: '/assets/icons/total_members.svg',
      color: 'circus_red',
      fontColor: 'white_100',
    },
    {
      title: '최종 발표',
      content: '11.07',
      icon: '/assets/icons/service.svg',
      color: 'circus_gray',
      fontColor: 'black_100',
    },
  ],
};

/* 자주 묻는 질문 */
export const RECRUIT_FAQ = {
  title: '자주 묻는 질문',
  subTitle: '지원 전 궁금한 내용을 먼저 확인해보세요.',
  faqs: [
    {
      subTitle: 'YAPP은 어떤 동아리인가요?',
      description: `YAPP은 PM(기획자), 디자이너, 개발자로 팀을 구성하여 4개월간 하나의 IT 서비스(웹,앱,etc.)를 제작하는 기업형 IT연합 커뮤니티입니다.<br class="br" /> 
      서비스 문제 정의, 출시, 제작, 운영까지 팀원들의 아이디어를 실제 IT 서비스로 구체화하며 성장할 수 있습니다.`,
      isOpen: false,
    },
    {
      subTitle:
        '대학생이 아닌 고졸/재직자/졸업자 등도 YAPP에서 활동할 수 있을까요?',
      description: `4개월간 꾸준히 활동할 수 있고 배우고자 하는 열의가 충분하다면, 누구든 지원이 가능합니다.<br class="br" />
                    현재도 고졸/재직자/졸업자 중 활발히 활동하시는 분들이 계십니다.<br class="br" />
                    하지만 매주 진행하는 정기 세션과 기수당 2-3회 열리는 해커톤 Dev Camp에 필수적으로 참여해야 하며,<br class="br" />
                    특히 방학 중에는 원활한 프로젝트 진행을 위해 추가적인 팀 활동에 모여야 한다는 점을 숙지해주세요!`,
      isOpen: false,
    },
    {
      subTitle: '실력이 뛰어난 사람만 지원할 수 있나요?',
      description: `YAPP에서는 4개월간 꾸준히 활동할 수 있는지, 그리고 발전하고자 하는 의지가 충분한지를 가장 중요하게 생각합니다.<br class="br" />
                    그러나 교육보다는 프로젝트 진행이 중심이기 때문에 자율 스터디나 특강 이외의 교육 커리큘럼을 따로 진행하고 있지 않습니다.<br class="br" />
                    따라서 동아리 활동 이외에 개인적으로도 시간과 노력을 투자해야 한다는 점을 알아주시길 바랍니다.`,
      isOpen: false,
    },
    {
      subTitle: '정기 모임(세션)은 언제, 어디서 하나요?',
      description: `매주 토요일 오후 2시-5시, 세션은 서로 간의 지식 공유&친목 도모를 위해 진행되며 가벼운 뒤풀이도 있을 수 있습니다.<br class="br" />
                    오프라인 대면으로 진행되고 있으며 각 기수별 상황에 따라 달라질 수 있습니다.<br class="br" />
                    오프라인으로 대부분 수도권에서 세션이 진행되며, 장소 섭외 상황에 따라 변경될 수 있습니다.<br class="br" />
                    일정, 장소 등 자세한 정보는 내부 채널을 통해 사전 공지해드릴 예정입니다.`,
      isOpen: false,
    },
    {
      subTitle: '동아리 활동은 어떤 게 있나요?',
      description: `1. 아이디어를 서비스로 구체화시킬 수 있는 해커톤 Dev. Camp 2-3회<br />
                    2. 정기 전체 세션: 프로젝트 팀 회의, 직군 간 커뮤니케이션, 진행 현황 발표 등을 진행합니다.<br />
                    3. 직군 세션: 직군별 스터디, 직군 특성을 반영한 발표, 초청 취업 강연, 현직자 선배의 조언을 들을 수 있는 Networking Day 등<br />
                    4. 성과공유회: 실제 현업에서 활동 중인 선배들에게 프로젝트를 발표하고, 피드백을 받을 수 있는 시간<br />
                    5. 그 외 다양한 네트워킹 활동`,
      isOpen: false,
    },
    {
      subTitle: '동아리 회비가 있나요?',
      description: `10만원대 초반을 예상 중이며, 채용 상황과 내부 사정에 따라 변경될 수 있습니다.`,
      isOpen: false,
    },
    {
      subTitle: '더 궁금한 사항이 있어요!',
      description: `궁금하신 내용은 27기 채용 FAQ를 참고해주시고, 기타 사항은 카카오톡 채널을 통해 문의주세요!`,
      isOpen: false,
    },
  ],
};

/* 모집 분야 */

export const RECRUIT_TITLE = '6개의 직군을 모집하고 있어요';

export const RECRUIT_FIELD_NAMES = [
  {
    name: 'PM',
    description: `서비스의 기획에 대한 아이디어를 수집, 제시하며 서비스 런칭을 목표로 프로젝트를 주도적으로 관리하고 진행합니다.`,
    url: Yapp.YAPP_RECRUIT_PROJECT_MANAGER,
    backInfo: [
      '아이디어를 제시하고 협업을 이끌며 프로젝트를 관리할 수 있는 사람을 찾습니다.',
      '디자이너·개발자와의 협업 경험, UX 설계나 발표 경험이 있다면 더욱 좋습니다.',
    ],
    backgroundColor: 'circus_red',
  },
  {
    name: '디자인',
    description: `기획을 바탕으로 개별 팀의 아이디어에 따라 UX/UI/GUI 디자인을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_DESIGNER,
    backInfo: [
      `UI/UX 설계 역량과 기획·개발 직군과의 협업 능력, 피드백을 반영하는 태도를 가진 분을 찾습니다. `,
      `프로젝트 경험이나 기획·리서치·데이터 기반 문제 해결 경험이 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'white',
  },
  {
    name: 'Web',
    description: `팀 내에서 웹 프론트엔드 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_FRONT_END,
    backInfo: [
      `HTML, CSS, JavaScript, React에 대한 이해를 바탕으로 프로젝트를 끝까지 책임감 있게 완수할 수 있는 분을 찾습니다.
협업 경험이나 GitHub 활용, 새로운 기술에 도전한 경험이 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'circus_blue',
  },
  {
    name: 'Android',
    description: `팀 내에서 Android 네이티브 앱 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_ANDROID,
    backInfo: [
      `Kotlin 기반 프로젝트 경험과 책임감, 기술 논의에 적극적인 자세를 갖춘 분을 찾습니다. 타 직군 협업 경험이나 Git 활용, MVP, MVVM 등 디자인 패턴 이해도가 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'circus_red',
  },
  {
    name: 'iOS',
    description: `팀 내에서 iOS 네이티브 앱 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_IOS,
    backInfo: [
      `Swift 기반 프로젝트 경험이 있고, 책임감과 개발 열정으로 문제 해결과 협업에 적극적인 분을 찾습니다.`,
      `타 직군 협업 경험이나 Git 활용, MVC, MVVM 등 디자인 패턴 이해도가 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'white',
  },
  {
    name: 'Server',
    description: `팀 내에서 Server 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_BACK_END,
    backInfo: [
      `Kotlin/Java와 Spring, 데이터베이스 및 RESTful에 대한 이해를 바탕으로 책임감 있게 프로젝트를 완수할 수 있는 분을 찾습니다.`,
      `PM과의 소통 경험 또는 Git 활용 경험이 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'circus_blue',
  },
];

/* 문의 사항 */
export const RECRUIT_ENQUIRY = {
  title: `더 궁금하신 내용이 있거나\n문의 사항이 있으신가요?`,
  description: `리쿠르팅 관련 문의는\n카카오톡 채널을 이용해 주세요.`,
  caution: `(페이스북 메시지 및 인스타그램 DM은 받지 않습니다)`,
  buttonName: '문의 하기',
};
