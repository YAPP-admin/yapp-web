import Yapp from 'constants/yapp';
import { RecruitStatus } from '../constants/status';

/** Banner  */
interface RecruitBannerInfo {
  title: string;
  description?: string;
  buttonName: string;
}

const RECRUIT_BANNER_PRE: RecruitBannerInfo = {
  title: `${Number(Yapp.YAPP_GENERATION)}기 모집 오픈까지`,
  buttonName: `${Number(Yapp.YAPP_GENERATION)}기 모집 알림 신청하기`,
};

const RECRUIT_BANNER_ACTIVE: RecruitBannerInfo = {
  title: `${Number(Yapp.YAPP_GENERATION)}기 모집 마감까지`,
  description: `YAPP ${Yapp.YAPP_GENERATION}기에서 4개월간 활동할<br class="mobile" /> PM(기획자)/디자이너/개발자 신입 회원을<br class="mobile" /> 모집합니다.<br class="desktop" /> 
    IT 분야에 대한 열정과 의지가<br class="mobile" /> 넘치고, 동아리에서 다양한 사람들과 즐겁게<br class="mobile" /> 활동하고 싶은 분들의 많은 지원 바랍니다!`,
  buttonName: `${Yapp.YAPP_GENERATION}기 지원하기`,
};

const RECRUIT_BANNER_EXTRA: RecruitBannerInfo = {
  title: '28기 iOS 추가 모집',
  buttonName: `${Yapp.YAPP_GENERATION}기 iOS 지원하기`,
};

const RECRUIT_BANNER_POST: RecruitBannerInfo = {
  title: '지금은 모집기간이 아닙니다',
  buttonName: `${Number(Yapp.YAPP_GENERATION) + 1}기 모집 알림 신청하기`,
};

export const RECRUIT_BANNER_BY_STATUS: Record<
  RecruitStatus,
  RecruitBannerInfo
> = {
  [RecruitStatus.PRE]: RECRUIT_BANNER_PRE,
  [RecruitStatus.ACTIVE]: RECRUIT_BANNER_ACTIVE,
  [RecruitStatus.POST]: RECRUIT_BANNER_POST,
  [RecruitStatus.EXTRA]: RECRUIT_BANNER_EXTRA,
};

/** 세션 커리큘럼 */
interface CurriculumSession {
  name: string;
  date: string;
  description: string;
  /** 이름 옆에 붙는 협력사 로고 */
  logo?: { src: string; alt: string };
}

export const SESSION_CURRICULUM: {
  title: string;
  subtitle: string;
  sessions: CurriculumSession[];
} = {
  title: '세션 커리큘럼',
  subtitle: '세션 커리큘럼은 내부 사정에 따라 조정될 수 있습니다.',
  sessions: [
    {
      name: 'OT',
      date: '11.14',
      description: `직군 협업 팀과 AI Native 팀,\n두 트랙을 소개하고 29기 멤버들과 첫인사를 나눠요.`,
    },
    {
      name: '얍크샵',
      date: '11.21',
      description: `다른 직군의 새로운 YAPP 멤버들과 1박 2일을 함께 보내며\n서로가 바라보는 방향을 맞춰 가요.`,
    },
    {
      name: '팀매칭',
      date: '11.28',
      description: `4개월 동안 함께 프로덕트를 만들어 갈 팀원을 모아요.`,
    },
    {
      name: '기획리뷰',
      date: '12.12',
      description: `팀별 서비스 기획을 함께 리뷰하고, 각 팀이 나아갈 방향성을 공유해요.`,
    },
    {
      name: '얍커톤 X',
      logo: { src: '/assets/images/29th/goorm.png', alt: 'goorm' },
      date: '12.19',
      description: `아이디어를 실제로 동작하는 서비스로 만드는,\n하루 만에 끝내는 바이브톤으로 구름과 함께해요.`,
    },
    {
      name: '유저 플로우 리뷰',
      date: '01.02',
      description: `팀별 Figma 프로토타입으로 유저 플로우를 보여 주고\n팀끼리 서로의 흐름을 리뷰해요.`,
    },
    {
      name: 'AI 인사이트 공유',
      date: '01.16',
      description: `팀마다 AI를 활용한 경험을 나누고,\nAI를 더 잘 쓰는 방법을 기수 전체가 함께 찾아요.`,
    },
    {
      name: 'UT',
      date: '01.30',
      description: `서로의 서비스를 직접 써 보며 사용자가 막히는 지점을 찾아요.`,
    },
    {
      name: '데모데이',
      date: '02.20',
      description: `4개월 동안 만든 서비스를 선보이고,\n서로의 결과물을 직접 체험하며 함께 축하해요.`,
    },
    {
      name: '홈커밍 · 회고데이',
      date: '02.27',
      description: `먼저 YAPP을 거쳐 간 OB 선배들과 다시 만나, 지금의 고민을 편하게 나눠요.\n끝이 아닌 다음을 위한 자리로, 4개월을 함께 돌아보며 29기를 마무리해요.`,
    },
  ],
};

/* 이런 사람을 찾아요 부분 */
export const FIND_YAPPU = [
  {
    textParts: [
      '새로운 가능성을',
      {
        img: '/assets/icons/yappu_orange.svg',
        width: 62,
        height: 49,
        mobileWidth: 28,
        mobileHeight: 22,
      },
      '탐색하고,\n',
      '주도적인 협업을 통해\n',
      '의미있는 프로젝트를 만들어가는 사람을 찾아요',
    ],
  },
  {
    textParts: [
      '매주 토요일 정규 세션에\n',
      '참여 가능한 분을',
      {
        img: '/assets/icons/yappu_sky.svg',
        width: 76,
        height: 54,
        mobileWidth: 38,
        mobileHeight: 27,
      },
      '찾아요',
    ],
  },
  {
    textParts: [
      '타 직군과의 1회 이상\n',
      '협업 경험이 있는 분',
      {
        img: '/assets/icons/yappu_yellow.svg',
        width: 68,
        height: 54,
        mobileWidth: 34,
        mobileHeight: 27,
      },
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
      icon: '/assets/images/29th/icons/piano.png',
      color: 'chemistry_29th_orange',
      fontColor: 'white_100',
    },
    {
      title: '서류 마감',
      content: '10.25',
      icon: '/assets/images/29th/icons/guitar.png',
      color: 'chemistry_29th_grey',
      fontColor: 'chemistry_29th_text',
    },
    {
      title: '서류 결과 발표',
      content: '10.28',
      icon: '/assets/images/29th/icons/drum.png',
      color: 'chemistry_29th_blue',
      fontColor: 'white_100',
    },
    {
      title: '면접',
      content: '10.31-11.3',
      icon: '/assets/images/29th/icons/album.png',
      color: 'chemistry_29th_orange',
      fontColor: 'white_100',
    },
    {
      title: '최종 발표',
      content: '11.5',
      icon: '/assets/images/29th/icons/audio.png',
      color: 'chemistry_29th_grey',
      fontColor: 'chemistry_29th_text',
    },
  ],
};

/* 자주 묻는 질문 */
export const RECRUIT_FAQ = {
  title: '자주 묻는 질문',
  subTitle: '지원 전 궁금한 내용을 먼저 확인해보세요.',
  categories: [
    '지원 관련',
    '활동 관련',
    'PM',
    'Designer',
    'Developer',
    'AI Native',
  ],
  faqs: [
    {
      subTitle: 'YAPP은 어떤 동아리인가요?',
      description: `YAPP은 PM(기획자), 디자이너, 개발자로 팀을 구성하여 4개월간 하나의 IT 웹/앱 서비스를 제작하는 기업형 IT연합 커뮤니티입니다.<br class="br" /> 
      서비스 문제 정의, 출시, 제작, 운영까지 팀원들의 아이디어를 실제 IT 서비스로 구체화하며 성장할 수 있습니다.`,
      category: '지원 관련',
    },
    {
      subTitle:
        '대학생이 아닌 고졸/재직자/졸업자 등도 YAPP에서 활동할 수 있을까요?',
      description: `4개월간 꾸준히 활동할 수 있고 배우고자 하는 열의가 충분하다면, 누구든 지원이 가능합니다.<br class="br" />
                    고졸/재직자/졸업자 중 활발히 활동하시는 분들이 계십니다.<br class="br" />
                    하지만 매주 진행하는 정기 세션에 필수적으로 참여해야 하며,<br class="br" />
                    특히 방학 중에는 원활한 프로젝트 진행을 위해 추가적인 팀 활동에 모여야 한다는 점을 숙지해주세요!`,
      category: '지원 관련',
    },
    {
      subTitle: '실력이 뛰어난 사람만 지원할 수 있나요?',
      description: `YAPP에서는 4개월간 꾸준히 활동할 수 있는지, 그리고 발전하고자 하는 의지가 충분한지를 가장 중요하게 생각합니다.<br class="br" />
                    교육보다는 프로젝트 진행이 중심이기 때문에 자율 스터디나 특강 이외의 교육 커리큘럼을 따로 진행하고 있지 않습니다.<br class="br" />
                    따라서 동아리 활동 이외에 개인적으로도 시간과 노력을 투자해야 한다는 점을 알아주시길 바랍니다.`,
      category: '지원 관련',
    },
    {
      subTitle: '정기 모임(세션)은 언제, 어디서 하나요?',
      description: `매주 토요일 오후 1시-5시, 세션은 서로 간의 지식 공유&친목 도모를 위해 진행되며 가벼운 뒤풀이도 있을 수 있습니다.<br class="br" />
                    오프라인 대면으로 진행되고 있으며 각 기수별 상황에 따라 달라질 수 있습니다.<br class="br" />
                    오프라인으로 수도권에서 세션이 진행되며, 장소 섭외 상황에 따라 변경될 수 있습니다.<br class="br" />
                    일정, 장소 등 자세한 정보는 내부 채널을 통해 사전 공지해드릴 예정입니다.`,
      category: '지원 관련',
    },
    {
      subTitle: '동아리 활동은 어떤 게 있나요?',
      description: `1. 아이디어를 서비스로 구체화시킬 수 있는 해커톤 Dev. Camp 2-3회<br />
                    2. 정기 전체 세션: 프로젝트 팀 회의, 직군 간 커뮤니케이션, 진행 현황 발표 등을 진행합니다.<br />
                    3. 직군 세션: 직군별 스터디, 직군 특성을 반영한 발표, 초청 취업 강연, 현직자 선배의 조언을 들을 수 있는 Networking Day 등<br />
                    4. 성과공유회: 실제 현업에서 활동 중인 선배들에게 프로젝트를 발표하고, 피드백을 받을 수 있는 시간<br />
                    5. 그 외 다양한 네트워킹 활동`,
      category: '지원 관련',
    },
    {
      subTitle: '동아리 회비가 있나요?',
      description: `10만원대 초반을 예상 중이며, 채용 상황과 내부 사정에 따라 변경될 수 있습니다.`,
      category: '지원 관련',
    },
    {
      subTitle: '더 궁금한 사항이 있어요!',
      description: `궁금하신 내용은 카카오톡 채널을 통해 문의주세요!`,
      category: '지원 관련',
    },
  ],
};

/* 모집 분야 */

export const RECRUIT_TITLE = '6개의 직군을 모집하고 있어요';

export const RECRUIT_FIELD_NAMES = [
  {
    name: 'PM',
    slug: 'pm',
    description: `서비스의 기획에 대한 아이디어를 수집, 제시하며 서비스 런칭을 목표로 프로젝트를 주도적으로 관리하고 진행합니다.`,
    url: Yapp.YAPP_RECRUIT_PROJECT_MANAGER,
    backInfo: [
      '아이디어를 제시하고 협업을 이끌며 프로젝트를 관리할 수 있는 사람을 찾습니다.',
      '디자이너·개발자와의 협업 경험, UX 설계나 발표 경험이 있다면 더욱 좋습니다.',
    ],
    backgroundColor: 'chemistry_29th_orange',
    fontColor: 'white_100',
  },
  {
    name: 'Design',
    slug: 'design',
    description: `기획을 바탕으로 개별 팀의 아이디어에 따라 Figma를 활용해 UX/UI/GUI 디자인을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_DESIGNER,
    backInfo: [
      `UI/UX 설계 역량과 기획·개발 직군과의 협업 능력, 피드백을 반영하는 태도를 가진 분을 찾습니다.`,
      `프로젝트 경험이나 기획·리서치·데이터 기반 문제 해결 경험이 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'chemistry_29th_grey',
    fontColor: 'chemistry_29th_text',
  },
  {
    name: 'Web',
    slug: 'web',
    description: `팀 내에서 웹 프론트엔드 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_FRONT_END,
    backInfo: [
      `HTML, CSS, JavaScript, React에 대한 이해를 바탕으로 프로젝트를 끝까지 책임감 있게 완수할 수 있는 분을 찾습니다.`,
      `협업 경험이나 GitHub 활용, 새로운 기술에 도전한 경험이 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'chemistry_29th_blue',
    fontColor: 'white_100',
  },
  {
    name: 'Mobile',
    slug: 'mobile',
    description: `팀 내에서 Mobile 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_MOBILE,
    backInfo: [
      `Kotlin·Swift를 활용한 네이티브 앱 또는 KMP(Kotlin Multiplatform)·Flutter·React Native를 활용한 크로스플랫폼 앱 개발이 가능한 분을 찾습니다.`,
      `타 직군 협업 경험이나 Git 활용, MVC, MVVM 등 디자인 패턴 이해도가 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'chemistry_29th_orange',
    fontColor: 'white_100',
  },
  {
    name: 'Server',
    slug: 'server',
    description: `팀 내에서 Server 개발을 담당합니다.`,
    url: Yapp.YAPP_RECRUIT_BACK_END,
    backInfo: [
      `Kotlin/Java와 Spring, 데이터베이스 및 RESTful에 대한 이해를 바탕으로 책임감 있게 프로젝트를 완수할 수 있는 분을 찾습니다.`,
      `PM과의 소통 경험 또는 Git 활용 경험이 있다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'chemistry_29th_grey',
    fontColor: 'chemistry_29th_text',
  },
  {
    name: 'AI Native',
    slug: 'ai-native',
    description: `자신의 전문성을 기반으로, AI를 활용해 직군의 경계를 넘어 실행 범위를 넓혀가는 팀입니다.`,
    url: Yapp.YAPP_RECRUIT_AI_NATIVE,
    backInfo: [
      `AI로 End-to-End 결과물을 만들어본 경험이 있으며, AI의 첫 결과물에 만족하지 않고 여러 번 다듬어 완성도를 끌어올려본 분을 찾습니다.`,
      `직군에 갇히지 않고, 필요한 일이면 직접 부딪히며 AI로 어디까지 가능한지 시험해보고 싶다면 더욱 환영합니다.`,
    ],
    backgroundColor: 'chemistry_29th_blue',
    fontColor: 'white_100',
  },
];

/* 문의 사항 */
export const RECRUIT_ENQUIRY = {
  title: `더 궁금하신 내용이 있거나\n문의 사항이 있으신가요?`,
  description: `리쿠르팅 관련 문의는 카카오톡 채널을 이용해 주세요.`,
  caution: `(페이스북 메시지 및 인스타그램 DM은 받지 않습니다)`,
  buttonName: '채널톡 문의 하기',
};
