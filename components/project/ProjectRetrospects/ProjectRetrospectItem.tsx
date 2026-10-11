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
    <Container backgroundColor="black_5" borderRadius={12}>
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

/* 시안: 안쪽 여백 24px, 이름 줄과 본문 사이 10px, 본문 15px·줄 높이 24px */
const Container = styled(Box)`
  width: auto;
  padding: 24px;
  box-sizing: border-box;
  margin-bottom: 16px;

  ${media.mobile} {
    margin-bottom: 14px;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.palette.black_100};
    ${({ theme }) => theme.textStyleV2.resp.subtitle_md};

    ${media.mobile} {
      ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
    }
  }

  .content {
    color: ${({ theme }) => theme.palette.black_100};
    ${({ theme }) => theme.textStyleV2.fix.font_15};
    line-height: 24px;
    white-space: normal;
    word-break: keep-all;
  }
`;

export default ProjectRetrospectItem;
