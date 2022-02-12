import Breakpoints from 'constants/breakpoints';
import { Media } from 'styled-components';

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

 const { xlarge, large, medium, small } = Breakpoints;

const media: Media = {
  small: mediaQuery(small),
  mobile: mediaQuery(medium),
  tablet: mediaQuery(large),
  desktop: mediaQuery(xlarge),
  custom: mediaQuery,
};

export default media;
