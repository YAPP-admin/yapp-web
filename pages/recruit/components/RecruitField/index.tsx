import { Box, Button } from 'components';
import { RECRUIT_FIELD, RECRUIT_FIELD_NAMES } from 'database/recruit';
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
        {RECRUIT_FIELD_NAMES.map((name) => (
          <Button
            key={`field-${name}`}
            width={229}
            height={78}
            fontColor="white"
            buttonColor="black"
            borderColor="white"
          >
            {name}
          </Button>
        ))}
      </RecruitFieldNameBox>
    </SectionTemplate>
  );
}

const RecruitFieldNameBox = styled(Box)`
  margin: 0 auto;
  padding: 0;
`;

export default RecruitField;
