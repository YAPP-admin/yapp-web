import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { MotionConfig } from 'framer-motion';
import { SEO, LayoutWrapper } from 'components/common';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';
import Font from 'styles/fonts';
import * as ga from 'utils/gtag';
import { PAGE_SEO } from 'database/metaData';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 페이지 별 GA 적용
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <SEO {...(pageProps.seo ?? PAGE_SEO[router.pathname])} />
        <Font />
        {/* 기기에서 '동작 줄이기'를 켠 방문자에게는 이동·확대 효과를 빼고 투명도만 바꾼다 */}
        <MotionConfig reducedMotion="user">
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </MotionConfig>
      </ThemeProvider>
    </>
  );
}

export default App;
