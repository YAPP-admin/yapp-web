import { RECRUIT_EXPLAIN_PROJECT_MANAGER } from 'database/recruit';
import React, { ReactElement } from 'react';
import RecruitFieldExplain from './RecruitFieldExplain';

function RecruitProjectManager(): ReactElement {
  return (
    <RecruitFieldExplain
      fieldName="기획자"
      explainContents={RECRUIT_EXPLAIN_PROJECT_MANAGER}
    />
  );
}

export default RecruitProjectManager;
