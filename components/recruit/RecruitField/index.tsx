import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';
import { TabMenu } from 'components/common';
import { RECRUIT_FIELD_NAMES } from 'database/recruit';
import RecruitDesigner from './RecruitDesigner';
import RecruitDeveloper from './RecruitDeveloper';
import RecruitProjectManager from './RecruitProjectManager';

export type FieldNameTypes = '기획자' | '디자이너' | '개발자';

function RecruitField(): ReactElement {
  const [field, setField] = useState<FieldNameTypes>(RECRUIT_FIELD_NAMES[0]);

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
      <RecruitFieldNameBox>
        <TabMenu
          tabs={RECRUIT_FIELD_NAMES}
          currentTab={field}
          onClick={setField}
        />
      </RecruitFieldNameBox>
      {printField()}
    </SectionTemplate>
  );
}

const RecruitFieldNameBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default RecruitField;
