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

## 3. 기수 값 교체

요구사항 문서에는 없지만, 기수가 바뀌면 함께 바꿔야 하는 값이 있습니다(기수, 모집 일정, 날짜 문구, 통계, 이미지 경로 등).
목록은 [AGENTS.md](../AGENTS.md)의 "기수를 바꿀 때 고칠 곳"에 있습니다. 29기 개편에서도 그 목록을 전부 처리합니다.

29기에서 추가로 챙길 것:

- OG 이미지: Figma에 1200×600 시안이 있습니다. `public/assets/images/29th/`에 넣고 `database/metaData.ts`의 경로를 바꿉니다.
- 홈 통계의 `운영기수 27기`, `현재 활동 회원 65명`은 28기 때 갱신되지 않은 값입니다. 29기 기준 숫자를 받아서 넣습니다.

## 4. 아직 정해지지 않은 것

- 29기 모집 일정과 지원 페이지 주소
- 운영진 소개 섹션의 이미지와 명단
- AI Native Team 소개 섹션의 문구
- 29기 색상 키 이름, `title`·`button` 색
- footer 인스타그램 주소에 추적 파라미터를 넣을지
