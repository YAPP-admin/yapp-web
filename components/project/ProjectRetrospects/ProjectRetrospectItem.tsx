import { Badge, Box } from 'components/common';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Retrospect } from 'types/project';

interface Props {
  retrospect: Retrospect;
}

function ProjectRetrospectItem({ retrospect }: Props): ReactElement {
  const { content, field, name } = retrospect;
  return (
    <Container width={585} backgroundColor="grey_50">
      <div className="title">
        <Badge backgroundColor="black_100" typoColor="white_100">
          {field}
        </Badge>
        <span>{name}</span>
      </div>

      <div className="content">
        {content.split('<br />').map((txt, index) => (
          <div key={index}>
            {txt}
            <br />
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled(Box)`
  min-width: 584px;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 32px;

  ${media.tablet} {
    width: auto;
    min-width: auto;
  }

  &:nth-child(2n) {
    margin-right: 0;
  }
  ${({ theme }) => theme.textStyle.web.Body_2};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1};
    margin-bottom: 20px;
  }
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    ${({ theme }) => theme.textStyleV2.resp.subtitle_md}
    margin-bottom:10px;
    ${media.mobile} {
      ${({ theme }) => theme.textStyleV2.resp.subtitle_sm}
      margin-bottom: 10px;
    }
  }

  .content {
    color: ${({ theme }) => theme.palette.black_100};
    ${({ theme }) => theme.textStyleV2.fix.font_15}
    white-space: normal;
  }
`;

export default ProjectRetrospectItem;
