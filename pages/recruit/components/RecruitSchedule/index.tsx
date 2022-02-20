import { Box } from 'components';
import Breakpoints from 'constants/breakpoints';
import { RECRUIT_SCHEDULE } from 'database/recruit';
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
            backgroundColor="lightestGrey"
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
  width: ${Breakpoints.large}px;
  justify-content: space-between;
`;

const ScheduleBox = styled(Box)`
  padding: 32px;
`;

const ScheduleSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Subtitle}
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
