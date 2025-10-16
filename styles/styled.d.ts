import 'styled-components';
import {
  LineHeightTypes,
  FontSizeTypes,
  FontWeightTypes,
  TextStyleV2Types,
  PaletteTypes,
  TextStyleTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteTypes;
    textStyle: TextStyleTypes;
    textStyleV2: TextStyleV2Types;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    lineHeight: LineHeightTypes;
  }

  export interface Media {
    xSmall: string;
    small: string;
    mobile: string;
    tablet: string;
    desktop: string;
    custom: (maxWidth: number) => string;
  }
}
