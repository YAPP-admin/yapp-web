import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GoogleAnalyticsScript } from 'components/common/GoogleAnalytics';

export default class MyDocument extends Document {
  // Styled-components
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* 라이트 전용: 브라우저 강제 다크모드 변환 방지 */}
          <meta name="color-scheme" content="only light" />
          {/* Dark Reader 확장 프로그램이 색을 바꾸지 않게 한다 */}
          <meta name="darkreader-lock" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <GoogleAnalyticsScript />
          {/*
            폰트: 가변 폰트를 글자 묶음으로 나눈 버전. 화면에 쓰인 글자가 든 묶음만 받는다.
            굵기별 전체 파일(약 760KB씩)을 받는 pretendard.css로 바꾸지 않는다.
          */}
          <link
            rel="preconnect"
            href="https://cdn.jsdelivr.net"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
