import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { LayoutWrapper } from 'components';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';
import Main from 'components/Home/Main';
import { SEO, Header, Footer } from 'components';

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyle />
      {asPath === '/' && <Main />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
