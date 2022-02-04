import Breakpoints from 'constants/breakpoints';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function RecruitSchedule(): ReactElement {
  return (
    <ScheduleBlock>
      <ScheduleInner>asd</ScheduleInner>
    </ScheduleBlock>
  );
}

const ScheduleBlock = styled.div`
  width: 100%;
`;

const ScheduleInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  padding: 100px 0;
  margin: 0 auto;
  background-color: lightblue;
`;

export default RecruitSchedule;
