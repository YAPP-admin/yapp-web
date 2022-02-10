import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { LayoutWrapper } from 'components';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';
import Main from 'components/Home/Main';
import { SEO, Header, Footer } from 'components';
import PATH from 'constants/path';
function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyle />
      {/* 추후 LayoutWrapper 안에 넣을 예정 */}
      {asPath === PATH.Home && <Main />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
