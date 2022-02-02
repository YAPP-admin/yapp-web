import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem === 10px
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * { font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;}
  button {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
