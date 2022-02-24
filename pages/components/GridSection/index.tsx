import type { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionTemplate } from 'pages/components';
import { AnimatedBox } from 'components';
import { CURRENT_INFO_DATA } from 'database/home';
import media from 'styles/media';

function GridSection(): ReactElement {
  return (
    <GridSectionContainer>
      <SectionTitle>숫자가 말해주는 열정</SectionTitle>
      <GridContainer>
        {CURRENT_INFO_DATA.map(({ title, content }, index) => (
          <AnimatedBox key={index}>
            <>
              <span className="title-text">{title}</span>
              <span className="content-text">{content}</span>
            </>
          </AnimatedBox>
        ))}
      </GridContainer>
    </GridSectionContainer>
  );
}

const GridSectionContainer = styled(SectionTemplate)`
  padding: 200px 0;
`;

const GridContainer = styled.article`
  display: grid;
  row-gap: 32px;
  column-gap: 30px;
  margin-top: 64px;

  grid-template-columns: repeat(3, 1fr);
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default GridSection;
