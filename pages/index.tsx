import type { ReactElement } from 'react';
import {
  AnimatedTextSection,
  GridSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
  SectionTemplate,
} from 'components/home';

function Home(): ReactElement {
  return (
    <>
      <AnimatedTextSection />
      <GridSection />
      <ProjectSection />
      <NewsSection />
      <SponsorSection />
    </>
  );
}

export default Home;
