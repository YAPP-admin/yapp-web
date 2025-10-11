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
      <SectionTitle
        fontColor="black_100"
        subFontColor="black_60"
        align="center"
        title="YAPP 안의 사람들, 그리고 이야기"
        subTitle="야뿌들의 성장 과정, 활동 후기, 밋업 현장과 다양한 이야기를 담고 있어요."
      />
      <Carousel data={CAROUSEL_DATA} />
      <Button
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
