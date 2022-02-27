import React, { ReactNode } from 'react';
import { Header, Footer, FloatingButton } from 'components';
import { useRouter } from 'next/router';
import IntroSection from 'pages/components/IntroSection';
import PATH from 'constants/path';

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { asPath } = useRouter();

  return (
    <>
      {asPath === PATH.Home && <IntroSection />}
      <Header />
      {children}
      <Footer />
      <FloatingButton />
    </>
  );
}

export default LayoutWrapper;
