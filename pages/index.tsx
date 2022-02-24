import type { ReactElement } from 'react';
import styled from 'styled-components';
import {
  AnimatedTextSection,
  GridSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
  SectionTemplate,
} from 'pages/components';

function Home(): ReactElement {
  return (
    <HomeWrapper>
      <AnimatedTextSection />
      <GridSection />
      <ProjectSection />
      <NewsSection />
      <SponsorSection />
    </HomeWrapper>
  );
}

const HomeWrapper = styled(SectionTemplate)`
  background-color: ${({ theme }) => theme.palette.lightestGrey}; ;
`;

export default Home;
