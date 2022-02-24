import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { SEO, LayoutWrapper } from 'components';
import GlobalStyle from 'styles/global-styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SEO />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
