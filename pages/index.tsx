import type { ReactElement } from 'react';
import {
  AnimatedTextSection,
  GridSection,
  JoinSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
} from 'components/home';
import { IS_RECRUITING, NEXT_GENERATION_RECRUIT_LINK } from 'database/recruit';
import { RECRUIT_BANNER, RECRUIT_BANNER_ACTIVE } from 'database/home';
import fs from 'fs';
import path from 'path';
import Banner27th from 'components/home/IntroSection/Banner27th';
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
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  return (
    <Wrapper>
      {/* FAB 노출 범위 */}
      <section id="join-section">
        <Banner27th />
        <AnimatedTextSection />
        <GridSection />
        <ProjectSection />
        <NewsSection data={data || []} />
        <SponsorSection />
      </section>
      <JoinSection
        title={BannerInfo.title}
        subTitle={BannerInfo.subTitle}
        btnText={BannerInfo.buttonName}
        url={IS_RECRUITING ? undefined : NEXT_GENERATION_RECRUIT_LINK}
      />
      {IS_RECRUITING && <RecuitBtn />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

export default Home;
