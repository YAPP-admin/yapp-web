import { css, DefaultTheme } from 'styled-components';

/* Based on YAPP Web Design System */

const palette = {
  // Color
  // 삭제 예정
  grey: '#A6A6A6',
  lightGrey: '#D3D3D3',
  lightestGrey: '#F9F9F9',

  // Default
  white: '#FFFFFF',
  black: '#000000',

  // Yellow
  yellow_100: '#FFEFBE',
  yellow_200: '#FFE69A',
  yellow_300: '#FFD866',
  yellow_400: '#FFCB31',
  yellow_500: '#FABB00',
  yellow_600: '#F5A810',

  // Orange
  orange_100: '#FFC9A5',
  orange_200: '#FFB27C',
  orange_300: '#FA9855',
  orange_400: '#F48132',
  orange_500: '#F06C11',
  orange_600: '#DF5E15',

  // Grey
  grey_50: '#F4F7FA',
  grey_100: '#F2F5F8',
  grey_200: '#D7DADD',
  grey_300: '#BCBFC2',
  grey_400: '#A0A3A7',
  grey_500: '#85888C',
  grey_600: '#6A6D70',
  grey_700: '#4F5255',
  grey_800: '#33363A',
  grey_850: '#25282D',
  grey_900: '#181B1F',
  grey_1000: '#07090B',

  // Enterprise
  facebook: '#397DFF',
  kakao: '#FFD866',
  instagram: '#E03AFF',
} as const;

const fontSize = {
  xxxxxxxSmall: '1.2rem',
  xxxxxxSmall: '1.4rem',
  xxxxxSmall: '1.5rem',
  xxxxSmall: '1.6rem',
  xxxSmall: '1.8rem',
  xxSmall: '2.0rem',
  xSmall: '2.2rem',
  small: '2.4rem',
  medium: '2.8rem',
  large: '3.0rem',
  xLarge: '3.2rem',
  xxLarge: '3.4rem',
  xxxLarge: '3.6rem',
  xxxxLarge: '3.8rem',
  xxxxxLarge: '4.0rem',
  xxxxxxLarge: '4.2rem',
  xxxxxxxLarge: '4.8rem',
  xxxxxxxxLarge: '6.0rem',
} as const;

const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
} as const;

const lineHeight = {
  xSmall: '120%',
  small: '130%',
  medium: '140%',
  large: '150%',
  xLarge: '160%',
} as const;

const letterSpacing = {
  xSmall: '-0.02em',
  small: '-0.01em',
  medium: '0',
  large: '0.01em',
  xLarge: '0.02em',
} as const;

const textStyle = {
  mobile: {
    Head: css`
      font-size: ${fontSize.xxxxxxLarge};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.small};
    `,
    Title_1: css`
      font-size: ${fontSize.xxxLarge};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.small};
    `,
    Title_2: css`
      font-size: ${fontSize.large};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Subtitle: css`
      font-size: ${fontSize.small};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.xLarge};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Button_Point: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.small};
    `,
    Button: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.small};
    `,
    Body_Point: css`
      font-size: ${fontSize.xxxSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xLarge};
      letter-spacing: ${letterSpacing.small};
    `,
    Body_Point2: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.medium};
      line-height: 19px; // @Note 모집 분야 개발자 탭에 아래 IOS, Android 텍스트가 Body_point2라고 나와있는데 디자인 시스템에 안나와있고, line-height고 19로 나와있네요 이 부분 나중에 물어보겠습니다!
      letter-spacing: ${letterSpacing.small};
    `,
    Body_1: css`
      font-size: ${fontSize.xxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.large};
      letter-spacing: ${letterSpacing.small};
    `,
    Body_2: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.medium};
    `,
    Body_3: css`
      font-size: ${fontSize.xxxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.medium};
    `,
    Footer_Logo: css`
      font-size: ${fontSize.small};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.medium};
    `,
    NewsCard_Text: css`
      font-size: ${fontSize.xxxxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.xLarge};
    `,
  },
  web: {
    Head: css`
      font-size: ${fontSize.xxxxxxxxLarge};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.medium};
      letter-spacing: ${letterSpacing.medium};
    `,
    Head2: css`
      font-size: ${fontSize.xxxxxxxLarge};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.medium};
      letter-spacing: ${letterSpacing.medium};
    `,
    Title: css`
      font-size: ${fontSize.xxxxxLarge};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.small};
    `,
    Subtitle: css`
      font-size: ${fontSize.xxSmall};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.xLarge};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Subtitle_1: css`
      font-size: 2.6rem;
      font-weight: ${fontWeight.semibold};
      line-height: auto;
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Subtitle_2: css`
      font-size: ${fontSize.xxSmall};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.xLarge};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Button_Point: css`
      font-size: ${fontSize.xxSmall};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.small};
    `,
    Button: css`
      font-size: ${fontSize.xxSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.small};
    `,
    Body_Point: css`
      font-size: ${fontSize.xxxSmall};
      font-weight: ${fontWeight.medium};
      line-height: ${lineHeight.xLarge};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Body_1: css`
      font-size: ${fontSize.xxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.large};
      letter-spacing: ${letterSpacing.small};
    `,
    Body_2: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.medium};
      letter-spacing: ${letterSpacing.medium};
    `,
    Body_3: css`
      font-size: ${fontSize.xxxxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Footer_Logo: css`
      font-size: ${fontSize.xxxLarge};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.medium};
    `,
    Footer_Text: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.large};
      letter-spacing: ${letterSpacing.medium};
    `,
    Category: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.xLarge};
    `,
    Category_Point: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.extraBold};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.xLarge};
    `,
    Copyright_Text: css`
      font-size: ${fontSize.xxxxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.medium};
    `,
    NewsCard_Text: css`
      font-size: ${fontSize.xxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.xLarge};
    `,
    Caption: css`
      font-size: ${fontSize.xxxxxxxSmall};
      font-weight: ${fontWeight.regular};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.xSmall};
    `,
    Body_Text: css`
      font-size: ${fontSize.xxxSmall};
      font-weight: ${fontWeight.semibold};
      line-height: ${lineHeight.medium};
      letter-spacing: ${letterSpacing.medium};
    `,
  },
} as const;

export type PaletteTypes = typeof palette;
export type PaletteKeyTypes = keyof typeof palette;
export type TextStyleTypes = typeof textStyle;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type LineHeightTypes = typeof lineHeight;

const theme: DefaultTheme = {
  palette,
  textStyle,
  fontSize,
  fontWeight,
  lineHeight,
};

export default theme;
