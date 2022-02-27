import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { SEO, LayoutWrapper } from 'components';
import GlobalStyle from 'styles/global-styles';
import { useEffect, useRef } from 'react';
import { Router, useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  //@Note 페이지 이동 시에도 항상 스크롤 맨 위 고정
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest',
    });
  }, [asPath]);

  return (
    <div ref={scrollRef}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SEO />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
