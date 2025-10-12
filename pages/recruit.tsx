import { JoinSection } from 'components/home';
import {
  FrequentlyAskedQuestions,
  RecruitBanner,
  // RecruitField,
  SessionOverview,
  RecruitSchedule,
} from 'components/recruit';
import { RECRUIT_ENQUIRY } from 'database/recruit';
import { ReactElement } from 'react';
import styled from 'styled-components';

function RecruitPage(): ReactElement {
  const { title, description } = RECRUIT_ENQUIRY;
  return (
    <Wrapper>
      <RecruitBanner />
      <RecruitSchedule />
      <SessionOverview />
      {/* <RecruitField /> */}
      <FrequentlyAskedQuestions />
      <JoinSection
        title={title}
        subTitle={description}
        btnText={`채널톡 문의하기`}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RecruitPage;
