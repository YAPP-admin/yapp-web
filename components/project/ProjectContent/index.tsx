import Tag from 'components/common/Tag';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Project } from 'types/project';

interface Props {
  project: Project;
}

function ProjectContent({ project }: Props): ReactElement {
  const {
    content,
    deployLink,
    description,
    field,
    generation,
    program,
    tags,
    team,
    thumbnail,
    title,
  } = project;

  return (
    <Container>
      {tags.map((tag) => (
        <Tag label={tag} key={tag} className="tag" />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 100px;
  .tag {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;

export default ProjectContent;
