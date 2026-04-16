import { ReactElement, useEffect, useState } from 'react';
import {
  AnimatedTextSection,
  GridSection,
  JoinSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
} from 'components/home';
import {
  LINK_BY_STATUS,
  RECRUITING_STATUS,
  RecruitStatus,
} from '../constants/status';
import { HOME_BANNER_BY_STATUS } from 'database/home';
import fs from 'fs';
import path from 'path';
import Banner28th from 'components/home/IntroSection/Banner28th';
import { Medium } from 'types/medium';
import RecuitBtn from 'components/home/RecuitBtn';
import styled from 'styled-components';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'database/medium.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: { data },
  };
}

function Home({ data }: { data: Medium[] }): ReactElement {
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState<RecruitStatus>(RECRUITING_STATUS);

  useEffect(() => {
    setIsMounted(true);
    setStatus(RECRUITING_STATUS());

    const timer = setInterval(() => {
      setStatus(RECRUITING_STATUS());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return <Wrapper />;

  const BannerInfo = HOME_BANNER_BY_STATUS[status];

  return (
    <Wrapper>
      <section id="join-section">
        <Banner28th />
        <AnimatedTextSection />
        <GridSection />
        <ProjectSection />
        <SponsorSection />
      </section>

      <JoinSection
        status={status}
        title={BannerInfo.title}
        subTitle={BannerInfo.subTitle}
        btnText={BannerInfo.buttonName}
        url={LINK_BY_STATUS[status]}
      />

      {status === RecruitStatus.ACTIVE && <RecuitBtn status={status} />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

export default Home;
