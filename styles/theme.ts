import { css, DefaultTheme } from 'styled-components';

/* Based on YAPP Web Design System */

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#A6A6A6',
  lightGray: '#D3D3D3',
};

const fontSize = {
  xxxSmall: '1.5rem',
  xxSmall: '1.6rem',
  xSmall: '1.8rem',
  small: '2.4rem',
  medium: '2.8rem',
  large: '3.0rem',
  xLarge: '3.6rem',
  xxLarge: '4.2rem',
  xxxLarge: '4.8rem',
  xxxxLarge: '6.0rem',
};

const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeight = {
  xSmall: '120%',
  small: '130%',
  medium: '140%',
  large: '150%',
  xLarge: '160%',
};

const textStyle = {
  mobile: {
    Button_Point: css`
      font-size: ${fontSize.xSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xSmall};
    `,
    Button: css`
      font-size: ${fontSize.xxSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xSmall};
    `,
  },
  web: {
    Button_Point: css`
      font-size: ${fontSize.small};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.xSmall};
    `,
    Button: css`
      font-size: ${fontSize.small};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xSmall};
    `,
  },
};

export type PaletteTypes = keyof typeof palette;

const theme: DefaultTheme = {
  palette,
  textStyle,
};

export default theme;
