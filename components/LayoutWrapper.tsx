import React, { ReactNode, useEffect, useRef } from 'react';
import { Header, Footer, FloatingButton } from 'components';
import { Router, useRouter } from 'next/router';
import { IntroSection } from 'pages-components/home';
import PATH from 'constants/path';
import siteMetadata from 'database/sitemap';

declare global {
  interface Window {
    gtag: (param1: string, param2: string, param3: object) => void;
  }
}

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
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

  // Google Analytics
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (typeof window === 'object') {
        const { title } = window.document;
        const { href, pathname } = window.location;

        window.gtag('config', `${siteMetadata.analytics.google}`, {
          page_title: title,
          page_location: href,
          page_path: pathname,
        });
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () =>
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
  }, []);

  return (
    <div ref={scrollRef}>
      {asPath === PATH.Home && <IntroSection />}
      <Header />
      {children}
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default LayoutWrapper;
