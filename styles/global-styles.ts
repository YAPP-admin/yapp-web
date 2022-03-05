import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  /* @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css')
  }; */

  
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem === 10px
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    -webkit-tap-highlight-color: transparent; // @Note 모바일에서 클릭했을 때 파란 배경 없애 주는 코드
  }

  html,
  body,
  #__next {
    height: 100%;
    overflow-x:hidden;
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
`;

export default GlobalStyle;
