import React, { ReactElement } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { Retrospect } from 'types/project';
import ProjectRetrospectItem from './ProjectRetrospectItem';

interface Props {
  retrospects: Retrospect[];
}

/* 시안: 1920·834 화면 2열, 360 화면 1열 */
const MASONRY_COLUMNS = { default: 2, 833: 1 };

function ProjectRetrospects({ retrospects }: Props): ReactElement {
  return (
    <Container>
      <Masonry
        breakpointCols={MASONRY_COLUMNS}
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

/* 시안: 카드 사이 16px. 카드 줄은 본문보다 좌우 8px씩 넓다 */
const Container = styled.div`
  margin: 0 -8px;
  white-space: pre-wrap;

  .my-masonry-grid {
    display: flex;
    margin-left: -16px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 16px;
    background-clip: padding-box;
  }
`;

export default ProjectRetrospects;
