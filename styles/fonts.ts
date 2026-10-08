import { createGlobalStyle } from 'styled-components';

const Font = createGlobalStyle`
@font-face {
  font-family: 'Syne-ExtraBold';
  font-weight: 800;
  font-display: swap;
  src: url('/assets/fonts/Syne-ExtraBold.woff2') format('woff2');
}
@font-face {
  font-family: 'Poppins-ExtraBold';
  font-weight: 800;
  font-display: swap;
  src: url('/assets/fonts/Poppins-ExtraBold.ttf');
}
/*
  모집 타이머 숫자 전용. 고정 굵기 Pretendard Bold에서 0~9만 뽑은 파일이다.
  가변 폰트는 글자를 겹친 조각으로 그려서, 글자 테두리(-webkit-text-stroke)를 주면
  조각의 경계선이 글자 안쪽에 보인다. 테두리를 쓰는 숫자만 이 글꼴로 그린다.
*/
@font-face {
  font-family: 'Timer Digits';
  font-weight: 700;
  font-display: swap;
  src: url('/assets/fonts/TimerDigits-Bold.woff2') format('woff2');
  unicode-range: U+30-39;
}
`;

export default Font;
