import { Box } from 'components';
import { RECRUIT_FAQ } from 'database/recruit';
import { ArrowDown } from 'public/assets/icons';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate, SectionTitle } from '..';

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
          <FAQBox isFullWidth backgroundColor="grey_50" key={`faq-${subTitle}`}>
            <FAQBoxInner>
              <FAQSubTitle onClick={() => handleToggleFaq(subTitle)}>
                <span>{subTitle}</span>
                <TitleButton isOpen={isOpen}>
                  <ArrowDown />
                </TitleButton>
              </FAQSubTitle>
              {isOpen && (
                <FQASubContent
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </FAQBoxInner>
          </FAQBox>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    padding: 0 22px;
  }
`;

const FAQBox = styled(Box)`
  padding: 0;
  margin-bottom: 24px;
  min-height: 102px;
  height: auto;
  &:last-child {
    margin-bottom: 0;
  }
  ${media.mobile} {
    min-height: 77px;
  }
`;

const FAQBoxInner = styled.div`
  padding: 32px;
  ${media.mobile} {
    padding: 24px;
  }
`;

const FAQSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_Point}
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_Point}
  }
`;

const TitleButton = styled.button<{ isOpen: boolean }>`
  ${({ isOpen }) => (isOpen ? '' : `transform: rotate(180deg);`)}
  transition: all ease .5s;
`;

const FQASubContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  margin-top: 24px;
  width: 1056px;
  ${media.tablet} {
    width: 100%;
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1};
  }
`;

export default FrequentlyAskedQuestions;
