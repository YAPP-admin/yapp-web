import { RECRUIT_EXPLAIN_DESIGNER } from 'database/recruit';
import React, { ReactElement } from 'react';
import RecruitFieldExplain from './RecruitFieldExplain';

function RecruitDesigner(): ReactElement {
  return (
    <>
      <RecruitFieldExplain
        fieldName="디자이너"
        explainContents={RECRUIT_EXPLAIN_DESIGNER}
      />
    </>
  );
}

export default RecruitDesigner;
