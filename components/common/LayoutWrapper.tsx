import { FloatingButton, Footer, Header } from 'components/common';
// import { IntroSection } from 'components/home';
// import PATH from 'constants/path';
import Router, { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill'; // Safari 에서 smooth 효과 적용

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { asPath } = useRouter();
  const outerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<any>(null);
  // const scrollEventRef = useRef(false);

  const moveToScrollTop = () => {
    smoothscroll.polyfill();
    if (!outerRef.current) return;

    outerRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest',
    });
  };

  const prevPathRef = useRef(asPath);
  /* 페이지별로 떠날 때의 스크롤 위치. 뒤로·앞으로 가기로 돌아오면 그 자리로 되돌린다 */
  const scrollPositionsRef = useRef<Record<string, number>>({});
  const isHistoryMoveRef = useRef(false);

  useEffect(() => {
    /* 페이지는 #__next 안에서 스크롤된다 (브라우저가 위치를 대신 복원해 주지 않는다) */
    const scroller = document.getElementById('__next');

    const saveScrollPosition = (nextPath: string) => {
      if (scroller)
        scrollPositionsRef.current[Router.asPath] = scroller.scrollTop;
      // 홈은 이전 캐러셀 위치가 그려지기 전에 맨 위로 이동한다.
      if (scroller && nextPath.split(/[?#]/)[0] === '/') {
        scroller.scrollTop = 0;
      }
    };

    Router.events.on('routeChangeStart', saveScrollPosition);
    Router.beforePopState(() => {
      isHistoryMoveRef.current = true;
      return true;
    });

    return () => {
      Router.events.off('routeChangeStart', saveScrollPosition);
      Router.beforePopState(() => true);
    };
  }, []);

  //@Note 페이지 이동 시에는 스크롤을 맨 위로, 뒤로·앞으로 가기에서는 보던 자리로
  useEffect(() => {
    /* 직군별 페이지끼리는 탭 전환이라, 보던 위치를 그대로 둔다 */
    const isJobPage = (path: string) => /^\/recruit\/[^/?#]+/.test(path);
    const isJobTabChange = isJobPage(prevPathRef.current) && isJobPage(asPath);
    const isHistoryMove = isHistoryMoveRef.current;
    prevPathRef.current = asPath;
    isHistoryMoveRef.current = false;

    if (isJobTabChange) return;

    const scroller = document.getElementById('__next');
    const savedPosition = scrollPositionsRef.current[asPath];
    const isHome = asPath.split(/[?#]/)[0] === '/';
    if (isHistoryMove && !isHome && scroller && savedPosition !== undefined) {
      scroller.scrollTop = savedPosition;
      return;
    }

    moveToScrollTop();
  }, [asPath]);

  // 랜딩페이지 IntroSection Scroll 이벤트
  // useEffect(() => {
  //   if (asPath === PATH.Home) {
  //     const outerRefCurrent = outerRef.current;
  //     if (!outerRefCurrent) return;
  //     moveToScrollTop();
  //     const wheelAnimationHandler = (e: WheelEvent) => {
  //       e.preventDefault();

  //       if (!scrollEventRef.current) {
  //         scrollEventRef.current = true;
  //         const { deltaY } = e;
  //         if (deltaY > 0) {
  //           contentRef.current.scrollIntoView({
  //             behavior: 'smooth',
  //           });
  //         }

  //         setTimeout(() => {
  //           outerRefCurrent.removeEventListener('wheel', wheelAnimationHandler);
  //         }, 1000);
  //       }
  //     };

  //     outerRefCurrent.addEventListener('wheel', wheelAnimationHandler);
  //     return () => {
  //       outerRefCurrent.removeEventListener('wheel', wheelAnimationHandler);
  //       scrollEventRef.current = false;
  //     };
  //   }
  // }, [asPath]);

  return (
    <div ref={outerRef}>
      {/* {asPath === PATH.Home && <IntroSection />} */}
      <Header />
      <div ref={contentRef}>{children}</div>
      <Footer />
      {/* <FloatingButton /> */}
    </div>
  );
}

export default LayoutWrapper;
