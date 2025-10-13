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
@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-display: swap;
  src: url('/assets/fonts/PretendardVariable.woff2') format('woff2-variations')
}
`;

export default Font;
