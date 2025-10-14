import { JoinSection } from 'components/home';
import {
  FrequentlyAskedQuestions,
  RecruitBanner,
  FindMember,
  RecruitField,
  SessionOverview,
  RecruitSchedule,
} from 'components/recruit';
import Yapp from 'constants/yapp';
import { RECRUIT_ENQUIRY } from 'database/recruit';
import { ReactElement } from 'react';
import styled from 'styled-components';

function RecruitPage(): ReactElement {
  const { title, description, caution } = RECRUIT_ENQUIRY;
  return (
    <Wrapper>
      <RecruitBanner />
      <RecruitField />
      <FindMember />
      <RecruitSchedule />
      <SessionOverview />
      <FrequentlyAskedQuestions />
      <JoinSection
        title={title}
        subTitle={description}
        caution={caution}
        btnText={`채널톡 문의하기`}
        url={Yapp.YAPP_KAKAO}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RecruitPage;
