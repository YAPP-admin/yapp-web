import type { ReactElement } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SectionTitle, SectionTemplate } from 'components/home';
import { Button, Carousel } from 'components/common';
import { CAROUSEL_DATA } from 'database/home';
import media from 'styles/media';

function ProjectSection(): ReactElement {
  return (
    <ProjectContainer>
      <SectionTitle>6개월 협업과 결과물</SectionTitle>
      <Carousel data={CAROUSEL_DATA} />
      <StyledButton
        width={176}
        height={65}
        fontColor="white"
        buttonColor="grey_850"
        onClick={() => Router.push('/project')}
      >
        프로젝트 더보기
      </StyledButton>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(SectionTemplate)`
  padding: 200px 0;
`;

const StyledButton = styled(Button)`
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_700};
  }

  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

export default ProjectSection;
