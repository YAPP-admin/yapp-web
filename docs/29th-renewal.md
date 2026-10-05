# 29기 홈페이지 개편

28기 → 29기 개편 요구사항과, 요구사항별로 지금 코드의 어디를 고쳐야 하는지 정리한 문서입니다.
개편이 끝나면 이 문서는 지웁니다.

- 디자인: Figma `YAPP 29기 웹사이트` (file key `zzQ9CQynI9eOYKbuAGXDzQ`, 페이지 `29기` node `8501:2264`)
- 작업 브랜치: `codex/29th-website`
- "요구사항"은 디자인 팀이 준 변경 내역 그대로이고, "현재 코드"는 2026-10-05 `main`(`aad6b64`) 기준으로 확인한 내용입니다.
- 레포 전반의 안내는 [AGENTS.md](../AGENTS.md), 스타일 규칙은 [DESIGN.md](../DESIGN.md)에 있습니다.

## 1. 전체 변경: 컬러

| 용도 | 29기 값 |
| --- | --- |
| 카드 컬러 | `#0099ff`, `#ff8038`, `#f2f5f8` |
| 메인 텍스트 컬러 | `#002859` |

28기 색 키와의 대응, 사용처, 적용 방법은 [DESIGN.md](../DESIGN.md)의 "29기 브랜딩 색"에 있습니다.

## 2. 섹션별 변경

| # | 섹션 | 요구사항 | 현재 코드 |
| --- | --- | --- | --- |
| 1 | 배너 | 기수별 YAPP 브랜딩 이미지 삽입. 지원하기 버튼 컬러 변경. **정책: "nn기 지원하기" 클릭 시 지원 페이지로 이동** | `components/home/IntroSection/Banner28th.tsx`. 이미지는 `public/assets/images/28th/banner_home_*.webp`, `title_*.png`. 같은 이미지를 `pages/_document.tsx`에서 preload 합니다. 현재 배너 컴포넌트 안에는 버튼이 없습니다. |
| 2 | 00_introduce | 변경 없음 | `AnimatedTextSection` |
| 3 | 01_now | 기수별 YAPP 브랜딩 아이콘 삽입 | `GridSection` + `database/home.ts`의 `CURRENT_INFO_DATA`(아이콘 `images/28th/icons/*.png`, 카드 색) |
| 4 | 02_AI Native | **추가.** AI Native Team 소개 | 없음. 새 섹션을 만들어야 합니다. |
| 5 | 03_project | 변경 없음 | `ProjectSection` |
| 6 | 04_sponser | 변경 없음 | `SponsorSection` |
| 7 | 05_Executives | **추가.** 운영진 소개. 이미지 삽입 예정 | 없음. 새 섹션을 만들어야 하고, 이미지는 아직 받지 못했습니다. |
| 7 | 06_recruit | 기수별 YAPP 브랜딩 이미지 삽입. 지원하기 버튼 패딩값 변경 | `components/common/JoinSection`(배경 `images/28th/recruit_bg*.webp`) |
| 8 | footer | 아래 링크 6개 | `components/common/Footer` + `constants/yapp.ts`. 6개 모두 이미 있습니다. |
| 9 | nn기 지원하기 FAB | 모집 마감일이 되면 FAB 삭제 | `components/home/RecuitBtn`. 홈에서 `ACTIVE` 상태일 때만 그리므로 마감 뒤에는 이미 사라집니다. |

섹션 번호는 받은 문서 그대로입니다(7이 두 번 나옵니다). 섹션과 컴포넌트의 대응은 `pages/index.tsx`의 렌더 순서로 맞춘 것입니다.

footer 링크:

| 이름 | 주소 |
| --- | --- |
| 카카오톡 공식채널 | https://pf.kakao.com/_aGxofd |
| 인스타그램 | https://www.instagram.com/about.yapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== |
| 깃허브 | https://github.com/YAPP-Github |
| 미디움 | https://medium.com/@about.yapp |
| 링크드인 | https://www.linkedin.com/company/yappu/ |
| 스레드 | https://www.threads.com/@about.yapp |

요구사항과 현재 코드의 차이:

- 카카오톡 주소가 코드에서는 `http://`입니다. 요구사항은 `https://`입니다.
- 인스타그램 주소가 코드에서는 `https://www.instagram.com/about.yapp/`입니다. 요구사항 주소에는 공유 추적 파라미터(`utm_source`, `igsh`)가 붙어 있습니다. 그대로 넣을지 확인이 필요합니다.
- 표기가 코드에서는 "미디엄", 요구사항에서는 "미디움"입니다.

## 2-1. 모집 안내 페이지 변경 (Figma 메모 그대로)

시안: 섹션 `모집 안내(Recruit)` node `8647:20147` (1920 / 834 / 360). 변경 메모: node `8531:3432`. 직군 카드 컴포넌트: node `8584:7185`.

| # | 섹션 | 요구사항 | 코드 |
| --- | --- | --- | --- |
| 1 | 배너 | 기수별 YAPP 브랜딩 이미지 삽입. 타이머 글자 위치 및 컬러 변경. 지원하기 버튼 패딩값 변경(모집 알림 신청하기 → 아이콘 추가) | `components/recruit/RecruitBanner` |
| 2 | 직군 모집 | 6개 직군 카드 컴포넌트(크기, 간격 등 확인). 모집 시작 시 카드의 [자세히 보기] → [지원하기]로 변경. [지원하기]를 누르면 그리팅 화면으로 이동 | `components/recruit/RecruitField`, `RecuitCard` |
| 3 | 인재상 | 변경 없음 | `components/recruit/FindMember` |
| 4 | 모집일정 | 기수별 YAPP 브랜딩 아이콘 삽입 | `components/recruit/RecruitSchedule` |
| 5 | 세션 커리큘럼 | [세션 일정] → [세션 커리큘럼]으로 변경. 전반적인 디자인 및 텍스트 수정. 날짜 추가 | `components/recruit/SessionOverview` |
| 6 | FAQ | "더 많은 FAQ 보러가기" 버튼 삭제. 탭 추가(지원 관련, 활동 관련, PM, Designer, Developer, AI Native) | `components/recruit/FrequentlyAskedQuestions` |
| 7 | 문의사항 | 기수별 YAPP 브랜딩 이미지 삽입 | `components/common/JoinSection` |
| 8 | footer | 6개 링크 연결 | 홈에서 완료 |

시안의 직군은 PM, Design, Web, Mobile, Server, AI Native 6개입니다(28기: PM, Designer, iOS, Android, Front-end, Back-end).

## 2-2. 직군별 인재상 & JD 페이지 (신규, Figma 메모 그대로)

시안: 섹션 `직군 별 인재상 & JD` node `8641:5916` (1920 화면만 있음). 변경 메모: node `8641:3566`.

- 직군 카드에서 [자세히 보기]를 누르면 그 직군의 [인재상 & JD 화면]으로 이동합니다.
- **정책**: 이 페이지는 29기 **모집 전에만** 노출합니다. 모집이 시작되면 노출하지 않습니다.
- 모집이 시작되면 직군 카드의 [자세히 보기]가 [지원하기]로 바뀌고, 누르면 그리팅 화면으로 이동합니다.
- [29기 모집 알림 신청하기] 버튼은 구글 폼으로 연결합니다.
- 상단 배너: 29기 브랜딩 이미지, 문구 텍스트 및 컬러 변경.

구현:

| 항목 | 위치 |
| --- | --- |
| 주소 | `/recruit/pm`, `/recruit/design`, `/recruit/web`, `/recruit/mobile`, `/recruit/server`, `/recruit/ai-native` |
| 페이지 | `pages/recruit/[job].tsx` (모집 안내는 `pages/recruit/index.tsx`로 옮김) |
| 본문 | `components/recruit/JobDetail` |
| 문구 | `database/recruitJobs.ts` (Figma 글자를 그대로 옮김) |

- 모집 전(`PRE`)이 아니면 `/recruit`로 돌려보냅니다. 상태를 방문자 시계로 판단하므로 페이지 자체는 빌드에 포함됩니다.
- 검색 결과에 올리지 않습니다(`noindex`). sitemap에도 넣지 않았습니다.
- 모집 후(`POST`)의 직군 카드는 예전처럼 뒤집혀서 상세를 보여 줍니다.
- 소개 카드의 캐릭터는 시안 그림 대신 기존 `public/assets/icons/yappu_*.svg`를 썼습니다. 표정·장식이 시안과 조금 다릅니다.
- 태블릿·모바일 시안이 없어서 좁은 화면 배치는 다른 페이지의 규칙을 따랐습니다.
- 시안의 오타 "함꼐"(Design JD)는 "함께"로 고쳤습니다.

## 3. 진행 상황 (2026-10-05)

홈 화면 시안: Figma 섹션 `홈(Home)` node `8645:15326`. 화면 폭은 1920 / 834 / 360 세 가지입니다.

| 항목 | 상태 | 비고 |
| --- | --- | --- |
| 29기 색 키 | 완료 | `chemistry_29th_*` |
| 기수·모집 일정 | 완료 | 29기, 2026-10-16 ~ 10-25 (시안의 `10.16(금) - 10.25(일)` 기준) |
| 배너 | 완료 | 1920 / 834 / 360 배경 3종. 세로로 긴 화면에서만 834·360 배경을 씁니다. |
| 01_now | 완료 | 아이콘 6종, 카드 색, 문구(`운영 기수 28기`, `누적 활동회원`) |
| 02_AI Native | 완료 | `components/home/AINativeSection`. 파란 카드 배경은 CSS로 그렸습니다. |
| 05_Executives | 완료 | `components/home/ExecutiveSection`. 프로필 이미지는 아직 없어 빈 자리로 둡니다. |
| 06_recruit | 완료 | `components/common/JoinSection`. 카드 크기·글자·버튼을 시안에 맞췄습니다. |
| nn기 지원하기 FAB | 완료 | 색·그림자 변경. 모집 기간에만 보입니다. |
| footer | 완료 | 카카오 `https`, 표기 "미디움" |
| OG 이미지 | 완료 | `public/assets/images/29th/preview.png` |
| 프로젝트 페이지 | 완료 | 시안의 변경 범위는 상단 배너뿐입니다(브랜딩 이미지, 문구 색). `components/common/Banner`를 바꿔서 프로젝트 목록·상세·story 페이지에 같이 적용됩니다. |
| 모집 안내 페이지 | 완료 | 배너, 직군 카드 6종, 모집일정, 세션 커리큘럼 10개, FAQ 탭, 문의 카드. 아래 "모집 안내 페이지에서 정할 것" 참고 |
| 직군별 인재상 & JD 페이지 | 완료 | 신규 6개. "2-2" 참고 |

### 이미지 출처

Figma `이미지 모음` 섹션(node `8531:5809`)의 프레임을 PNG로 내보낸 뒤 WebP(품질 82)로 바꿨습니다. 그 밖의 화면은 코드로 만듭니다.

| Figma 프레임 | 내보낸 배율 | 파일 (`public/assets/images/29th/`) |
| --- | --- | --- |
| 메인 이미지 타이틀X 1920 / 834 / 360 | 2x / 2x / 3x | `banner_home_pc.webp`, `banner_home_tablet.webp`, `banner_home_mobile.webp` |
| 리쿠르팅 페이지 1920 / 802 / mobile | 2x / 2x / 3x | `recruit_bg.webp`, `recruit_bg_tablet.webp`, `recruit_bg_mo.webp` |
| 프로젝트 페이지 배너 1920 / 834 / 360 | 2x / 2x / 3x | `project_page_pc.webp`, `project_page_tablet.webp`, `project_page_mo.webp` |
| 오픈 그래프 이미지 | 2x → 1200×600으로 축소 | `preview.png` |

`이미지 모음`에서 받지 않은 것:

- `title_pc.png`(배너 타이틀)와 `icons/*.png`(01_now 아이콘 6종)는 Figma가 준 참고 코드와 벡터를 그대로 렌더링해서 만들었습니다. 시안 스크린샷과 대조해 확인했습니다.
- `icons/ai_native_*.svg`(AI Native 카드의 캐릭터 2종)는 해당 레이어에 설정된 SVG 내보내기로 받았습니다.
- `lines.svg`(AI Native 카드의 선 장식)는 배너 시안의 벡터입니다.

### Figma 읽는 방법

Figma 연결(MCP)은 View 좌석의 호출 한도에 걸려 2026-10-05에 막혔습니다. 그 뒤로는 Figma 데스크톱 앱에서 레이어를 선택해 오른쪽 패널의 값(크기, 여백, 글자, 색)을 읽고, Export로 이미지를 받았습니다. 주소 끝의 `node-id`만 바꿔서 열면 해당 레이어가 선택됩니다.

### 모집 안내 페이지에서 정할 것

- **FAQ 직군 탭 내용**: 시안에는 탭 6개(지원 관련, 활동 관련, PM, Designer, Developer, AI Native)만 있고 "지원 관련"에 기존 질문 7개가 그대로 들어 있습니다. 구현은 기존 7개를 주제에 따라 "지원 관련" 4개, "활동 관련" 3개로 나눴고, 직군 탭 4개는 "질문을 준비하고 있어요."만 보여 줍니다. 직군별 질문·답변이 필요합니다.
- **Mobile, AI Native 공고 링크**: `constants/yapp.ts`의 `YAPP_RECRUIT_MOBILE`, `YAPP_RECRUIT_AI_NATIVE`가 전체 공고 주소를 가리킵니다. 나머지 직군 링크도 28기 공고 번호입니다.
- **직군 카드 동작**: 모집 중(`ACTIVE`, `EXTRA`)에는 문구가 [지원하기]이고 누르면 공고로 이동합니다. 모집 전에는 [자세히 보기]이고 누르면 직군별 인재상 & JD 페이지로 이동합니다. 모집 후에는 누르면 카드가 뒤집혀 상세가 보입니다.
- **세션 커리큘럼의 "얍커톤 X goorm"**: 시안은 goorm 로고 이미지입니다. 구현은 글자로 썼습니다.
- **배너 아래 화살표**: 시안에는 카드 아래에 아래쪽 화살표가 있습니다. 구현에는 없습니다.
- **360 시안에 없는 섹션**: 360 시안에는 인재상과 문의 섹션이 없습니다. 구현은 기존처럼 모든 폭에서 보여 줍니다. 문의 카드의 긴 제목은 좁은 화면에서 24px로 줄였습니다.
- **FAQ 행 높이**: 시안 76px, 구현은 기존 그대로(위아래 여백 32px)입니다.

### 시안과 다르게 둔 곳

기존 구현과 맞추려고, 또는 요구사항에 "변경 없음"·"아이콘만"으로 적혀 있어서 그대로 둔 곳입니다. 맞출지 결정이 필요합니다.

- 본문 폭: 시안은 1040px, 구현은 기존 섹션과 같은 1200px입니다. 새로 만든 AI Native·운영진 섹션도 기존 섹션에 맞춰 1200px로 했습니다.
- `01_now` 카드: 시안 508×180, 간격 24px. 구현은 585×195, 간격 32/30px입니다.
- 섹션 높이: 시안은 섹션마다 1200px 화면을 채우지만, 구현은 기존처럼 위아래 여백 160px입니다.
- 상단바: 시안은 1200px 안에 좌우 80px 여백. 구현은 더 넓게 퍼져 있습니다.
- FAB 위치: 시안은 배너 아래에서 31px(360 화면은 35px). 구현은 화면 아래에서 36px 고정입니다.
- 섹션 순서: 1920·834 시안은 project → sponsor, 360 시안은 sponsor → project입니다. 구현은 모든 폭에서 project → sponsor입니다.
- 운영진 섹션 제목: 360 시안에는 제목이 없습니다. 구현은 다른 섹션처럼 제목을 보여 줍니다.
- 후원 문의하기 버튼: 시안은 위아래 여백 12px. 요구사항이 `06_recruit` 버튼만 언급해서 그 버튼만 바꿨습니다.
- AI Native 파란 카드의 구름·반짝이: 시안의 그림 대신 CSS로 비슷하게 그렸습니다.

## 4. 기수 값 교체

요구사항 문서에는 없지만, 기수가 바뀌면 함께 바꿔야 하는 값이 있습니다(기수, 모집 일정, 날짜 문구, 통계, 이미지 경로 등).
목록은 [AGENTS.md](../AGENTS.md)의 "기수를 바꿀 때 고칠 곳"에 있습니다. 29기 개편에서도 그 목록을 전부 처리합니다.

29기에서 추가로 챙길 것:

- OG 이미지: Figma에 1200×600 시안이 있습니다. `public/assets/images/29th/`에 넣고 `database/metaData.ts`의 경로를 바꿉니다.
- 홈 통계는 시안대로 `운영 기수 28기`, `현재 활동 회원 65명`으로 넣었습니다. 29기 기준 숫자가 따로 있으면 바꿉니다.

## 5. 아직 정해지지 않은 것

- 29기 지원 페이지 주소, 직군별 공고 링크, FAQ 노션 주소, 모집 알림 신청 폼 주소 (`constants/yapp.ts`는 28기 링크 그대로입니다)
- 추가 모집 여부 (지금은 없는 것으로 설정)
- 운영진 프로필 이미지 (명단은 시안의 것을 넣었습니다)
- 모집 안내·프로젝트 페이지의 제목·버튼 색
- footer 인스타그램 주소에 추적 파라미터를 넣을지
