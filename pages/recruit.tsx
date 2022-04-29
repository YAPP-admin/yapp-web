import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  ApplyWay,
  Enquiry,
  FrequentlyAskedQuestions,
  RecruitBanner,
  RecruitField,
  RecruitSchedule,
} from 'components/recruit';

function RecruitPage(): ReactElement {
  return (
    <Wrapper>
      <RecruitBanner />
      <ApplyWay />
      <RecruitSchedule />
      <RecruitField />
      <FrequentlyAskedQuestions />
      <Enquiry />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RecruitPage;
