import { TabMenu } from 'components/common';
import { RECRUIT_FIELD_NAMES } from 'database/recruit';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';
import RecruitDesigner from './RecruitDesigner';
import RecruitDeveloper from './RecruitDeveloper';
import RecruitProjectManager from './RecruitProjectManager';

export type FieldNameTypes =
  | 'PM'
  | '디자이너'
  | '개발자'
  | 'iOS'
  | 'Android'
  | 'Web'
  | 'Server'
  | 'Flutter';

function RecruitField(): ReactElement {
  const [field, setField] = useState<FieldNameTypes>(RECRUIT_FIELD_NAMES[0]);

  const printField = () => {
    switch (field) {
      case 'PM':
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
