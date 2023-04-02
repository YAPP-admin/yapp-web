import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import media from 'styles/media';
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
          <ProjectRetrospectItem
            key={retrospect.name}
            retrospect={retrospect}
          />
        ))}
      </Masonry>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 230px;
  white-space: pre-wrap;

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

  ${media.tablet} {
    width: auto;
    padding: 0 80px;
    margin-bottom: 168px;
    .my-masonry-grid {
      flex-direction: column;
    }
    .my-masonry-grid_column {
      width: auto !important;
    }
  }

  ${media.mobile} {
    padding: 0 20px;
    margin-bottom: 100px;
  }
`;

export default ProjectRetrospects;
