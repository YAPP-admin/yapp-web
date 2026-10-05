// 사이트의 메타 데이터 수정은 여기서 진행합니다.

const metaData = {
  title: 'YAPP',
  sitename: '연합동아리 YAPP',
  author: 'YAPP-admin',
  email: 'support@yapp.co.kr',
  description: '작은 아이디어로 세상을 크게 변화시키는 IT동아리, YAPP',
  keywords:
    'YAPP, yapp, 동아리, 연합 동아리, IT 동아리, 개발 동아리, 대학교 동아리, 대학생 연합 동아리, 대외활동, 외부활동, 사이드 프로젝트, 개발, 개발자, 프론트엔드, 백엔드, 디자이너, PM',
  type: 'website',
  siteUrl: 'https://www.yapp.co.kr',
  image: '/assets/images/29th/preview.png',
  locale: 'ko_KR',
  analytics: {
    google: 'G-MPQ55K4DB3',
  },
};

export interface PageSEO {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noindex?: boolean;
}

// 페이지별 SEO 정보 (key: 라우트 경로). 프로젝트 상세는 getStaticProps에서 생성합니다.
export const PAGE_SEO: Record<string, PageSEO> = {
  '/': { path: '/' },
  '/project': {
    title: '프로젝트',
    description:
      'YAPP에서 활동하는 구성원 ‘야뿌’들이 아이디어에서 런칭까지 직접 만들어낸 서비스를 소개합니다.',
    path: '/project',
  },
  '/recruit': {
    title: '모집 안내',
    description:
      'YAPP 신규 회원 모집 일정과 지원 방법, 직군별 안내, 자주 묻는 질문을 확인하세요.',
    path: '/recruit',
  },
  '/story': {
    title: 'YAPP 이야기',
    description:
      '야뿌들의 성장 과정, 활동 후기, 밋업 현장과 다양한 이야기를 담고 있어요.',
    path: '/story',
  },
  '/404': { title: '페이지를 찾을 수 없습니다', noindex: true },
};

export default metaData;
