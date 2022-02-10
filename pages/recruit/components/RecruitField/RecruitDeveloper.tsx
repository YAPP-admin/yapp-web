import {
  RECRUIT_DEVELOPER_FIELD_NAMES,
  RECRUIT_EXPLAIN_ANDROID_DEVELOPER,
  RECRUIT_EXPLAIN_BACKEND_DEVELOPER,
  RECRUIT_EXPLAIN_FRONTEND_DEVELOPER,
  RECRUIT_EXPLAIN_IOS_DEVELOPER,
} from 'database/recruit';
import React, { ReactElement, useState } from 'react';
import RecruitFieldExplain from './RecruitFieldExplain';

export type DeveloperFieldName = 'iOS' | 'Android' | 'Front-End' | 'Back-End';

function RecruitDeveloper(): ReactElement {
  const [developField, setDevelopField] = useState<DeveloperFieldName>(
    RECRUIT_DEVELOPER_FIELD_NAMES[0],
  );

  const handleClick = (developFieldName: DeveloperFieldName) =>
    setDevelopField(developFieldName);

  const printDevelopField = () => {
    switch (developField) {
      case 'iOS':
        return (
          <RecruitFieldExplain
            fieldName="개발자"
            explainContents={RECRUIT_EXPLAIN_IOS_DEVELOPER}
          />
        );
      case 'Android':
        return (
          <RecruitFieldExplain
            fieldName="개발자"
            explainContents={RECRUIT_EXPLAIN_ANDROID_DEVELOPER}
          />
        );
      case 'Front-End':
        return (
          <RecruitFieldExplain
            fieldName="개발자"
            explainContents={RECRUIT_EXPLAIN_FRONTEND_DEVELOPER}
          />
        );
      case 'Back-End':
        return (
          <RecruitFieldExplain
            fieldName="개발자"
            explainContents={RECRUIT_EXPLAIN_BACKEND_DEVELOPER}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <div>
        {RECRUIT_DEVELOPER_FIELD_NAMES.map((developFieldName) => (
          <button
            key={developFieldName}
            onClick={() => handleClick(developFieldName)}
          >
            {developFieldName}
          </button>
        ))}
      </div>

      {printDevelopField()}
    </div>
  );
}

export default RecruitDeveloper;
