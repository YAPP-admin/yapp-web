import type { ReactElement } from 'react';
import { Box } from 'components';
import styled from 'styled-components';
import media from 'styles/media';
import { CURRENT_INFO_DATA } from 'database/home';
import { SectionTitle } from 'components';

function AnimatedTextSection(): ReactElement {
  return (
    <YappCurrentContainer>
      <SectionTitle>YAPP의 현재</SectionTitle>
      <GridContainer>
        {CURRENT_INFO_DATA.map(({ title, content }, index) => (
          <Box
            className="grid-box"
            width={380}
            height={268}
            backgroundColor="white"
            borderRadius={20}
            key={index}
          >
            <span className="title-text">{title}</span>
            <span className="content-text">{content}</span>
          </Box>
        ))}
      </GridContainer>
    </YappCurrentContainer>
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

const YappCurrentContainer = styled(ContainerLayout)``;

const GridContainer = styled.article`
  display: grid;
  row-gap: 32px;
  column-gap: 30px;

  grid-template-columns: repeat(3, 1fr);
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;

    .title-text {
      ${({ theme }) => theme.textStyle.web.Subtitle}
    }
    .content-text {
      ${({ theme }) => theme.textStyle.web.Head}
    }

    ${media.mobile} {
      width: 335px;
      height: 220px;

      .title-text {
        ${({ theme }) => theme.textStyle.mobile.Subtitle}
      }
      .content-text {
        ${({ theme }) => theme.textStyle.mobile.Head}
      }
    }
  }
`;
export default AnimatedTextSection;
