import type { ReactElement } from 'react';
import {
  AnimatedTextSection,
  GridSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
} from 'components/home';
import Banner27th from 'components/home/IntroSection/Banner27th';

function Home(): ReactElement {
  return (
    <>
      <Banner27th />
      <AnimatedTextSection />
      <GridSection />
      <ProjectSection />
      <NewsSection />
      <SponsorSection />
    </>
  );
}

export default Home;
