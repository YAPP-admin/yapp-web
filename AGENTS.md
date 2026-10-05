# AGENTS.md

YAPP 공식 홈페이지(`www.yapp.co.kr`) 레포에서 작업하는 에이전트와 기여자를 위한 안내서입니다.
코드에서 바로 읽을 수 있는 내용은 줄이고, 코드만 봐서는 알 수 없는 규칙과 함정을 적었습니다.
스타일 규칙은 [DESIGN.md](DESIGN.md)에, 29기 개편 요구사항은 [docs/29th-renewal.md](docs/29th-renewal.md)에 따로 있습니다.

## 1. 프로젝트 개요

- Next.js 13.5 **Pages Router**, React 18, TypeScript, styled-components 6
- 서버·DB·API 없음. 모든 콘텐츠는 `database/`의 TS/JSON 파일이고, 전 페이지가 정적 생성(SSG)됩니다.
- 패키지 매니저는 **pnpm** (`packageManager: pnpm@10.34.6`). yarn, npm은 쓰지 않습니다.
- 다크모드는 지원하지 않습니다. `color-scheme: only light`로 라이트 화면을 강제합니다.

## 2. 명령어

```bash
pnpm install          # 의존성 설치
pnpm dev              # 개발 서버 (localhost:3000)
pnpm build            # sitemap 생성 후 next build
pnpm start            # 빌드 결과 실행
pnpm lint             # next lint
pnpm exec tsc --noEmit  # 타입 검사
```

- 테스트 코드는 없습니다. 검증은 `tsc`, `lint`, `build`, 그리고 화면 확인으로 합니다.
- `build`는 `scripts/generate-sitemap.mjs`를 먼저 실행해 `public/sitemap.xml`을 만듭니다. 이 파일은 커밋하지 않습니다(`.gitignore`).
- 커밋할 때 `simple-git-hooks`가 `pnpm lint-staged`(eslint --fix, prettier)를 실행합니다.

## 3. 디렉터리 구조

| 경로 | 내용 |
| --- | --- |
| `pages/` | `index`(홈), `recruit/index`, `recruit/[job]`(직군별 인재상 & JD), `project/index`, `project/[...slug]`, `story`(메뉴에서 숨김), `404` |
| `components/common/` | Header, Footer, Banner, ProjectCard, Image, JoinSection, SEO 등 공용 |
| `components/home/` | 홈 섹션: IntroSection(기수별 배너), AnimatedTextSection, GridSection, ProjectSection, SponsorSection, RecuitBtn(FAB) |
| `components/recruit/`, `components/project/` | 각 페이지 전용 컴포넌트 |
| `database/` | `home.ts`, `recruit.ts`, `metaData.ts`(SEO), `contact.ts`, `medium.json`, `projects/<기수>/<슬러그>.json` |
| `constants/` | `yapp.ts`(기수·링크), `status.ts`(모집 일정·상태), `breakpoints.ts`, `path.ts`, `headerMenus.ts` |
| `styles/` | `theme.ts`(palette, textStyleV2), `media.ts`, `global-styles.ts` |
| `public/assets/` | `images/<기수>/`, `project/`(프로젝트 썸네일·본문), `icons/`, `sponsors/`, `lottie/`, `video/` |
| `utils/` | `getAllProjects.ts`, `getImageSize.ts`, `gtag.ts` |

import는 `baseUrl: ./` 기준 절대 경로를 씁니다(`components/common`, `styles/media` 등).

## 4. 개발 가이드

### 스타일·이미지

색, 글자, 반응형, 이미지, 컴포넌트 스타일 작성 규칙은 [DESIGN.md](DESIGN.md)에 있습니다. 화면을 고치기 전에 먼저 읽습니다.

꼭 지킬 것만 추리면:

- 색은 `theme.palette` 키로, 글자는 `theme.textStyleV2`로 씁니다. hex 값을 컴포넌트에 직접 쓰지 않습니다.
- 최소 지원 폭은 **320px**입니다.
- 요청받지 않은 기존 레이아웃·디자인은 건드리지 않습니다.
- `next/image`에는 `sizes`를 지정합니다.
- Prettier: 작은따옴표, 세미콜론, 2칸 들여쓰기, trailing comma `all`, 80자.

### 프로젝트 추가

1. `database/projects/<기수>/<슬러그>.json`을 만듭니다. 타입은 `types/project.ts`의 `Project`입니다.
2. 썸네일은 `public/assets/project/<기수>_thumbnail_<슬러그>.webp`, 본문은 `<기수>_content_<슬러그>_<n>.webp`로 넣습니다.
3. 주소는 파일 경로에서 나옵니다: `/project/<기수>/<슬러그>`. 상세 페이지는 **파일명(슬러그)만으로** 프로젝트를 찾으므로, 기수가 달라도 슬러그가 겹치면 안 됩니다.
4. 회고(`retrospects[].content`)는 HTML 문자열입니다. 문단 사이는 `<br /><br />`, 문단 안 줄바꿈은 `<br />`입니다.
5. 홈 캐러셀에 올리려면 `database/home.ts`의 `CAROUSEL_DATA`에 추가합니다.

sitemap은 `database/projects/*/*.json`을 읽어 자동으로 갱신됩니다.

### SEO

- 페이지별 메타 정보는 `database/metaData.ts`의 `PAGE_SEO`에 있고, `pages/_app.tsx`가 `components/common/SEO.tsx`에 넘깁니다.
- 동적 페이지는 `getStaticProps`에서 `seo` prop을 반환합니다(`pages/project/[...slug].tsx` 참고).
- 대표 주소는 `https://www.yapp.co.kr`입니다(`metaData.ts`의 `siteUrl`). `robots.txt`와 sitemap도 이 주소를 씁니다.
- 새 페이지를 만들면 `PAGE_SEO`와 `scripts/generate-sitemap.mjs`의 정적 경로 목록에 추가합니다.

### 모집 상태

`constants/status.ts`의 날짜 세 개가 모집 상태를 정합니다.

| 상태 | 조건 | 지원 버튼 링크 |
| --- | --- | --- |
| `PRE` | `RECRUITING_START` 이전 | 사전 알림 신청 폼 |
| `ACTIVE` | 시작 ~ `RECRUITING_DEADLINE` | 지원 페이지(`YAPP_RECRUIT_ALL`) |
| `EXTRA` | 마감 ~ `RECRUITING_EXTRA_DEADLINE` | 지원 페이지 |
| `POST` | 그 이후 | 다음 기수 알림 신청 폼 |

- 상태는 방문자 브라우저의 시계로 1초마다 다시 계산합니다. 빌드 시점에 고정되지 않으므로, 마감 뒤에 다시 배포할 필요가 없습니다.
- 홈은 마운트 전에 빈 화면을 그립니다(`pages/index.tsx`의 `isMounted`). 홈 콘텐츠는 서버 렌더링 HTML에 들어가지 않습니다.
- 상태별 문구는 `database/home.ts`의 `HOME_BANNER_BY_STATUS`, `database/recruit.ts`의 `RECRUIT_BANNER_BY_STATUS`에 있습니다.

## 5. 배포 파이프라인

```
PR → YAPP-admin/yapp-web main 머지
   → GitHub Action (git-push-action.yml): build.sh 실행
   → YAPPgit/yapp-web main 에 복사본 푸시
   → Vercel (팀 yappgits-projects, 프로젝트 yapp-web) 빌드·배포
   → www.yapp.co.kr
```

- GitHub의 기본 브랜치는 `develop`이지만, **배포는 `main`에 푸시될 때만** 됩니다. PR은 `main`으로 엽니다.
- `build.sh`는 `cp -R ./yapp-web/*`로 복사합니다. **최상위 점(.) 파일은 배포 레포로 넘어가지 않습니다.** `.eslintrc.json`, `.babelrc`, `.prettierrc`, `.gitignore`가 Vercel 빌드에는 없습니다.
- 그래서 Vercel에 전달해야 하는 설정은 점으로 시작하지 않는 파일(`vercel.json`, `package.json`, `next.config.js`)에 둡니다.
- Vercel 설치 명령은 `vercel.json`의 `pnpm install --frozen-lockfile`입니다. `package.json`을 고치면 `pnpm-lock.yaml`도 같이 커밋해야 빌드가 통과합니다.
- **PR 단계의 빌드 검사가 없습니다.** 빌드가 깨져도 머지한 뒤에야 드러나므로, 머지 전에 로컬에서 확인합니다.
- Vercel 환경 변수는 Vercel에서 관리합니다. `.env*` 파일은 커밋하지 않습니다.

### 머지 전 확인

기본:

```bash
pnpm exec tsc --noEmit && pnpm lint && pnpm build
```

의존성, 빌드 설정, `next.config.js`를 바꿨다면 Vercel과 같은 조건으로 한 번 더 확인합니다.

1. 레포 밖 빈 폴더에 트리를 내보냅니다: `git checkout-index -a --prefix=<폴더>/`
2. 그 폴더에서 최상위 점 파일을 지웁니다(배포 복사본과 같게).
3. `vercel pull --yes --environment=production` 후 `vercel build --prod`를 실행합니다.

배포 뒤에는 Vercel 배포 상태가 `Ready`인지, 운영 사이트에서 바꾼 화면과 `/robots.txt`, `/sitemap.xml`이 열리는지 봅니다. 빌드 로그는 `vercel inspect <배포 URL> --logs`로 봅니다.

## 6. Git·PR 규칙

- 브랜치는 `main`에서 따고, PR은 `YAPP-admin/yapp-web`의 `main`으로 엽니다.
- 커밋 메시지는 **한 줄**입니다: `feat:` / `fix:` / `style:` / `chore:` + 한국어 제목. 본문과 `Co-Authored-By`는 붙이지 않습니다.
  - 예: `fix: 320px 화면에서 프로젝트 카드가 잘리는 문제 수정`
- `.env*`, `.vercel/`, `public/sitemap.xml`, `pnpm-workspace.yaml`은 커밋하지 않습니다.
- PR을 열면 작성자가 자동으로 담당자로 지정됩니다(`auto_assign.yml`).

## 7. 알려진 함정

- **Next 13에 묶여 있습니다.** 14 이상에서만 고쳐진 보안 권고가 남아 있습니다. 16으로 올리려면 `next build --webpack`(커스텀 webpack 설정 때문)과 `images.qualities: [75, 90]` 설정이 필요합니다.
- **레포 안에 중첩된 git worktree에서 `pnpm install`을 그냥 실행하면** 상위 체크아웃의 `pnpm-workspace.yaml`을 따라 올라가 상위 `node_modules`와 lockfile을 덮어쓸 수 있습니다. worktree에서는 `pnpm install --ignore-workspace`를 씁니다.
- 중첩 worktree에서는 모듈 해석이 상위 `node_modules`까지 올라갑니다. worktree에서 `tsc`와 빌드가 통과해도 배포에서는 실패할 수 있으니, 의존성 변경은 레포 밖 복사본에서 확인합니다.
- `pnpm dev` 화면은 headless 브라우저에서 `body{display:none}` 상태로 남는 경우가 있습니다. 자동 화면 확인은 `pnpm build && pnpm start`로 합니다.
- 테스트 서버는 포트로 찾아서 종료합니다(`lsof -iTCP:<포트>`). 프로세스 이름으로 죽이면 자식 프로세스가 옛 빌드를 계속 서비스합니다.
- `_middleware.ts`는 최상위에 있어서 Next 13에서 동작하지 않습니다.
- `story` 페이지는 헤더 메뉴에서 빠져 있지만 주소로는 열리고 sitemap에도 들어 있습니다.

## 8. 기수를 바꿀 때 고칠 곳

기수가 바뀌면 코드에서 함께 바꿔야 하는 값입니다. 디자인 요구사항에는 보통 빠져 있으니 직접 챙깁니다. 

- `constants/yapp.ts`: `YAPP_GENERATION`, 직군별 공고 링크, `YAPP_FAQ_NOTION`, 사전·다음 기수 알림 폼 링크. 알림 폼은 `NEXT_GENERATION_RECRUIT_LINK` 값을 `PREVIOUS_GENERATION_RECRUIT_LINK`로 옮기고, `NEXT`에는 다음 기수 폼을 넣습니다(기수만 올리고 이걸 빼먹으면 모집 전 버튼이 지난 기수 폼으로 연결됩니다).
- `constants/status.ts`: `RECRUITING_START`, `RECRUITING_DEADLINE`, `RECRUITING_EXTRA_DEADLINE`, 화면에 보이는 기간 문구 `RECRUITING_PERIOD_TEXT`. 추가 모집이 없으면 `RECRUITING_EXTRA_DEADLINE`을 마감일과 같게 둡니다.
- 날짜 문구 하드코딩: `database/home.ts`의 `HOME_BANNER_EXTRA`, `database/recruit.ts`의 `RECRUIT_SCHEDULE`
- 문구 하드코딩: `database/recruit.ts`의 `'28기 iOS 추가 모집'`, `database/home.ts`의 배너 제목(기수 컨셉 문구)
- 홈 통계: `database/home.ts`의 `CURRENT_INFO_DATA`(운영 기수, 현재 활동 회원 수 등)
- 기수 이미지: `public/assets/images/<기수>/`를 만들고 `Banner`, `JoinSection`, `RecruitBanner`, `_document.tsx` preload, `database/metaData.ts`의 OG 이미지(현재 `images/28th/preview.png`) 경로를 바꿉니다.
- 기수 색: `styles/theme.ts`에 새 기수 키를 추가하고 사용처를 바꿉니다. 방법은 [DESIGN.md](DESIGN.md)의 "기수 브랜딩 색"에 있습니다.
- 홈 배너 컴포넌트: 기수마다 `BannerNNth.tsx`를 새로 만들고 `pages/index.tsx`에서 교체하는 방식입니다.

## 9. 진행 중인 작업

- **29기 홈페이지 개편**: 요구사항과 코드 대응은 [docs/29th-renewal.md](docs/29th-renewal.md)에 있습니다. 작업 브랜치는 `codex/29th-website`입니다.
