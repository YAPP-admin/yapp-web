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

  // White
  white_100: 'rgba(255, 255, 255, 1)',
  white_80: 'rgba(255, 255, 255, 0.8)',
  white_70: 'rgba(255, 255, 255, 0.7)',
  white_50: 'rgba(255, 255, 255, 0.5)',
  white_20: 'rgba(255, 255, 255, 0.2)',

  // Black
  black_100: '#181B1F',
  black_80: 'rgba(24, 27, 31, 0.8)',
  black_70: 'rgba(24, 27, 31, 0.7)',
  black_60: 'rgba(24, 27, 31, 0.6)',
  black_50: 'rgba(24, 27, 31, 0.5)',
  black_40: 'rgba(24, 27, 31, 0.4)',
  black_20: 'rgba(24, 27, 31, 0.2)',
  black_10: 'rgba(0, 0, 0, 0.1)' /* 기준: #000000, 투명도 10% */,
  black_5: 'rgba(24, 27, 31, 0.05)',

  //  27th Branding Colors (Circus Concept)
  circus_red: '#E05748',
  circus_blue: '#837FF3',
  circus_gray: '#E8E8E8',

  // Yellow
  yellow_100: '#FFEFBE',
  yellow_200: '#FFE69A',
  yellow_300: '#FFD866',
  yellow_400: '#FFCB31',
  yellow_500: '#FABB00',
  yellow_600: '#F5A810',

  //blue
  blue_100: '#007CFF',
  blue_200: '#00B5FE',

  // Orange
  orange_100: '#FFC9A5',
  orange_200: '#FFB27C',
  orange_300: '#FA9855',
  orange_400: '#F48132',
  orange_450: '#FF7739',
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

  // v2 design system
  // Fixed Typography
  size_12: '0.75rem',
  size_14: '0.875rem',
  size_15: '0.9375rem',
  size_16: '1rem',
  size_18: '1.125rem',
  size_20: '1.25rem',
  size_24: '1.5rem',

  // Responsive Typography
  timer: {
    sm: '2.5rem',
    md: '6rem',
  },
  caption: {
    sm: '0.75rem',
    md: '0.9375rem',
  },
  body: {
    sm: '1rem',
    md: '1.125rem',
  },
  bodyPoint: {
    sm: '1rem',
    md: '1.125rem',
  },
  subtitle2: {
    sm: '1.25rem',
    md: '2.5rem',
  },
  subtitle: {
    sm: '1rem',
    md: '1.25rem',
  },
  title2: {
    sm: '2.13rem',
    md: '2.5rem',
  },
  title: {
    sm: '1.5rem',
    md: '2rem',
  },
  head: {
    sm: '1.875rem',
    md: '3rem',
    lg: '3.5rem',
  },
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
  // v2 design system
  tight: '1.2em',
  base: '1.6em',
} as const;

const letterSpacing = {
  xSmall: '-0.02em',
  small: '-0.01em',
  medium: '0',
  large: '0.01em',
  xLarge: '0.02em',
  // v2 design system
  base: '-0.02em',
} as const;

const baseTypography = ({
  size,
  weight = 'medium',
  line = 'base',
  spacing = 'base',
}: {
  size: string;
  weight?: keyof typeof fontWeight;
  line?: keyof typeof lineHeight;
  spacing?: keyof typeof letterSpacing;
}) => css`
  font-size: ${size};
  font-weight: ${fontWeight[weight]};
  line-height: ${lineHeight[line]};
  letter-spacing: ${letterSpacing[spacing]};
`;

// v1 typography
const textStyle = {
  mobile: {
    Head: css`
      font-size: ${fontSize.xxxxxxLarge};
      font-weight: ${fontWeight.bold};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.small};
    `,
    Head_2: css`
      font-size: ${fontSize.xxxxxxxLarge};
      font-weight: ${fontWeight.extraBold};
      line-height: ${lineHeight.small};
      letter-spacing: ${letterSpacing.small};
    `,
    Head_3: css`
      font-size: ${fontSize.xLarge};
      font-weight: ${fontWeight.extraBold};
      line-height: ${lineHeight.xSmall};
      letter-spacing: ${letterSpacing.xSmall};
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
    Body_Point3: css`
      font-size: ${fontSize.xxxxxSmall};
      font-weight: ${fontWeight.bold};
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
      font-weight: ${fontWeight.extraBold};
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

// v2 typography
const textStyleV2 = {
  fix: {
    font_12: baseTypography({ size: fontSize.size_12 }),
    font_14: baseTypography({ size: fontSize.size_14 }),
    font_15: baseTypography({ size: fontSize.size_15 }),
    font_16: baseTypography({ size: fontSize.size_16 }),
    font_18: baseTypography({ size: fontSize.size_18, weight: 'semibold' }),
    font_20: baseTypography({ size: fontSize.size_20, weight: 'semibold' }),
    font_24: baseTypography({ size: fontSize.size_24, weight: 'semibold' }),
  },

  resp: {
    timer_sm: baseTypography({
      size: fontSize.timer.sm,
      weight: 'bold',
      line: 'tight',
    }),
    timer_md: baseTypography({
      size: fontSize.timer.md,
      weight: 'bold',
      line: 'tight',
    }),
    caption_sm: baseTypography({ size: fontSize.caption.sm }),
    caption_md: baseTypography({ size: fontSize.caption.md }),
    body_sm: baseTypography({ size: fontSize.body.sm }),
    body_md: baseTypography({ size: fontSize.body.md }),
    body_point_sm: baseTypography({
      size: fontSize.bodyPoint.sm,
      weight: 'semibold',
    }),
    body_point_md: baseTypography({
      size: fontSize.bodyPoint.md,
      weight: 'semibold',
    }),
    subtitle_sm: baseTypography({
      size: fontSize.subtitle.sm,
      weight: 'semibold',
    }),
    subtitle_md: baseTypography({
      size: fontSize.subtitle.md,
      weight: 'semibold',
    }),
    subtitle2_sm: baseTypography({
      size: fontSize.subtitle2.sm,
      weight: 'semibold',
    }),
    subtitle2_md: baseTypography({
      size: fontSize.subtitle2.md,
      weight: 'semibold',
    }),
    title1_sm: baseTypography({ size: fontSize.title.sm, weight: 'bold' }),
    title1_md: baseTypography({ size: fontSize.title.md, weight: 'bold' }),
    title2_sm: baseTypography({
      size: fontSize.title2.sm,
      weight: 'extraBold',
    }),
    title2_md: baseTypography({
      size: fontSize.title2.md,
      weight: 'extraBold',
    }),
    head_sm: baseTypography({ size: fontSize.head.sm, weight: 'semibold' }),
    head_md: baseTypography({ size: fontSize.head.md, weight: 'semibold' }),
    head_lg: baseTypography({ size: fontSize.head.lg, weight: 'semibold' }),
  },
};

export type PaletteTypes = typeof palette;
export type PaletteKeyTypes = keyof typeof palette;
export type TextStyleTypes = typeof textStyle;
export type TextStyleV2Types = typeof textStyleV2;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;
export type LineHeightTypes = typeof lineHeight;

const theme: DefaultTheme = {
  palette,
  textStyle,
  textStyleV2,
  fontSize,
  fontWeight,
  lineHeight,
};

export default theme;
