import Yapp from 'constants/yapp';
import { FieldNameTypes } from 'pages-components/recruit/RecruitField';
import { DeveloperFieldName } from 'pages-components/recruit/RecruitField/RecruitDeveloper';

/**
 * 작성 Tip
 * - 줄바꿈은 <br /> 태그를 넣어주세요!
 * - <span class="test">테스트</span> 과 같은 html 태그와 class 를 넣어서 사용할 수 있습니다!
 * - html 태그 사용시 `` 백틱 으로 문자열을 감싸주세요!
 */

/* 현재 모집중이면 true 아니면 false */
export const IS_RECRUITING = true;

/** Banner  */
export const RECRUIT_BANNER = {
  title: '지금은 모집기간이 아닙니다',
  description: '현재 19기 활동 중! 다음 기수는 2022.03에 예정되어 있습니다',
  buttonName: '모집 알림 신청',
};

export const RECRUIT_BANNER_ACTIVE = {
  title: `YAPP<br class="mobile" /> ${Yapp.YAPP_GENERATION}기 모집`,
  description: `YAPP 20기에서 6개월간 활동할<br class="mobile" /> 기획자(PM)/디자이너/개발자 신입 회원을<br class="mobile" /> 모집합니다.<br class="desktop" /> 
    IT 분야에 대한 열정과 의지가<br class="mobile" /> 넘쳐나고, 동아리에서 많은 사람들과 즐겁게<br class="mobile" /> 활동하고 싶은 분들의 많은 지원 바랍니다!`,
  buttonName: '지원하기',
};

/**지원 방법 */
export const RECRUIT_APPLY_WAY = {
  title: '지원 방법',
  ways: [
    {
      subTitle: '모집기간',
      description: `YAPP에서는 1년에 두번<br />
                    열정을  가지고 활동에 함께할<br />
                    YAPPian을 모집합니다`,
    },
    {
      subTitle: '지원자격',
      description: `6개월 동안 활동하는데<br  />
                    문제가 없고,<br />
                    실력을 키우기 위해 배우려는<br />
                    의지가 있는 누구나
                    <span class="small">대학생이 아닌 졸업생, 직장인도 가능합니다.</span>`,
    },
    {
      subTitle: '지원방법',
      description: `1차 서류<br />
                      <div class="smallGrey">지원서 작성 및 포트폴리오 제출</div>
                    2차 면접 후 최종 합격`,
    },
  ],
};

/* 모집 일정 */
export const RECRUIT_SCHEDULE = {
  title: '모집 일정',
  schedules: [
    {
      subTitle: '서류 접수',
      description: `2022. 03. 06. (일)<br />
                    ~ 03. 17. (목)`,
    },
    {
      subTitle: '서류 결과 발표',
      description: `2022. 03. 22. (화)`,
    },
    {
      subTitle: '면접',
      description: `2022. 03. 25. (금)<br />
                    ~ 03. 27. (일)`,
    },
    {
      subTitle: '최종 발표',
      description: `2022. 03. 30. (수)`,
    },
  ],
};

/* 자주 묻는 질문 */
export const RECRUIT_FAQ = {
  title: '자주 묻는 질문',
  faqs: [
    {
      subTitle: 'YAPP은 어떤 동아리인가요?',
      description: `YAPP은 기획자, 디자이너, 개발자로 팀을 구성하여 <b>6개월간 하나의 IT 서비스(웹,앱,etc.)를 제작</b>하는 연합 동아리입니다.<br class="br" /> 
      프로젝트는 기업형 프로세스에 따라 진행하고 런칭하여, 팀원들의 아이디어를 실제 IT 서비스로 구체화
                    시키는 경험을 할 수 있습니다.`,
      isOpen: false,
    },
    {
      subTitle:
        '대학생이 아닌 고졸/재직자/졸업자 등도 YAPP에서 활동할 수 있을까요?',
      description: `6개월 내내 꾸준히 활동할 수 있고 배우고자 하는 <b>열의가 충분하다면, 누구든 지원이 가능</b>합니다.<br class="br" />
                    현재도 고졸/재직자/졸업자 중 활발히 활동하시는 분들이 계십니다.<br class="br" />
                    하지만 매주 진행하는 <b>정기 세션</b>과 기수당 3회 열리는 <b>DevCamp(당일 및 1박 2일 해커톤)</b>에 필수적으로 참여해야 하며,<br class="br" />
                    특히 방학 중에는 원활한 프로젝트 진행을 위해 추가적인 팀 활동에 모여야 한다는 점을 숙지해주세요!`,
      isOpen: false,
    },
    {
      subTitle: '실력이 뛰어난 사람만 지원할 수 있나요?',
      description: `YAPP에서는 6개월간 <b>꾸준히 활동</b>할 수 있는지, 그리고 <b>발전하고자 하는 의지가 충분한지</b>를 가장 중요하게 생각합니다.<br class="br" />
                    그러나 교육보다는 프로젝트 진행이 중심이기 때문에 자율 스터디나 특강 이외의 교육 커리큘럼을 따로 진행하고 있지 않습니다.<br class="br" />
                    따라서 동아리 활동 이외에 <b>개인적으로도 시간과 노력을 투자해야 한다는 점</b>을 알아주시길 바랍니다.`,
      isOpen: false,
    },
    {
      subTitle: '정기 모임(세션)은 언제, 어디서 하나요?',
      description: `<b>매주 토요일 오후 2시-5시</b>, 세션은 서로 간의 지식 공유&친목 도모를 위해 진행되며 가벼운 뒤풀이도 있을 수 있습니다.<br class="br" />
                    다만, 코로나 상황에 따라 현재는 <b>전면 온라인으로 진행</b>되고 있으며 거리두기가 완화됨에 따라 오프라인 만남이 있을 수도 있습니다.<br class="br" />
                    오프라인 만남의 경우 섭외 장소에 따라 세션 장소가 변경될 수 있습니다.`,
      isOpen: false,
    },
    {
      subTitle: '동아리 활동은 어떤 게 있나요?',
      description: `1. 아이디어를 서비스로 구체화 시킬 수 있는 해커톤 DevCamp 3회 (1회에 한하여 1박 2일 해커톤 진행)<br />
                    2. 정기 전체 세션: 프로젝트 팀 회의, 직군 간 커뮤니케이션, 진행현황 발표 등을 진행합니다.<br />
                    3. 직군 세션: 직군 특성을 반영한 발표, 초청 취업 강연, 현직자 선배의 조언을 들을 수 있는 Networking Day 등<br />
                    4. 성과공유회: 실제 현업에서 활동 중인 선배들에게 프로젝트를 발표하고, 피드백을 받을 수 있는 시간<br />
                    5. 그 외 다양한 네트워킹 활동`,
      isOpen: false,
    },
  ],
};

/* 모집 분야 */
export const RECRUIT_FIELD_NAMES: FieldNameTypes[] = [
  '기획자',
  '디자이너',
  '개발자',
];

export const RECRUIT_DEVELOPER_FIELD_NAMES: DeveloperFieldName[] = [
  'iOS',
  'Android',
  'Front-End',
  'Back-End',
];

/* 기획자 */
export const RECRUIT_EXPLAIN_PROJECT_MANAGER = {
  content1: `디자이너, 개발자와 함께 6개월 간 프로젝트를 수행합니다.<br />
  서비스의 기획에 대한 아이디어를 수집, 제시하며<br />
  서비스 런칭을 목표로 프로젝트를 주도적으로 관리하고 진행합니다.
  `,
  content2: `1. 새로운 서비스에 대한 아이디어가 있으신 분<br />
  2. 서비스 아이디어를 시각적으로 구현하여 전달할 수 있는 분<br />
  3. 프로젝트 일정과 진행 상황을 주체적으로 관리할 수 있으신 분<br />
  4. 타 직군과 원활한 커뮤니케이션을 할 수 있는 분`,
  content3: `1. 디자이너, 개발 직군과의 프로젝트 경험<br />
  2. 프리젠테이션 발표 경험<br />
  3. UX 설계(기획~와이어프레임) 경험`,
};

/* 디자이너 */
export const RECRUIT_EXPLAIN_DESIGNER = {
  content1: `기획자, 개발자와 함께 6개월 간 프로젝트를 수행합니다.<br />
  기획을 바탕으로 개별 팀의 아이디어에 따라<br />
  UX/UI/GUI 디자인을 담당합니다.`,
  content2: `1. UX/UI 디자인에 관심이 있고, UX/UI 디자인을 경험해보신 분<br />
  2. 서비스 아이디어를 시각적으로 표현하실 수 있는 분<br />
  3. 열린 자세로 다른 직군과 소통하실 수 있는 분<br />`,
  content3: `1. 기획자, 개발 직군과의 프로젝트 경험<br />
  2. 프리젠테이션 발표 경험<br />`,
};

/* iOS */
export const RECRUIT_EXPLAIN_IOS_DEVELOPER = {
  content1: `팀 내에서 iOS 클라이언트 개발을 담당합니다.<br />
Back-End, 기획, 디자인분들과 함께 프로젝트를 진행하며,<br />
원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.`,
  content2: `1. 학교 과제 외 프로젝트 진행 경험이 있는 분<br />
2. Swift 문법을 알고 있으며 실제 개발에 적용해 보신 분<br />
3. 아이폰에 **Hello World**를 띄워 보신 분<br />
4. 성실한 자세로 열심히 배우며 프로젝트에 끝까지 참여할 수 있는 분`,
  content3: `1. 디자이너와의 프로젝트 경험<br />
2. MVC, MVP 등 아키텍쳐 패턴과 iOS Platform Architecture에 이해<br />
3. GitHub / GitLab 등의 VCS(Version Control System) 경험<br />
4. Slack 등 협업 도구를 사용 경험<br />
5. REST API를 다뤄본 경험`,
};

/* Android */
export const RECRUIT_EXPLAIN_ANDROID_DEVELOPER = {
  content1: `팀 내에서 Android 클라이언트 개발을 담당합니다.<br />
  Back-End, 기획, 디자인분들과 함께 프로젝트를 진행하며,<br />
  원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.`,
  content2: `1. java, kotlin 등 안드로이드 개발 언어를 사용하신 분<br />
  2. 모르는 부분이 생기면 주저않고 질문이 가능하신 분<br />
  3. 끈기있게 프로젝트를 진행해주실 분<br />`,
  content3: `1. 디자이너, 백엔드 개발자와의 소통 경험<br />
  2. GitHub를 사용한 협업 프로젝트 경험`,
};

/* Front_End */
export const RECRUIT_EXPLAIN_FRONTEND_DEVELOPER = {
  content1: `팀 내에서 웹 프론트앤드 개발을 담당합니다.<br />
  Back-End, 기획, 디자인분들과 함께 프로젝트를 진행하며,<br />
  원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.`,
  content2: `1. HTML과 CSS 기본을 이해하고 계신 분<br />
  2. 자바스크립트로 프로젝트를 해보고 싶은 분<br />
  3. 마지막까지 프로젝트를 완수하실 분<br />`,
  content3: `1. react vue angular중 하나 이상 다뤄 본 경험<br />
  2. Git을 이용한 프로젝트 관리 경험<br />
  3. 디자이너, 백엔드 개발자, 기획자와 소통 경험`,
};

/* Back_End */
export const RECRUIT_EXPLAIN_BACKEND_DEVELOPER = {
  content1: `팀 내에서 Back-End 개발을 담당합니다.<br />
클라이언트 개발자, 기획, 디자인분들과 함께 프로젝트를 진행하며,<br />
원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.`,
  content2: `1. 데이터베이스의 기초가 있으신 분<br />
2. 일반적으로 사용하는 RESTful에 대한 이해가 있으신 분<br />
3. 마지막까지 프로젝트를 완수하실분`,
  content3: `1. 언어 상관 없이 RESTful API를 만들어 본 경험<br />
2. 기획자와의 소통 경험<br />
3. Git을 이용한 프로젝트 관리 경험`,
};

/* 문의 사항 */
export const RECRUIT_ENQUIRY = {
  title: '더 궁금하신 내용이 있거나<br /> 문의 사항이 있으신가요?',
  description:
    '동아리 관련, 프로젝트, 후원 등<br class="mobile" /> 언제든지 문의해 주세요.',
  buttonName: '문의 하기',
};
