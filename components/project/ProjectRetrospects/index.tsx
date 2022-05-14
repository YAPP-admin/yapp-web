import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Retrospect } from 'types/project';
import ProjectRetrospectItem from './ProjectRetrospectItem';

interface Props {
  retrospects: Retrospect[];
}

function ProjectRetrospects({ retrospects }: Props): ReactElement {
  return (
    <Container>
      {retrospects.map((retrospect) => (
        <ProjectRetrospectItem retrospect={retrospect} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 262px;
`;

export default ProjectRetrospects;
