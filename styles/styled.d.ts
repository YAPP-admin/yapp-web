import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // 아직 디자인 시스템이 완벽히 구현된게 아니므로 any로 처리
    palette: any;
    textStyle: any;
  }

  export interface Media {
    mobile: string;
    tablet: string;
    desktop: string;
    custom: (maxWidth: number) => string;
  }
}
