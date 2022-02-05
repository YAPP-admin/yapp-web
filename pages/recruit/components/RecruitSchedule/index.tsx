import { Box } from 'components';
import { RECRUIT_SCHEDULE } from 'constants/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';

function RecruitSchedule(): ReactElement {
  const { title, schedules } = RECRUIT_SCHEDULE;

  return (
    <SectionTemplate>
      <SectionTitle title={title} />
      <SectionContent>
        {schedules.map(({ subTitle, description }) => (
          <ScheduleBox
            width={278}
            height={193}
            backgroundColor="lightestGray"
            key={`schedule-${subTitle}`}
          >
            <ScheduleSubTitle>{subTitle}</ScheduleSubTitle>
            <ScheduleContent
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </ScheduleBox>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ScheduleBox = styled(Box)`
  padding: 32px;
`;

const ScheduleSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.SubTitle}
  margin-bottom: 4px;
`;

const ScheduleContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  .smallBox {
    margin-top: 16px;
    margin-bottom: 12px;
  }
  .small {
    ${({ theme }) => theme.textStyle.web.Body_2};
  }
`;

export default RecruitSchedule;
