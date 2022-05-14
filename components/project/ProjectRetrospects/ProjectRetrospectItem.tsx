import { Box } from 'components/common';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Retrospect } from 'types/project';

interface Props {
  retrospect: Retrospect;
}

function ProjectRetrospectItem({ retrospect }: Props): ReactElement {
  const { content, field, name } = retrospect;
  return (
    <Container width={585} backgroundColor="grey_50">
      <div className="title">
        <span>{name}</span> / <span>{field}</span>
      </div>

      <div className="content">{content}</div>
    </Container>
  );
}

const Container = styled(Box)`
  min-width: 584px;
  padding: 24px;
  box-sizing: border-box;
  margin-right: 30px;

  margin-bottom: 32px;
  &:nth-child(2n) {
    margin-right: 0;
  }
  ${({ theme }) => theme.textStyle.web.Body_2};
  .title {
    ${({ theme }) => theme.textStyle.web.Subtitle_2}
    margin-bottom:24px;
  }
`;

export default ProjectRetrospectItem;
