import React, { ReactNode, useEffect, useRef } from 'react';
import { Header, Footer, FloatingButton } from 'components/common';
import { useRouter } from 'next/router';
import { IntroSection } from 'components/home';
import PATH from 'constants/path';
import styled from 'styled-components';

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

  return (
    <Layout ref={scrollRef}>
      {asPath === PATH.Home && <IntroSection />}
      <Header />
      {children}
      <Footer />
      <FloatingButton />
    </Layout>
  );
}

const Layout = styled.div`
  height: 100%;
`;

export default LayoutWrapper;
