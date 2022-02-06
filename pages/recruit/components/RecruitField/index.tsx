import { Box } from 'components';
import { RECRUIT_FIELD } from 'database/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';

function RecruitField(): ReactElement {
  const { title, fields } = RECRUIT_FIELD;

  return (
    <SectionTemplate>
      <SectionTitle title={title} />
      <RecruitFieldNameBox
        width={696}
        height={78}
        backgroundColor="lightestGray"
        borderRadius={124}
      >
        dd
      </RecruitFieldNameBox>
    </SectionTemplate>
  );
}

const RecruitFieldNameBox = styled(Box)`
  margin: 0 auto;
`;

export default RecruitField;
