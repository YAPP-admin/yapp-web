import { createGlobalStyle } from 'styled-components';

const Font = createGlobalStyle`
@font-face {
  font-family: 'Syne-ExtraBold';
  font-weight: 800;
  font-display: swap;
  src: url('/assets/fonts/Syne-ExtraBold.woff2') format('woff2');
}
`;

export default Font;
