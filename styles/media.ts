import Breakpoints from 'constants/breakpoints';
import { Media } from 'styled-components';

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

// @Todo: 화면 사이즈 모두 나오면 상수화 예정
const { xlarge, large, medium, small } = Breakpoints;

const media: Media = {
  small: mediaQuery(small),
  mobile: mediaQuery(medium),
  tablet: mediaQuery(large),
  desktop: mediaQuery(xlarge),
  custom: mediaQuery,
};

export default media;
