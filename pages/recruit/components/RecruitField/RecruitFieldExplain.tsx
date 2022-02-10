import React, { ReactElement } from 'react';
import { FieldNameTypes } from '.';

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
      <div>
        <span>다음과 같은 활동을 합니다</span>
        <span dangerouslySetInnerHTML={{ __html: content1 }} />
      </div>

      <div>
        <span>이런 {fieldName}를 찾습니다</span>
        <span dangerouslySetInnerHTML={{ __html: content2 }} />
      </div>

      <div>
        <span>이런 경험이 있으면 더 좋습니다</span>
        <span dangerouslySetInnerHTML={{ __html: content3 }} />
      </div>
    </div>
  );
}

export default RecruitFieldExplain;
