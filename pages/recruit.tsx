import { JoinSection } from 'components/home';
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
      <JoinSection
        title={`더 궁금하신 내용이 있거나\n문의 사항이 있으신가요?`}
        subTitle={`리쿠르팅 관련 문의는 카카오톡 채널을 이용해 주세요.\n(페이스북 메시지 및 인스타그램 DM은 받지 않습니다)`}
        btnText={`채널톡 문의하기`}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RecruitPage;
