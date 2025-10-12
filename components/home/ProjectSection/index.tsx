import type { ReactElement } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SectionTemplate } from 'components/home';
import { Button, Carousel } from 'components/common';
import { CAROUSEL_DATA } from 'database/home';
import media from 'styles/media';
import SectionTitle from 'components/common/SectionTitle';

function ProjectSection(): ReactElement {
  return (
    <ProjectContainer>
      <SectionTitle
        fontColor="black_100"
        subFontColor="black_60"
        align="center"
        title="YAPP의 서비스들"
        subTitle="YAPP에서 활동하는 구성원인 ‘야뿌’들이 만들어낸 프로젝트들이에요."
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
