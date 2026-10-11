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
  /*
   * 답변 속 <br class="br" />는 넓은 화면에서만 줄을 바꾼다(좁은 화면에서는 이어 쓴다).
   * Developer 탭은 개발 직군을 한데 모아 보여 주므로 질문 앞에 [개발공통]·[Web]·[Mobile]·[Server]를 붙인다.
   */
  faqs: [
    /* 지원 관련 */
    {
      subTitle: 'IT 업계 재직자나 관련 전공자가 아니어도 지원할 수 있나요?',
      description: `직업이나 전공에 관계없이 지원할 수 있습니다. 별도의 교육 없이 프로젝트를 진행하는 동아리인 만큼, 기획·디자인·개발·AI 활용 등 지원 직군에 필요한 기본 역량을 갖춘 분이라면 누구나 환영합니다.`,
      category: '지원 관련',
    },
    {
      subTitle: '학생과 직장인의 비율은 어떻게 되나요? 평가 기준도 동일한가요?',
      description: `학생과 직장인의 비율은 기수 및 직군에 따라 다르지만, 대체로 5:5 수준입니다.<br class="br" />
      지원자의 신분과 관계없이 동일한 평가 기준을 적용합니다.`,
      category: '지원 관련',
    },
    {
      subTitle: '여러 직군에 중복 지원할 수 있나요?',
      description: `직군 간 중복 지원은 불가능하며, 중복 지원 시 지원이 무효 처리됩니다.<br class="br" />
      따라서 반드시 하나의 직군을 선택해 지원해 주시기 바랍니다.`,
      category: '지원 관련',
    },
    {
      subTitle:
        '협업 경험이 없고 개인 프로젝트 경험만 있어도 지원할 수 있나요?',
      description: `네, 직접적인 협업 경험이 없어도 지원할 수 있습니다. 프로젝트 경험의 형태보다는 다른 직군에 대한 이해를 바탕으로 팀원들과 원활하게 소통하고 협업할 수 있는지를 중요하게 평가합니다.`,
      category: '지원 관련',
    },

    /* 활동 관련 */
    {
      subTitle: '활동 기간과 정규 세션 일정은 어떻게 되나요?',
      description: `29기 활동 기간은 2026년 11월 14일부터 2027년 3월 6일까지입니다.<br class="br" />
      정규 세션은 월 2~3회 토요일 오후에 서울에서 진행되며, 상세 일정과 장소는 추후 안내됩니다.`,
      category: '활동 관련',
    },
    {
      subTitle: '정규 세션에 비대면으로 참여할 수 있나요?',
      description: `29기 정규 세션은 모두 오프라인으로 진행되며, 그 외 팀 활동은 자율적으로 운영됩니다.<br class="br" />
      정규 세션에 오프라인으로 참여하기 어려운 경우 지원이 제한되는 점 양해 부탁드립니다.`,
      category: '활동 관련',
    },
    {
      subTitle: '팀은 어떻게 구성되나요?',
      description: `팀은 APP(PM 1명, Design 2명, Mobile 2~3명, Server 2명), WEB(PM 1명, Design 2명, Web 2명, Server 2명), AI Native(5명)로 구성됩니다. 팀별 구성 인원은 추후 변동될 수 있습니다.`,
      category: '활동 관련',
    },
    {
      subTitle: '회비가 있나요?',
      description: `YAPP은 비영리 IT 연합 동아리로, 29기 활동에 필요한 세션 운영 및 대관을 위해 10만 원의 회비를 받습니다.`,
      category: '활동 관련',
    },

    /* PM */
    {
      subTitle: '경력이 없어도 PM 파트에 지원할 수 있나요?',
      description: `네, 경력이 없어도 괜찮습니다. 경력 유무보다는 PM으로서의 사고방식과 태도를 중요하게 평가하며, 사용자의 문제를 고민하고 스스로 방향을 정해 해결해 본 경험이 있다면 좋습니다.`,
      category: 'PM',
    },
    {
      subTitle: '포트폴리오에서는 어떤 점을 중점적으로 평가하나요?',
      description: `최종 결과물보다는 그 결과에 이르기까지의 사고 과정과 판단 근거를 중요하게 평가합니다. 문제 정의와 시장 분석을 바탕으로 해결책을 제안한 과정, 협업 경험, 논리적인 문서 작성 역량을 보여주시면 좋습니다.`,
      category: 'PM',
    },
    {
      subTitle: 'PM 포트폴리오에 프로젝트 개수나 페이지 제한이 있나요?',
      description: `프로젝트 개수나 페이지 수에 별도의 제한은 없습니다. 다만 YAPP에서 프로젝트를 주도적으로 이끌어갈 수 있는 역량을 확인하기 위해, 집중적으로 보여주고 싶은 프로젝트 3개 내외로 구성하는 것을 권장합니다.`,
      category: 'PM',
    },
    {
      subTitle: '서비스 출시 경험이 없어도 지원할 수 있나요?',
      description: `네, 서비스 출시 경험은 필수 조건이 아닙니다. 출시 여부보다는 프로젝트에서의 고민과 배움을 중요하게 평가하며, YAPP에서 4개월간 기획부터 출시, 운영까지 직접 경험하실 수 있으니 자신 있게 지원해 주세요!`,
      category: 'PM',
    },

    /* Designer */
    {
      subTitle: 'UI/UX 외의 디자인 프로젝트도 포트폴리오에 포함할 수 있나요?',
      description: `네, 가능합니다. 다만 프로덕트 디자인 역량을 확인할 수 있도록 대표 UI/UX 프로젝트를 첫 번째로 배치하는 것을 권장하며, 인터랙션·기획·브랜딩 등 다른 분야의 강점도 함께 보여주셔도 좋습니다.`,
      category: 'Designer',
    },
    {
      subTitle: '포트폴리오에 포함할 프로젝트는 몇 개가 적절한가요?',
      description: `운영진의 원활한 검토를 위해 최대 2개의 프로젝트로 구성하는 것을 권장합니다. 프로젝트 개수보다는 본인의 역량과 강점이 잘 드러나도록 구성해 주시면 좋습니다.`,
      category: 'Designer',
    },
    {
      subTitle: '포트폴리오에서는 어떤 점을 중점적으로 평가하나요?',
      description: `사용자와 서비스의 문제를 해결하는 역량과 UI·BX 디자인의 시각적 완성도를 함께 평가합니다. 문제를 해결하기 위해 고민한 과정과 이를 디자인으로 구체화한 결과물을 적극적으로 보여주세요.`,
      category: 'Designer',
    },
    {
      subTitle: '디자이너도 기획에 참여하나요? PM과 역할은 어떻게 나누나요?',
      description: `PM은 프로젝트 기획과 관리를, 디자이너는 제품의 디자인 책임자로서 사용성과 심미성을 중심으로 담당합니다. 구체적인 역할과 기획 참여 범위는 팀 구성과 프로젝트 상황에 따라 달라지며, 팀 매칭 세션에서 미리 논의할 수 있습니다.`,
      category: 'Designer',
    },
    {
      subTitle: '서비스 출시 경험이 없어도 지원할 수 있나요?',
      description: `네, 서비스 출시 경험이 없어도 지원할 수 있습니다. 다만 별도의 교육 과정 없이 프로젝트를 진행하므로, 플랫폼과 개발 환경에 대한 기본적인 이해를 바탕으로 다른 직군과 협업할 수 있는 설계 역량이 필요합니다.`,
      category: 'Designer',
    },

    /* Developer */
    {
      subTitle: '[개발공통] 개발에 익숙해야 할까요?',
      description: `프로젝트 기간 내에 서비스 런칭을 할 수 있는 개발자를 찾고 있습니다.<br class="br" />
      각 파트마다 평가 기준이 다르므로 홈페이지 > 채용 부분을 참고해주세요!`,
      category: 'Developer',
    },
    {
      subTitle: '[개발공통] 개발 경력이 많아야 하나요?',
      description: `개발 경력과는 무관하게 4개월 동안 프로젝트를 끝까지 완수하고 동아리 활동에 성실히 참여해주실 분을 선호합니다!`,
      category: 'Developer',
    },
    {
      subTitle: '[Web] 프론트로 지원하려면 실력이 어느정도 되어야 하나요?',
      description: `팀 프로젝트로 다른 사람과 협업해본 경험이 있는 분이면 지원할 수 있어요. 별도의 교육 과정 없이 프로젝트를 진행하는 만큼, 기술적 숙련도보다는 협업 경험과 맡은 역할을 끝까지 책임지는 태도를 중요하게 평가해요.`,
      category: 'Developer',
    },
    {
      subTitle: '[Web] React나 Next.js를 사용해본 경험이 꼭 있어야 하나요?',
      description: `필수는 아니에요. Vue, Svelte 등 다른 프레임워크로 서비스를 만들어본 경험이 있다면 충분해요. 팀에서 기술 스택을 함께 정하고, 처음 쓰는 기술은 프로젝트를 하면서 익히게 돼요. 다만 최근 기수에서는 대부분의 팀이 React와 Next.js를 선택했다는 점은 참고해 주세요.`,
      category: 'Developer',
    },
    {
      subTitle:
        '[Mobile] 모바일 파트는 기존 iOS·Android 파트와 무엇이 달라졌나요?',
      description: `기존 iOS·Android 파트를 모바일 파트로 통합하여 Kotlin·Swift 기반 네이티브 개발뿐 아니라 KMP·Flutter·React Native 기반 크로스플랫폼 개발 경험을 가진 분들도 함께 모집합니다.`,
      category: 'Developer',
    },
    {
      subTitle:
        '[Mobile] 모바일 파트에 지원하려면 iOS와 Android를 모두 개발할 수 있어야 하나요?',
      description: `한 플랫폼을 개발할 수 있어도 지원 가능하며 네이티브 또는 크로스플랫폼 개발 역량을 바탕으로 프로젝트에 기여할 수 있다면 충분합니다. 또한 크로스플랫폼 개발 경험이 없어도 괜찮습니다.`,
      category: 'Developer',
    },
    {
      subTitle: '[Server] 서버 개발에 자바 대신 다른 기술을 사용해도 되나요?',
      description: `네, 가능합니다. 원활한 협업을 위해 비교적 보편적으로 사용되는 Java와 Kotlin을 권장하고 있습니다. 다만 프로젝트의 특성과 팀원 간 합의에 따라 다른 기술을 자유롭게 선택할 수 있습니다.`,
      category: 'Developer',
    },
    {
      subTitle:
        '[Server] 백엔드 직군의 경우 배포까지 해본 경험이 필수로 있어야 하나요?',
      description: `네, 기본적인 배포 경험이 필요합니다. YAPP 활동의 목표 중 하나는 실제 사용자가 사용할 수 있는 서비스를 출시하는 것입니다. 따라서 간단한 프로젝트라도 직접 배포하여 외부에서 접근 가능한 서비스를 만들어본 경험이 필요합니다.`,
      category: 'Developer',
    },

    /* AI Native */
    {
      subTitle:
        'AI Native 파트는 기존 PM/Design/Frontend/Backend 파트와 무엇이 다른가요?',
      description: `기존 파트는 정해진 직군의 역할을 맡지만, AI Native 파트는 자신의 전문 영역을 기반으로 AI를 활용해 역할 구분 없이 기획부터 런칭까지 폭넓은 업무를 직접 수행합니다.`,
      category: 'AI Native',
    },
    {
      subTitle: '개발을 할 줄 몰라도 AI Native 파트에 지원할 수 있나요?',
      description: `네, 개발 경험이 없어도 괜찮습니다. 지원 시 원활한 팀 빌딩을 위해 Design·일반 중 선호하는 분야를 조사하며, 개발 역량보다는 AI를 활용해 직군의 경계를 넘어 문제를 해결하려는 태도를 중요하게 평가합니다.`,
      category: 'AI Native',
    },
    {
      subTitle: '하나의 직군에 대한 전문성은 어느 정도 수준이어야 하나요?',
      description: `경력이나 연차보다는, AI가 낸 결과물이 왜 부족한지 자신의 전문 지식을 근거로 설명할 수 있는 수준이면 충분합니다.`,
      category: 'AI Native',
    },
    {
      subTitle:
        'AI로 End-to-End 결과물을 만들어본 경험이 없어도 지원할 수 있나요?',
      description: `네, End-to-End 경험은 우대사항이며 필수 조건은 아닙니다. AI의 첫 결과물에 만족하지 않고 여러 번 다듬어 완성도를 끌어올린 경험이 있다면 포트폴리오에 담아주세요.`,
      category: 'AI Native',
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
