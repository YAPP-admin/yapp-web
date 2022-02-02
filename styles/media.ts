import { Media } from 'styled-components';

const mediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;

const media: Media = {
  mobile: mediaQuery(375),
  tablet: mediaQuery(834),
  desktop: mediaQuery(1920),
  custom: mediaQuery,
};

export default media;
