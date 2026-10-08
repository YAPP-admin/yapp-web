# DESIGN.md

YAPP 공식 홈페이지의 스타일 규칙입니다. 색, 글자, 반응형, 이미지, 컴포넌트 스타일 작성법을 다룹니다.
레포 전반의 안내는 [AGENTS.md](AGENTS.md)에 있습니다.

## 1. 원칙

- **라이트 화면만 지원합니다.** `color-scheme: only light`를 `styles/global-styles.ts`의 `:root`와 `pages/_document.tsx`의 메타 태그에 넣어 브라우저의 자동 다크 변환을 막습니다. 다크모드용 색은 만들지 않습니다.
  - 이 선언을 따르는 브라우저(크롬의 자동 다크 테마 등 크로미움의 강제 다크)에서는 라이트 화면 그대로 보입니다. Dark Reader 확장 프로그램은 `darkreader-lock` 메타 태그로 막습니다.
  - 삼성 인터넷의 "웹 콘텐츠에 어두운 화면 모드 강제 적용" 설정은 사이트에서 끌 수 있는 방법이 알려져 있지 않습니다. 이 설정이 선언을 따르는지는 실제 기기에서 확인하지 못했습니다. 따르지 않는 브라우저에서는 배경이 어두워지고 글자가 밝아지므로, 색이 바뀌어도 글자가 읽히게 만듭니다.
  - 강제 다크에서 바뀌는 것과 안 바뀌는 것: CSS로 칠한 배경은 어두워지고 글자색은 밝아집니다. 그림(사진, PNG·WebP)은 그대로 남습니다. 아래 규칙은 모두 여기서 나옵니다. 라이트 화면에서는 어느 쪽으로 만들어도 보이는 결과가 같습니다.
    - **페이지 배경 위의 글자**는 `background-clip: text`로 칠하지 않습니다. 배경과 같이 어두워져 글자가 사라집니다. 그라데이션 글자는 글자색에 `mask-image`를 씌워 만듭니다(`components/home/AnimatedTextSection`).
    - **밝은 그림 위의 어두운 글자**에는 `styles/utils-styles.ts`의 `darkTextOnImage`를 씁니다. 글자색이 밝게 뒤집히면 밝은 그림 위에서 안 보이기 때문에, 색이 뒤집히지 않게 칠합니다(`Banner` 제목, `JoinSection`). 흰 글자와 중간 밝기의 색 글자에는 쓰지 않습니다.
    - **색 바탕 위에 놓는 그림**은 바탕을 투명하게 만듭니다. 바탕색을 그림에 넣어 두면 바탕만 어두워져 네모가 드러납니다(직군 카드의 `job_character_*.webp`).
    - **어두운 색 로고**는 반대로 카드 색 바탕을 그림에 넣어 한 장으로 만듭니다. 투명 로고는 어두워진 카드에 묻힙니다. 후원사 로고는 `public/assets/sponsors/tile_*.webp`를 씁니다. 만드는 방법: 로고 폭의 3배인 정사각형을 카드 색(`#F3F3F4`)으로 채우고 로고를 가운데에 올린 뒤 무손실 WebP로 저장하고, `database/home.ts`의 `SPONSOR_DATA`에 크기와 함께 넣습니다. 세션 카드의 `goorm.png`도 같은 방식입니다(바탕 `#F2F5F8`). 바탕색이 달라지면 안 되므로 이 그림들은 `next/image`에 `unoptimized`를 줍니다.
    - **홈 첫 화면 아래**에는 흰색이 옅어지는 그림 띠를 깔아 둡니다(`Banner29th`). 흰 배경 위라 평소에는 보이지 않고, 강제 다크에서는 밝은 배너가 어두운 배경으로 이어지게 합니다.
  - 확인 방법: 크롬 개발자 도구 Rendering 탭의 "Emulate auto dark mode"를 켭니다. 선언이 있으면 화면이 바뀌지 않아야 합니다. 선언을 지우고 켜면 선언을 따르지 않는 브라우저의 화면을 대략 볼 수 있습니다.
- **최소 지원 폭은 320px입니다.** 고정 폭 요소는 320px에서 잘리지 않는지 확인합니다.
- **요청받지 않은 기존 레이아웃·디자인은 바꾸지 않습니다.** 버그를 고치다가 배지 모양이나 간격까지 손대지 않습니다.
- 디자인 기준은 Figma입니다. 29기 시안은 `YAPP 29기 웹사이트`(file key `zzQ9CQynI9eOYKbuAGXDzQ`, 페이지 `29기` node `8501:2264`)입니다.

## 2. 색

색은 `styles/theme.ts`의 `palette`에 정의하고, 컴포넌트에서는 키로 씁니다. hex 값을 컴포넌트에 직접 쓰지 않습니다.

```tsx
color: ${({ theme }) => theme.palette.grey_850};
```

`database/`의 데이터에서 색을 지정할 때도 키 문자열을 씁니다(`color: 'discovery_28th_red'`). 타입은 `PaletteKeyTypes`입니다.

### 팔레트 구성

| 묶음 | 키 | 용도 |
| --- | --- | --- |
| 기본 | `white`, `black` | 순수 흰색·검정 |
| 흰색 투명도 | `white_100` ~ `white_20` | 어두운 배경 위 글자 |
| 검정 투명도 | `black_100`(`#181B1F`) ~ `black_5` | 본문 글자, 옅은 배경 |
| 회색 | `grey_50` ~ `grey_1000` | 글자, 구분선, 배경 |
| 노랑·주황·파랑 | `yellow_*`, `orange_*`, `blue_*` | 강조색 |
| 외부 서비스 | `facebook`, `kakao`, `instagram` | 문의 버튼 |
| 기수 브랜딩 | `circus_*`(27기), `discovery_28th_*`(28기) | 기수별 컨셉 색 |
| 삭제 예정 | `grey`, `lightGrey`, `lightestGrey` | 새 코드에서 쓰지 않습니다 |

### 기수 브랜딩 색

기수가 바뀌면 이전 기수 키를 지우지 않고, 새 기수 키를 추가한 뒤 사용처를 바꿉니다(27기 `circus_*`가 남아 있는 것과 같은 방식).

28기(Discovery 컨셉) 키와 사용처:

| 키 | 값 | 사용처 |
| --- | --- | --- |
| `discovery_28th_red` | `#FF8038` | 홈 통계 카드, 모집 일정·세션 카드 |
| `discovery_28th_beige` | `#FFEFD3` | 홈 통계 카드, 모집 일정·세션 카드 |
| `discovery_28th_blue` | `#48ADEC` | 홈 통계 카드, 모집 일정·세션 카드, `RecruitSchedule` |
| `discovery_28th_text` (+`_80`, `_50`) | `#54290F` | `RecruitBanner`, `RecuitCard`, `TimeBlock` 글자 |
| `discovery_28th_title` | `#66300F` | `Banner` 제목 |
| `discovery_28th_button` | `#974F08` | `Banner`, `RecruitBanner` 버튼 |

카드 색은 컴포넌트가 아니라 데이터에서 정합니다: `database/home.ts`의 `CURRENT_INFO_DATA`, `database/recruit.ts`의 `SESSION_OVERVIEW`·`RECRUIT_SCHEDULE`.

### 29기 브랜딩 색

29기 개편 전체 요구사항은 [docs/29th-renewal.md](docs/29th-renewal.md)에 있습니다. 디자인 팀이 준 색:

| 용도 | 값 |
| --- | --- |
| 카드 컬러 | `#0099ff`, `#ff8038`, `#f2f5f8` |
| 메인 텍스트 컬러 | `#002859` |

`styles/theme.ts`에 `chemistry_29th_*` 키로 들어 있습니다(컨셉: Play Our CHEMISTRY).

| 29기 키 | 값 | Figma 변수 | 쓰는 곳 |
| --- | --- | --- | --- |
| `chemistry_29th_blue` | `#0099FF` | Main/Blue | 홈 통계 카드, AI Native 카드 |
| `chemistry_29th_orange` | `#FF8038` | Main/Orange | 홈 통계 카드 |
| `chemistry_29th_grey` | `#F2F5F8` | Main/Grey | 홈 통계 카드, AI Native 카드 |
| `chemistry_29th_yellow` | `#FFE97B` | Main/Yellow | 직군별 JD 페이지의 소개 카드 |
| `chemistry_29th_text` | `#002859` | Main/text | 회색 카드 위 글자, 페이지 상단 배너 제목 |
| `chemistry_29th_point` | `#0479EE` | (변수 없음) | 페이지 상단 배너의 설명 문구 |
| `chemistry_29th_date`, `chemistry_29th_date_bg` | `#FF5C00`, `#FFDECC` | (변수 없음) | 세션 커리큘럼 날짜 배지 |

운영진 섹션 배경은 `grey_25`(`#F6F6F6`)입니다.

- 주황·파랑 카드의 글자는 `white_100`, 회색 카드의 글자는 `chemistry_29th_text`입니다(홈 `01_now` 시안에서 확인).
- `#F2F5F8`은 기존 `grey_100`과 같은 값입니다. 그래도 기수 카드 색은 기수 키로 따로 둡니다(다음 기수에 한 번에 바꾸기 위해).
- 28기 키(`discovery_28th_*`)는 이제 어디서도 쓰지 않습니다. 27기 키처럼 팔레트에만 남아 있습니다.

## 3. 글자

### 글꼴

| 글꼴 | 용도 | 불러오는 방식 |
| --- | --- | --- |
| Pretendard | 기본 글꼴 | `pages/_document.tsx`에서 jsDelivr CDN의 `pretendardvariable-dynamic-subset.css`(v1.3.9)를 불러옵니다. 가변 폰트를 글자 묶음으로 나눈 버전이라 화면에 쓰인 글자만 받습니다(홈 기준 약 330KB). 굵기별 전체 파일을 받는 `pretendard.css`(굵기당 약 760KB)로 바꾸지 않습니다. 글꼴 이름은 `Pretendard Variable`입니다. |
| Syne-ExtraBold, Poppins-ExtraBold | 영문 강조 | `styles/fonts.ts`의 `@font-face` |

루트 글자 크기는 `100%`(16px)입니다. `1rem = 16px`로 계산합니다.

### 글자 스타일

새 코드는 `theme.textStyleV2`를 씁니다. 자간은 `-0.02em`, 줄 높이는 `1.6em`이 기본입니다.

```tsx
${({ theme }) => theme.textStyleV2.resp.title1_md};
${media.mobile} {
  ${({ theme }) => theme.textStyleV2.resp.title1_sm};
}
```

`resp`는 화면 크기에 따라 `_md`(데스크톱)와 `_sm`(모바일)을 짝지어 씁니다. 자동으로 바뀌지 않으므로 `media.mobile` 안에서 `_sm`을 직접 지정합니다.

| 키 | `_sm` | `_md` | 굵기 |
| --- | --- | --- | --- |
| `caption` | 12px | 15px | 500 |
| `body` | 16px | 18px | 500 |
| `body_point` | 16px | 18px | 600 |
| `subtitle` | 16px | 20px | 600 |
| `subtitle2` | 20px | 40px | 600 |
| `title1` | 24px | 32px | 700 |
| `title2` | 34px | 40px | 800 |
| `head` | 30px | 48px (`_lg` 56px) | 600 |
| `timer` | 40px | 96px | 700 (줄 높이 `1.2em`) |

`fix`는 화면 크기와 상관없이 고정입니다: `font_12`, `font_14`, `font_15`, `font_16`(굵기 500), `font_18`, `font_20`, `font_24`(굵기 600).

`theme.textStyle`(`web.*`, `mobile.*`)은 이전 디자인 시스템입니다. 일부 컴포넌트에 남아 있지만 새 코드에서는 쓰지 않습니다.

## 4. 반응형

`styles/media.ts`의 쿼리를 씁니다. 모두 **max-width** 기준이라, 기본 스타일이 데스크톱이고 좁은 화면을 덮어쓰는 방식입니다.

| 키 | 적용 범위 | 값의 출처 |
| --- | --- | --- |
| `media.desktop` | 1920px 이하 | `Breakpoints.xlarge` |
| `media.tablet` | 1200px 이하 | `Breakpoints.large` |
| `media.mobile` | 833px 이하 | `Breakpoints.medium` |
| `media.small` | 480px 이하 | `Breakpoints.small` |
| `media.xSmall` | 400px 이하 | `Breakpoints.xSmall` |
| `media.custom(n)` | n px 이하 | 직접 지정 |

- 본문 폭은 `Breakpoints.large`(1200px)입니다. 태블릿 이하에서는 `width: 100%`에 좌우 여백을 줍니다(프로젝트 상세는 태블릿 80px, 모바일 20px).
- 고정 폭 카드에는 좁은 화면용 상한을 둡니다. 예: `ProjectCard`의 `max-width: calc(100vw - 24px)`.
- 확인할 폭: 1920, 1200, 834, 833, 480, 375, 320.

## 5. 이미지

- 콘텐츠 이미지는 **WebP**로 넣습니다. PR에 이미지가 있으면 `Compress Images` 액션이 압축 커밋을 붙입니다. 포크에서 연 PR에는 실행되지 않으므로, 포크로 작업할 때는 미리 압축해서 올립니다.
- 기수별 이미지는 `public/assets/images/<기수>/`에, 프로젝트 이미지는 `public/assets/project/`에 둡니다.
  - 썸네일: `<기수>_thumbnail_<슬러그>.webp`
  - 본문: `<기수>_content_<슬러그>_<n>.webp`. 폭 2080px 이하(본문 폭 1040px의 2배), WebP 품질 82. `<img>`로 원본을 그대로 내려 주므로 큰 PNG를 넣지 않습니다. WebP는 한 변이 16383px까지입니다.
- `next/image`를 쓸 때는 `sizes`를 반드시 지정합니다. 지정하지 않으면 화면 폭 전체 기준으로 큰 이미지를 받거나, 반대로 흐릿한 이미지를 받습니다.
  - 프로젝트 카드: `sizes="(max-width: 833px) 335px, 380px"`
- 썸네일과 캐러셀은 `quality={90}`입니다. 기본값(75)에서는 썸네일 글자가 뭉개집니다.
- 블러 placeholder는 `blurDataURL`이 있을 때만 켜집니다(`components/common/Image`). 값이 없으면 placeholder 없이 그립니다.
- 프로젝트 본문 이미지는 일반 `<img>`입니다. 빌드 때 `utils/getImageSize.ts`가 width/height를 넣어 레이아웃이 밀리지 않게 합니다.
- 배경 이미지는 CSS `background-image`로 넣고, 화면 크기별 파일을 따로 둡니다(`_pc`, `_tablet`, `_mobile` 또는 `_mo`).
- 홈 첫 화면 배너 이미지는 `pages/index.tsx`의 `<Head>`에서 preload 합니다(홈에서만 받도록). 배너 파일을 바꾸면 preload 경로도 같이 바꿉니다.
- 외부 이미지 도메인은 `next.config.js`의 `images`에 등록해야 합니다(현재 `miro.medium.com`만).
- SVG는 `@svgr/webpack`으로 컴포넌트처럼 import 합니다(`public/assets/icons`).

## 6. 컴포넌트 스타일 작성

- styled-components를 쓰고, 스타일 컴포넌트는 같은 파일 아래쪽에 둡니다.
- 폴더 하나에 컴포넌트 하나(`components/<영역>/<이름>/index.tsx`), 영역별 `index.ts`에서 다시 export 합니다.
- DOM으로 넘기지 않을 스타일용 prop은 `$`를 붙입니다(`$visible`). 이전 코드에는 `$` 없는 prop이 남아 있습니다.
- 같은 `index.ts`에서 export 되는 컴포넌트를 `styled(Component)`로 감싸면 순환 import로 빌드가 실패할 수 있습니다(`ProjectCard`에서 `styled(Badge)`가 그랬습니다). 부모 선택자로 스타일을 줍니다.

```tsx
/* 카드가 좁아져도 기수 배지가 눌려서 줄바꿈되지 않도록 */
> div {
  flex-shrink: 0;
}
```

- 전역 초기화: `button`은 `all: unset`, `ul`은 목록 표시와 padding 없음, `a`는 밑줄 없음입니다. 버튼을 새로 만들면 포커스 표시를 직접 넣어야 합니다.
- `html, body, #__next`에 `overflow-x: hidden`이 걸려 있습니다. 가로로 넘친 요소는 스크롤되지 않고 **잘립니다.** 넘침이 눈에 안 띄므로 좁은 폭에서 직접 확인합니다.
- 서버에서 그린 HTML과 브라우저에서 그린 결과가 달라지는 값(현재 시각, 난수, 화면 폭)은 `useEffect` 안에서 정합니다.

## 7. 움직임

- 단순한 등장 효과는 `styles/utils-styles.ts`의 `fadeIn`, `slideIn`, `slideOut` keyframes를 씁니다.
- 스크롤 등장·호버 효과는 `framer-motion`을 씁니다(홈·모집 섹션, FAB). `@react-spring/web`은 코드에서 쓰지 않습니다(`package.json`에만 남아 있습니다). 새 코드에서도 쓰지 않습니다.
- 한 요소에는 등장 효과를 한 번만 줍니다. 섹션이 `useScrollAnimation`으로 자식을 올리면, 그 안의 카드 컴포넌트에는 따로 효과를 넣지 않습니다.
- 높이를 여닫는 효과는 `height: 0 ↔ auto`로는 전환되지 않습니다. 격자 줄 높이(`grid-template-rows: 0fr ↔ 1fr`)를 전환합니다(모집 FAQ 참고).
- 기기의 '동작 줄이기' 설정을 따릅니다. CSS 움직임은 `styles/global-styles.ts`의 `prefers-reduced-motion` 블록이, `framer-motion`은 `pages/_app.tsx`의 `MotionConfig reducedMotion="user"`가 줄입니다. 움직임이 끝나야만 보이는 내용을 만들지 않습니다.
- 캐러셀은 `react-slick`, Lottie는 `lottie-web`입니다.
