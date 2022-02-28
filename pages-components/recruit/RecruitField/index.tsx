import { Box, Button } from 'components';
import { RECRUIT_FIELD_NAMES } from 'database/recruit';
import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { SectionTemplate, SectionTitle } from '..';
import RecruitDesigner from './RecruitDesigner';
import RecruitDeveloper from './RecruitDeveloper';
import RecruitProjectManager from './RecruitProjectManager';

export type FieldNameTypes = '기획자' | '디자이너' | '개발자';

function RecruitField(): ReactElement {
  const [field, setField] = useState<FieldNameTypes>(RECRUIT_FIELD_NAMES[0]);

  const handleClick = (fieldName: FieldNameTypes) => setField(fieldName);

  const printField = () => {
    switch (field) {
      case '기획자':
        return <RecruitProjectManager />;
      case '디자이너':
        return <RecruitDesigner />;
      case '개발자':
        return <RecruitDeveloper />;
    }
  };

  return (
    <SectionTemplate>
      <SectionTitle title="모집 분야" />
      <RecruitFieldNameBox
        width={696}
        height={78}
        backgroundColor="grey_50"
        borderRadius={124}
      >
        {RECRUIT_FIELD_NAMES.map((name) => (
          <RecruitFieldButton
            key={`field-${name}`}
            width={232}
            height={78}
            onClick={() => handleClick(name)}
            fontColor="white"
            borderColor="white"
            isActive={field === name}
          >
            {name}
          </RecruitFieldButton>
        ))}
        <ButtonBackground field={field} />
      </RecruitFieldNameBox>
      {printField()}
    </SectionTemplate>
  );
}

const RecruitFieldNameBox = styled(Box)`
  margin: 0 auto;
  padding: 0;
  display: flex;
  position: relative;
  ${media.mobile} {
    width: 279px;
    height: 43px;
  }
`;

const RecruitFieldButton = styled(Button)<{ isActive: boolean }>`
  z-index: 1000;
  background-color: transparent;
  ${({ isActive }) =>
    isActive
      ? css`
          color: ${({ theme }) => theme.palette.white};
        `
      : css`
          color: ${({ theme }) => theme.palette.grey_700};
        `}
  ${media.mobile} {
    width: 93px;
    height: 43px;
  }
`;

const ButtonBackground = styled.div<{ field: FieldNameTypes }>`
  ${({ field }) => {
    switch (field) {
      case '기획자':
        return css`
          left: 0;
        `;
      case '디자이너':
        return css`
          left: 232px;
          ${media.mobile} {
            left: 93px;
          }
        `;
      case '개발자':
        return css`
          left: 464px;
          ${media.mobile} {
            left: 186px;
          }
        `;
    }
  }};
  width: 232px;
  height: 78px;
  ${media.mobile} {
    width: 93px;
    height: 43px;
  }
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.palette.orange_400};
  border-radius: 124px;
  transition: all 0.2s ease-in-out;
`;

export default RecruitField;
