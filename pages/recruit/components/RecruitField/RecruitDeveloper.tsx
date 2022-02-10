import { RECRUIT_DEVELOPER_FIELD_NAMES } from 'database/recruit';
import React, { ReactElement, useState } from 'react';
import getDeveloperFieldExplain from 'utils/getDeveloperFieldExplain';
import RecruitFieldExplain from './RecruitFieldExplain';

export type DeveloperFieldName = 'iOS' | 'Android' | 'Front-End' | 'Back-End';

function RecruitDeveloper(): ReactElement {
  const [developField, setDevelopField] = useState<DeveloperFieldName>(
    RECRUIT_DEVELOPER_FIELD_NAMES[0],
  );

  const handleClick = (developFieldName: DeveloperFieldName) =>
    setDevelopField(developFieldName);

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

      <RecruitFieldExplain
        fieldName="개발자"
        explainContents={getDeveloperFieldExplain(developField)}
      />
    </div>
  );
}

export default RecruitDeveloper;
