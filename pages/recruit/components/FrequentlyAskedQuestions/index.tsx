import { Box } from 'components';
import { RECRUIT_FAQ } from 'constants/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';

function FrequentlyAskedQuestions(): ReactElement {
  const { title, faqs } = RECRUIT_FAQ;

  return (
    <SectionTemplate>
      <SectionTitle title={title} />
      <SectionContent>
        {faqs.map(({ subTitle, description }) => (
          <FAQBox
            isFullWidth
            backgroundColor="lightestGray"
            key={`faq-${subTitle}`}
          >
            <FAQSubTitle>{subTitle}</FAQSubTitle>
            <FQASubContent dangerouslySetInnerHTML={{ __html: description }} />
          </FAQBox>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FAQBox = styled(Box)`
  padding: 32px;
  margin-bottom: 24px;
  min-height: 102px;
  height: auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FAQSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_Point}
  margin-bottom: 24px;
`;

const FQASubContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  width: 1056px;
`;

export default FrequentlyAskedQuestions;
