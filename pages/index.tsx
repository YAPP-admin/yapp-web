import type { ReactElement } from 'react';
import styled from 'styled-components';
import {
  AnimatedTextSection,
  GridSection,
  NewsSection,
  ProjectSection,
  SponsorSection,
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

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f9f9f9;
`;

export default Home;
