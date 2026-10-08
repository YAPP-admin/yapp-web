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
`;

export default GlobalStyle;
