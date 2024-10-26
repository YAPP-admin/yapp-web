import { FloatingButton, Footer, Header } from 'components/common';
import { IntroSection } from 'components/home';
import PATH from 'constants/path';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill'; // Safari 에서 smooth 효과 적용

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { asPath } = useRouter();
  const outerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<any>(null);
  const scrollEventRef = useRef(false);

  const moveToScrollTop = () => {
    smoothscroll.polyfill();
    if (!outerRef.current) return;

    outerRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest',
    });
  };

  //@Note 페이지 이동 시에도 항상 스크롤 맨 위 고정
  useEffect(() => {
    moveToScrollTop();
  }, [asPath]);

  // 랜딩페이지 IntroSection Scroll 이벤트
  useEffect(() => {
    if (asPath === PATH.Home) {
      const outerRefCurrent = outerRef.current;
      if (!outerRefCurrent) return;
      moveToScrollTop();
      const wheelAnimationHandler = (e: WheelEvent) => {
        e.preventDefault();

        if (!scrollEventRef.current) {
          scrollEventRef.current = true;
          const { deltaY } = e;
          if (deltaY > 0) {
            contentRef.current.scrollIntoView({
              behavior: 'smooth',
            });
          }

          setTimeout(() => {
            outerRefCurrent.removeEventListener('wheel', wheelAnimationHandler);
          }, 1000);
        }
      };

      outerRefCurrent.addEventListener('wheel', wheelAnimationHandler);
      return () => {
        outerRefCurrent.removeEventListener('wheel', wheelAnimationHandler);
        scrollEventRef.current = false;
      };
    }
  }, [asPath]);

  return (
    <div ref={outerRef}>
      {asPath === PATH.Home && <IntroSection />}
      <Header />
      <div ref={contentRef}>{children}</div>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default LayoutWrapper;
