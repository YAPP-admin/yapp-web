import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { LayoutWrapper } from 'components';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';
import IntroSection from 'pages/components/IntroSection';
import { SEO, Header, Footer } from 'components';
import PATH from 'constants/path';
import FloatingButton from 'components/FloatingButton';

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SEO />
        {/* 추후 LayoutWrapper 안에 넣을 예정 */}
        {asPath === PATH.Home && <LandingMain />}

        <LayoutWrapper>
          <Component {...pageProps} />
          <FloatingButton />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
