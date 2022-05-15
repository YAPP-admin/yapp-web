import React, { ReactElement } from 'react';
import { Project } from 'types/project';

interface Props {
  otherProjects: Project;
}

function OthersProjectCard({ otherProjects }: Props): ReactElement {
  return <div>OthersProjectCard</div>;
}

export default OthersProjectCard;
