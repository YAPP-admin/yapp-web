import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  ApplyWay,
  Enquiry,
  FrequentlyAskedQuestions,
  RecruitBanner,
  RecruitSchedule,
} from './components';

function RecruitPage(): ReactElement {
  return (
    <Wrapper>
      <RecruitBanner />
      <ApplyWay />
      <RecruitSchedule />
      <FrequentlyAskedQuestions />
      <Enquiry />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RecruitPage;
