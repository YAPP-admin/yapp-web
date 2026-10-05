import { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import {
  AINativeSection,
  AnimatedTextSection,
  ExecutiveSection,
  GridSection,
  JoinSection,
  ProjectSection,
  SponsorSection,
} from 'components/home';
import {
  LINK_BY_STATUS,
  RECRUITING_STATUS,
  RecruitStatus,
} from '../constants/status';
import { HOME_BANNER_BY_STATUS } from 'database/home';
import Banner29th from 'components/home/IntroSection/Banner29th';
import RecuitBtn from 'components/home/RecuitBtn';
import styled from 'styled-components';
import media from 'styles/media';

function Home(): ReactElement {
  /*
   * 모집 상태는 방문자의 시계로 정하므로 브라우저에서만 알 수 있다.
   * 상태와 무관한 섹션은 정적 HTML에 그대로 넣고, 상태에 따라 달라지는 부분만 뒤에 그린다.
   */
  const [status, setStatus] = useState<RecruitStatus | null>(null);

  useEffect(() => {
    setStatus(RECRUITING_STATUS());

    const timer = setInterval(() => {
      setStatus(RECRUITING_STATUS());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const BannerInfo = status === null ? null : HOME_BANNER_BY_STATUS[status];

  return (
    <Wrapper>
      <Head>
        {/* 첫 화면 배너 배경 미리 받기 (Banner29th의 배경 선택 조건과 같아야 한다) */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/29th/banner_home_pc.webp"
          media="(min-width: 1201px), (orientation: landscape)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/29th/banner_home_tablet.webp"
          media="(min-width: 834px) and (max-width: 1200px) and (orientation: portrait), (max-width: 833px) and (orientation: portrait) and (min-aspect-ratio: 651/1000)"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/29th/banner_home_mobile.webp"
          media="(max-width: 833px) and (max-aspect-ratio: 13/20)"
        />
      </Head>

      <section id="join-section">
        <Banner29th />
        <AnimatedTextSection />
        <GridSection />
        <AINativeSection />
        {/* 시안: 좁은 화면에서는 후원사가 프로젝트보다 먼저 나온다 */}
        <SwapOnMobile>
          <ProjectSection />
          <SponsorSection />
        </SwapOnMobile>
        <ExecutiveSection />
      </section>

      {status !== null && BannerInfo && (
        <JoinSection
          status={status}
          title={BannerInfo.title}
          subTitle={BannerInfo.subTitle}
          btnText={BannerInfo.buttonName}
          url={LINK_BY_STATUS[status]}
        />
      )}

      {status === RecruitStatus.ACTIVE && <RecuitBtn status={status} />}
    </Wrapper>
  );
}

const SwapOnMobile = styled.div`
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    flex-direction: column-reverse;
  }
`;

const Wrapper = styled.section`
  position: relative;
`;

export default Home;
