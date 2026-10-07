import Yapp from 'constants/yapp';
import { RECRUITING_PERIOD_TEXT, RecruitStatus } from '../constants/status';

/** Grid Section */
export const CURRENT_INFO_DATA = [
  {
    title: '운영 기간',
    content: '16년',
    icon: '/assets/images/29th/icons/piano.png',
    color: 'chemistry_29th_orange',
    fontColor: 'white_100',
  },
  {
    title: '운영 기수',
    content: '28기',
    icon: '/assets/images/29th/icons/guitar.png',
    color: 'chemistry_29th_grey',
    fontColor: 'chemistry_29th_text',
  },
  {
    title: '현재 활동 회원',
    content: '65명',
    icon: '/assets/images/29th/icons/drum.png',
    color: 'chemistry_29th_blue',
    fontColor: 'white_100',
  },
  {
    title: '누적 활동회원',
    content: '600+명',
    icon: '/assets/images/29th/icons/album.png',
    color: 'chemistry_29th_orange',
    fontColor: 'white_100',
  },
  {
    title: '런칭 서비스',
    content: '70+개',
    icon: '/assets/images/29th/icons/audio.png',
    color: 'chemistry_29th_grey',
    fontColor: 'chemistry_29th_text',
  },
  {
    title: '누적 앱 다운로드',
    content: '400,000+',
    icon: '/assets/images/29th/icons/headphone.png',
    color: 'chemistry_29th_blue',
    fontColor: 'white_100',
  },
];

/** Carousel에 들어갈 프로젝트 데이터 */
export const CAROUSEL_DATA = [
  {
    title: 'Hilit',
    link: '/project/28th/hilit',
    image: '/assets/project/28_thumbnail_hilit.webp',
  },
  {
    title: '토닥운',
    link: '/project/28th/todagoon',
    image: '/assets/project/28_thumbnail_todagoon.webp',
  },
  {
    title: 'SCOOP',
    link: '/project/28th/scoop',
    image: '/assets/project/28_thumbnail_scoop.webp',
  },
  {
    title: 'Looky & 장보고',
    link: '/project/28th/looky-jangbogo',
    image: '/assets/project/28_thumbnail_looky-jangbogo.webp',
  },
  {
    title: '아끼모',
    link: '/project/28th/akkimo',
    image: '/assets/project/28_thumbnail_akkimo.webp',
  },
  {
    title: '채소zip',
    link: '/project/28th/chaeso-zip',
    image: '/assets/project/28_thumbnail_chaeso-zip.webp',
  },
];

/** Social News Card */
// 태그 형식 가능합니다.
export const NEWS_DATA = [
  {
    image: '/assets/images/26th/social.png',
    link: 'https://www.instagram.com/about.yapp/',
    content: `🌱 YAPP 26기 신규 회원 모집 OPEN 🌱<br />
4월 10일 (목) ~ 4월 20일 (일) 23시 59분까지 YAPP 26기 신규 회원을 모집해요.
야뿌 동산에서 함께 탐색하고 시너지를 만들며, 더 멀리 나아갈 예비 야뿌들을 기다립니다! 많은 관심과 지원 부탁드려요!
    `,
  },
  {
    image: '/assets/images/25th/social.png',
    link: 'https://www.instagram.com/about.yapp/',
    content: `🧡YAPP 25기 신규 회원 모집 OPEN🧡<br />
10월 19일 (토) ~ 10월 26일 (토) 23시 59분까지 YAPP 25기 신규 회원을 모집해요! 
함께 큐브를 완성해줄 예비 야뿌들의 많은 지원 부탁드립니다!
    `,
  },
  {
    image: '/assets/images/24th/social.webp',
    link: 'https://www.instagram.com/about.yapp/',
    content: `🧡YAPP 24기 신규 회원 모집 OPEN🧡<br />
    4월 5일(금) ~ 4월 13일(토) 23시 59분까지 YAPP 24기 신규 회원을 모집해요!
    나만의 아이디어로 세상을 바꾸고 싶은 예비 야뿌들의 많은 지원 부탁드립니다!
    `,
  },
  {
    image: '/assets/images/social_recruit_23.jpeg',
    link: 'https://www.instagram.com/about.yapp/',
    content: `📢 주목! YAPP 23기 신규 회원 모집을 시작합니다! 
    🌱 Gather, Together! 🌱
    9월 25일(월)부터 10월 1일(일) 23시 59분 까지
    YAPP 23기 신규 회원을 모집합니다!
    `,
  },
  {
    image: '/assets/images/social1.png',
    link: 'https://www.instagram.com/about.yapp/',
    content: `🧡 IT연합동아리 YAPP 22기 신규 회원 모집 시작(~4/9) 🧡
    👨‍👩‍👧‍👦 Gather, Together!
    3월 31일(금)부터 4월 9일(일) 밤 11시 00분까지
    YAPP 22기로 함께 할 신규 회원을 모집합니다!`,
  },
  {
    image: '/assets/images/social2.png',
    link: 'https://www.instagram.com/about.yapp/',
    content: `🧡 IT연합동아리 YAPP 21기 신규 회원 모집 시작(~9/29) 🧡
    🏃‍♂️ Sprint Time, Open to Anyone!
    9월 18일(일)부터 9월 29일(목) 밤 11시 59분까지
    YAPP 21기로 함께 할 신규 회원을 모집합니다!
    🙋‍♀️ YAPP?
    YAPP은 다양한 아이디어와 열정, 그리고 가능성을 바탕으로 의미있는 일을 추구하는, 기존에 없던 새로운 가치를 만들기 위해 노력하는 '기업형 IT 연합 동아리'입니다.
    열정 넘치는 기획자 / 디자이너 / 개발자를 기다리고 있습니다. 서비스 런칭을 꿈꾸는 모든 분들의 많은 관심과 지원 부탁드립니다.`,
  },
];

export const GRID_SECTION = {
  title: '지금 YAPP은 이렇게 움직여요',
  subTitle: `실무 기반 협업 시스템으로 운영되는\n연합 기업형 IT 동아리`,
};

/** AI Native Team 소개 */
export const AI_NATIVE_SECTION = {
  title: 'YAPP 29기부터 AI Native Team을 새롭게 만들었어요',
  subTitle: 'AI와 함께 직군의 경계를 넘어, 더 넓게 만들고 실행하는 팀이에요.',
  team: {
    title: 'AI Native Team',
    descriptions: [
      '자신의 전문성을 기반으로, AI를 활용해 직군의 경계를 넘어 실행 범위를 넓혀가는 팀입니다.',
      'AI가 만든 결과를 그대로 사용하는 것이 아니라 직접 판단하고 다듬으며, 하나의 프로덕트를 끝까지 만들어갑니다.',
    ],
  },
  cards: [
    {
      icon: '/assets/images/29th/icons/ai_native_operate.svg',
      iconWidth: 46,
      title: '이렇게 운영돼요',
      description:
        '정해진 역할에 일을 맞추기보다 문제 해결에 필요한 일을 유연하게 나누고 직접 시도합니다. AI를 어떻게 활용할지, 얼마나 빠르게 만들고 검증할지, 어떤 방식으로 협업할지도 직접 설계합니다.',
    },
    {
      icon: '/assets/images/29th/icons/ai_native_experience.svg',
      iconWidth: 41,
      title: '이런 경험을 할 수 있어요',
      description:
        '자신의 전문 영역을 넘어 기획·구현·출시 등 Product 전반에 더 넓게 참여하는 경험을 할 수 있습니다. AI와 함께 일하며 업무 방식과 역할을 확장하고, 하나의 프로덕트를 끝까지 만들어볼 수 있습니다.',
    },
  ],
};

/** 운영진 소개 */
export interface Executive {
  role: string;
  name: string;
  /** 프로필 이미지 경로. 없으면 빈 자리로 표시한다 */
  image?: string;
}

export const EXECUTIVE_SECTION = {
  title: `YAPP을 이끄는 ${Yapp.YAPP_GENERATION}기 운영진`,
  subTitle:
    'YAPP의 방향을 함께 고민하고, 더 나은 활동을 만들어가는 운영진을 소개합니다.',
};

export const EXECUTIVE_GROUPS: { name: string; members: Executive[] }[] = [
  {
    name: '회장단',
    members: [
      {
        role: '회장',
        name: '이예진',
        image: '/assets/images/29th/executives/lee-yejin.webp',
      },
      {
        role: '부회장',
        name: '문세종',
        image: '/assets/images/29th/executives/moon-sejong.webp',
      },
    ],
  },
  {
    name: '세션기획',
    members: [
      {
        role: '세션기획 총괄',
        name: '손호민',
        image: '/assets/images/29th/executives/son-homin.webp',
      },
    ],
  },
  {
    name: '회계',
    members: [
      {
        role: '회계 총괄',
        name: '강채원',
        image: '/assets/images/29th/executives/kang-chaewon.webp',
      },
    ],
  },
  {
    name: '인사',
    members: [
      {
        role: '인사 총괄',
        name: '김송이',
        image: '/assets/images/29th/executives/kim-songi.webp',
      },
    ],
  },
  {
    name: '디자인',
    members: [
      {
        role: '디자인 리드',
        name: '박수연',
        image: '/assets/images/29th/executives/park-suyeon.webp',
      },
      {
        role: '디자인 팀',
        name: '김유희',
        image: '/assets/images/29th/executives/kim-yuhee.webp',
      },
      {
        role: '디자인 팀',
        name: '황유나',
        image: '/assets/images/29th/executives/hwang-yuna.webp',
      },
    ],
  },
  {
    name: '홍보',
    members: [
      {
        role: '홍보 총괄',
        name: '박주현',
        image: '/assets/images/29th/executives/park-juhyeon.webp',
      },
      {
        role: '홍보 팀',
        name: '김지윤',
        image: '/assets/images/29th/executives/kim-jiyun.webp',
      },
      {
        role: '홍보 팀',
        name: '신민규',
        image: '/assets/images/29th/executives/shin-mingyu.webp',
      },
    ],
  },
  {
    name: '직군리드',
    members: [
      {
        role: 'PM 리드',
        name: '성민수',
        image: '/assets/images/29th/executives/seong-minsu.webp',
      },
      {
        role: 'PM 리드',
        name: '전지영',
        image: '/assets/images/29th/executives/jeon-jiyoung.webp',
      },
      {
        role: '디자인 리드',
        name: '박수연',
        image: '/assets/images/29th/executives/park-suyeon.webp',
      },
      {
        role: '웹 리드',
        name: '박병규',
        image: '/assets/images/29th/executives/park-byeonggyu.webp',
      },
      {
        role: '서버 리드',
        name: '공희상',
        image: '/assets/images/29th/executives/kong-heesang.webp',
      },
      {
        role: '서버 리드',
        name: '정용훈',
        image: '/assets/images/29th/executives/jeong-yonghun.webp',
      },
      {
        role: '모바일 리드',
        name: '정찬호',
        image: '/assets/images/29th/executives/jeong-chanho.webp',
      },
      {
        role: '모바일 리드',
        name: '이승원',
        image: '/assets/images/29th/executives/lee-seungwon.webp',
      },
      {
        role: 'AI Native 리드',
        name: '유재윤',
        image: '/assets/images/29th/executives/yu-jaeyun.webp',
      },
    ],
  },
];

export const PROJECT_SECTION = {
  title: 'YAPP의 서비스들',
  subTitle: `YAPP에서 활동하는 구성원인 ‘야뿌’들이 만들어낸\n프로젝트들이에요.`,
};

export const NEWS_SECTION = {
  title: 'YAPP 안의 사람들, 그리고 이야기',
  subTitle: `야뿌들의 성장 과정, 활동 후기,\n밋업 현장과 다양한 이야기를 담고 있어요.`,
};

export const SPONSOR_SECTION = {
  title: 'YAPP의 후원사',
  subTitle: `YAPP과 새로운 가치를 만들어갈 후원 및 협업 문의,\n언제든 기다리고 있습니다.`,
};

/**
 * Sponsor 이미지.
 * 로고 원본(sponsor_*.png)을 카드 색 바탕 위에 올려 한 장으로 만든 그림(tile_*.webp)을 쓴다.
 * 브라우저가 강제로 다크모드를 적용해도 로고와 바탕이 함께 움직여 로고가 묻히지 않는다.
 * 그림 폭은 로고 폭의 3배이고 로고는 가운데에 있다. 만드는 방법은 DESIGN.md에 있다.
 */
export const SPONSOR_DATA = [
  {
    image: '/assets/sponsors/tile_flab.webp',
    alt: 'sponsor F-Lab',
    width: 738,
    height: 738,
  },
  {
    image: '/assets/sponsors/tile_elice.webp',
    alt: 'sponsor elice',
    width: 819,
    height: 819,
  },
  {
    image: '/assets/sponsors/tile_greeting.webp',
    alt: 'sponsor greeting',
    width: 873,
    height: 874,
  },
  {
    image: '/assets/sponsors/tile_dcamp.webp',
    alt: 'sponsor dcamp',
    width: 840,
    height: 841,
  },
  {
    image: '/assets/sponsors/tile_ictcoc.webp',
    alt: 'sponsor ICT COC',
    width: 840,
    height: 840,
  },
  // {
  //   image: '/assets/sponsors/sponsor_goorm.png',
  //   alt: 'sponsor goorm',
  // },
  // {
  //   image: '/assets/sponsors/sponsor_fiveSpot.png',
  //   alt: 'sponsor fiveSpot',
  // },
];

export interface RecruitBannerInfo {
  title: string;
  subTitle: string;
  date: string;
  buttonName: string;
}

/* 모집 관련 상수 */
export const HOME_BANNER_PRE = {
  title: 'PLAY OUR CHEMISTRY',
  subTitle: `YAPP ${Number(Yapp.YAPP_GENERATION)}기 모집이\n곧 시작됩니다`,
  date: RECRUITING_PERIOD_TEXT,
  buttonName: `${Number(Yapp.YAPP_GENERATION)}기 모집 알림 신청하기`,
};

export const HOME_BANNER_ACTIVE = {
  title: 'PLAY OUR CHEMISTRY',
  subTitle: `지원하기 버튼 하나로\nYAPP ${Number(
    Yapp.YAPP_GENERATION,
  )}기의 야뿌가 되어보세요.`,
  date: RECRUITING_PERIOD_TEXT,
  buttonName: `${Number(Yapp.YAPP_GENERATION)}기 지원하기`,
};

export const HOME_BANNER_POST = {
  title: 'PLAY OUR CHEMISTRY',
  subTitle: `다음 기수의 모집 소식을 가장 먼저 만나보세요`,
  date: '지금은 모집 기간이 아닙니다',
  buttonName: `${Number(Yapp.YAPP_GENERATION) + 1}기 모집 알림 신청하기`,
};

export const HOME_BANNER_EXTRA = {
  title: 'PLAY OUR CHEMISTRY',
  subTitle: `YAPP ${Number(Yapp.YAPP_GENERATION)}기 iOS 추가 모집중`,
  date: '4.27(월) - 4.28(화)',
  buttonName: `${Number(Yapp.YAPP_GENERATION)}기 iOS 지원하기`,
};

export const HOME_BANNER_BY_STATUS: Record<RecruitStatus, RecruitBannerInfo> = {
  [RecruitStatus.PRE]: HOME_BANNER_PRE,
  [RecruitStatus.ACTIVE]: HOME_BANNER_ACTIVE,
  [RecruitStatus.POST]: HOME_BANNER_POST,
  [RecruitStatus.EXTRA]: HOME_BANNER_EXTRA,
};
