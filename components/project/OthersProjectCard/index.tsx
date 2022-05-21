import Link from 'next/link';
import { OtherProject } from 'pages/project/[...slug]';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Project } from 'types/project';

interface Props {
  otherProjects: OtherProject;
}

function OthersProjectCard({ otherProjects }: Props): ReactElement {
  const { title, thumbnail, tags, url } = otherProjects;

  return (
    <Container href={`${url}`}>
      <ImageBox>
        <Image
          className="image-scale"
          src={thumbnail}
          alt="project-thumbnail"
        />
      </ImageBox>
    </Container>
  );
}

const Container = styled(Link)``;

const ImageBox = styled.div`
  width: 380px;
  height: 213px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    filter: drop-shadow(
      0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
    );
    .image-scale {
      transition: transform 0.5s ease-out;
      transform: scale(1.05);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const ProjectTitle = styled.div``;

const ProjectTags = styled.div``;

export default OthersProjectCard;
