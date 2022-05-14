import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { Retrospect } from 'types/project';
import ProjectRetrospectItem from './ProjectRetrospectItem';

interface Props {
  retrospects: Retrospect[];
}

function ProjectRetrospects({ retrospects }: Props): ReactElement {
  return (
    <Container>
      <Masonry
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {retrospects.map((retrospect) => (
          <ProjectRetrospectItem retrospect={retrospect} />
        ))}
      </Masonry>
    </Container>
  );
}

const Container = styled.div`
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }
`;

export default ProjectRetrospects;
