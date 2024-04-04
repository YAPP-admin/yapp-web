import { RECRUIT_EXPLAIN_PROJECT_MANAGER } from 'database/recruit';
import { ReactElement } from 'react';
import RecruitFieldExplain from './RecruitFieldExplain';

function RecruitProjectManager(): ReactElement {
  return (
    <RecruitFieldExplain
      fieldName="PM"
      explainContents={RECRUIT_EXPLAIN_PROJECT_MANAGER}
    />
  );
}

export default RecruitProjectManager;
