import 'styled-components';
import { PaletteTypes, TextStyleTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteTypes;
    textStyle: TextStyleTypes;
  }

  export interface Media {
    mobile: string;
    tablet: string;
    desktop: string;
    custom: (maxWidth: number) => string;
  }
}
