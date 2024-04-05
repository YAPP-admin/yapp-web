import {
  Enquiry,
  FrequentlyAskedQuestions,
  RecruitBanner,
  RecruitField,
  RecruitSchedule,
} from 'components/recruit';
import RecruitOverview from 'components/recruit/RecruitOverview';
import { ReactElement } from 'react';
import styled from 'styled-components';

function RecruitPage(): ReactElement {
  return (
    <Wrapper>
      <RecruitBanner />
      <RecruitOverview />
      <RecruitSchedule />
      <RecruitField />
      <FrequentlyAskedQuestions />
      <Enquiry />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RecruitPage;
