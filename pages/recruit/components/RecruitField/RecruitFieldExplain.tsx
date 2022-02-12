import { Box } from 'components';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FieldNameTypes } from '.';
import Breakpoints from 'constants/breakpoints';

interface RecruitFieldExplainProps {
  fieldName: FieldNameTypes;
  explainContents: {
    content1: string;
    content2: string;
    content3: string;
  };
}

function RecruitFieldExplain({
  fieldName,
  explainContents,
}: RecruitFieldExplainProps): ReactElement {
  const { content1, content2, content3 } = explainContents;
  return (
    <div>
      <FieldBox backgroundColor="lightestGray">
        <SubTitleStyled>
          다음과 같은
          <br /> 활동을 합니다🙌
        </SubTitleStyled>
        <ContentStyled dangerouslySetInnerHTML={{ __html: content1 }} />
      </FieldBox>

      <FieldBox backgroundColor="lightestGray">
        <SubTitleStyled>
          이런 {fieldName}를<br /> 찾습니다🔎
        </SubTitleStyled>
        <ContentStyled dangerouslySetInnerHTML={{ __html: content2 }} />
      </FieldBox>

      <FieldBox backgroundColor="lightestGray">
        <SubTitleStyled>
          이런 경험이 있으면
          <br /> 더 좋습니다😊
        </SubTitleStyled>
        <ContentStyled dangerouslySetInnerHTML={{ __html: content3 }} />
      </FieldBox>

      <button>{fieldName} 지원하기</button>
    </div>
  );
}

const FieldBox = styled(Box)`
  padding: 32px;
  width: ${Breakpoints.xlarge}px;
  margin-bottom: 32px;
  display: flex;
`;

const SubTitleStyled = styled.span`
  ${({ theme }) => theme.textStyle.web.Subtitle}
  width: 371px;
`;

const ContentStyled = styled.span`
  ${({ theme }) => theme.textStyle.web.Body_1}
`;

export default RecruitFieldExplain;
