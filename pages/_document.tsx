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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <GoogleAnalyticsScript />
          {/* 폰트 */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />
          {/* 29th 배너 이미지 프리로드 (Banner29th의 배경 선택 조건과 같아야 한다) */}
          <link
            rel="preload"
            as="image"
            href="/assets/images/29th/banner_home_pc.webp"
            media="(min-width: 1201px), (orientation: landscape)"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/images/29th/banner_home_tablet.webp"
            media="(min-width: 834px) and (max-width: 1200px) and (orientation: portrait)"
          />
          <link
            rel="preload"
            as="image"
            href="/assets/images/29th/banner_home_mobile.webp"
            media="(max-width: 833px) and (orientation: portrait)"
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
