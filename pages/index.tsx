import type { ReactElement } from 'react';
import {
  AnimatedTextSection,
  GridSection,
  JoinSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
} from 'components/home';
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
  return (
    <Wrapper>
      <Banner27th />
      <AnimatedTextSection />
      <GridSection />
      <ProjectSection />
      <NewsSection data={data || []} />
      <SponsorSection />
      <JoinSection />
      <RecuitBtn />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

export default Home;
