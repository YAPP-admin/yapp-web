import { Box } from 'components';
import { RECRUIT_FAQ } from 'database/recruit';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';
import ArrowDown from 'public/assets/icons/arrow_down.svg';

function FrequentlyAskedQuestions(): ReactElement {
  const { faqs, title } = RECRUIT_FAQ;
  const [faqList, setFaqList] = useState(faqs);

  const handleToggleFaq = (subTitle: string) => {
    setFaqList(
      faqList.map((faq) =>
        faq.subTitle === subTitle ? { ...faq, isOpen: !faq.isOpen } : faq,
      ),
    );
  };

  return (
    <SectionTemplate>
      <SectionTitle title={title} />
      <SectionContent>
        {faqList.map(({ subTitle, description, isOpen }) => (
          <FAQBox
            isFullWidth
            backgroundColor="lightestGray"
            key={`faq-${subTitle}`}
          >
            <FAQSubTitle>
              <span>{subTitle}</span>
              <TitleButton
                isOpen={isOpen}
                onClick={() => handleToggleFaq(subTitle)}
              >
                <ArrowDown />
              </TitleButton>
            </FAQSubTitle>
            {isOpen && (
              <FQASubContent
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleButton = styled.button<{ isOpen: boolean }>`
  ${({ isOpen }) => (isOpen ? '' : `transform: rotate(180deg);`)}
  transition: all ease .5s;
`;

const FQASubContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  margin-top: 24px;
  width: 1056px;
`;

export default FrequentlyAskedQuestions;
