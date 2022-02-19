import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Button, Carousel } from 'components';
import { CAROUSEL_DATA } from 'database/home';
import { SectionTitle } from 'components';

function ProjectSection(): ReactElement {
  return (
    <ProjectContainer>
      <SectionTitle>YAPP의 프로젝트</SectionTitle>
      <Carousel data={CAROUSEL_DATA} />
      <Button width={220} height={78} fontColor="white" buttonColor="grey_850">
        프로젝트 더보기
      </Button>
    </ProjectContainer>
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

const ProjectContainer = styled(ContainerLayout)``;

export default ProjectSection;
