import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { SEO, LayoutWrapper } from 'components/common';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';
import Font from 'styles/fonts';
import * as ga from 'utils/gtag';

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
        <SEO />
        <Font />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
