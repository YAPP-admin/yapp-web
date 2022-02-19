import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { CURRENT_INFO_DATA } from 'database/home';
import { SectionTitle, AnimatedBox } from 'components';

function GridSection(): ReactElement {
  return (
    <GridSectionContainer>
      <SectionTitle>YAPP의 현재</SectionTitle>
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

const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 200px 0;
`;

const GridSectionContainer = styled(ContainerLayout)``;

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
