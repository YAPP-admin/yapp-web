import type { ReactElement } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SectionTitle, SectionTemplate } from 'pages/components';
import { Button, Carousel } from 'components';
import { CAROUSEL_DATA } from 'database/home';

function ProjectSection(): ReactElement {
  return (
    <ProjectContainer>
      <SectionTitle>6개월 협업과 결과물</SectionTitle>
      <Carousel data={CAROUSEL_DATA} />
      <Button
        width={220}
        height={78}
        fontColor="white"
        buttonColor="grey_850"
        onClick={() => Router.push('/project')}
      >
        프로젝트 더보기
      </Button>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(SectionTemplate)`
  padding: 200px 0;
`;

export default ProjectSection;
