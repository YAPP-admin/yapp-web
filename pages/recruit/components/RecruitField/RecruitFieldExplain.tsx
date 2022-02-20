import { Box, Button } from 'components';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FieldNameTypes } from '.';
import Breakpoints from 'constants/breakpoints';
import media from 'styles/media';

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
    <RecruitFieldWrapper>
      <FieldBox backgroundColor="lightestGrey">
        <SubTitleStyled>
          다음과 같은
          <br /> 활동을 합니다🙌
        </SubTitleStyled>
        <ContentStyled dangerouslySetInnerHTML={{ __html: content1 }} />
      </FieldBox>

      <FieldBox backgroundColor="lightestGrey">
        <SubTitleStyled>
          이런 {fieldName}를<br /> 찾습니다🔎
        </SubTitleStyled>
        <ContentStyled dangerouslySetInnerHTML={{ __html: content2 }} />
      </FieldBox>

      <FieldBox backgroundColor="lightestGrey">
        <SubTitleStyled>
          이런 경험이 있으면
          <br /> 더 좋습니다😊
        </SubTitleStyled>
        <ContentStyled dangerouslySetInnerHTML={{ __html: content3 }} />
      </FieldBox>

      <ButtonBlock>
        <Button
          width={252}
          height={78}
          fontColor="white"
          buttonColor="lightGrey"
          borderColor="lightGrey"
        >
          {fieldName} 지원하기
        </Button>
      </ButtonBlock>
    </RecruitFieldWrapper>
  );
}

const RecruitFieldWrapper = styled.div`
  margin-top: 64px;
  ${media.tablet} {
    padding: 0 22px;
  }
`;

const FieldBox = styled(Box)`
  padding: 32px;
  width: ${Breakpoints.large}px;
  margin-bottom: 32px;
  display: flex;
  &:nth-child(3) {
    margin-bottom: 64px;
  }
  ${media.tablet} {
    width: 100%;
  }
`;

const SubTitleStyled = styled.span`
  ${({ theme }) => theme.textStyle.web.Subtitle}
  width: 371px;
  ${media.tablet} {
    width: 271px;
  }
`;

const ContentStyled = styled.span`
  ${({ theme }) => theme.textStyle.web.Body_1}
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default RecruitFieldExplain;
