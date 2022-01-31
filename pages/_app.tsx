import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-styles';
import theme from 'styles/theme';
import media from 'styles/media';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme, ...media }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
