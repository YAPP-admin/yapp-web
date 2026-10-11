import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    color-scheme: only light;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    -webkit-tap-highlight-color: transparent; // @Note 모바일에서 클릭했을 때 파란 배경 없애 주는 코드
  }

  html,
  body,
  #__next {
    height: 100%;
    overflow-x:hidden;
  }

  body {
    background-color: #fff;
    color: #000;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none ;
  }


  /* for. chrome, safari, opera, edge */
  .scroll-none::-webkit-scrollbar {
    display: none;
  }

  .scroll-none {
    -ms-overflow-style: none; /* for. internet explorer */
    scrollbar-width: none; /* for. firefox */
  }

  /*
    기기에서 '동작 줄이기'를 켠 방문자에게는 CSS 움직임을 끈다 (등장 효과, 무한 반복, 화면 전환).
    framer-motion으로 만든 움직임은 pages/_app.tsx의 MotionConfig가 같은 설정을 보고 줄인다.
  */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
