import { Footer, Header } from 'components';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
