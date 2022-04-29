import { Box } from 'components/common';
import { RECRUIT_FAQ } from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
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
          <FAQBox
            onClick={() => handleToggleFaq(subTitle)}
            isFullWidth
            backgroundColor="grey_50"
            key={`faq-${subTitle}`}
          >
            <FAQBoxInner>
              <FAQSubTitle>
                <TitleText>{subTitle}</TitleText>
                <TitleButton isOpen={isOpen}>
                  <ArrowButton />
                </TitleButton>
              </FAQSubTitle>
              {/* {isOpen && ( */}
              <FQASubContent
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
                isOpen={isOpen}
              />
              {/* )} */}
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
  height: auto;
  cursor: pointer;
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
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_Point}
    align-items: flex-start;
  }
`;

const TitleText = styled.span`
  ${media.custom(450)} {
    max-width: 228px;
  }
`;

const TitleButton = styled.button<{ isOpen: boolean }>`
  ${({ isOpen }) => (isOpen ? `transform: rotate(180deg);` : '')}
  transition: all ease .5s;
  ${media.mobile} {
    margin-top: 8px;
    margin-left: 12px;
  }
`;

const FQASubContent = styled.div<{ isOpen: boolean }>`
  ${({ theme }) => theme.textStyle.web.Body_1};
  width: 1056px;
  overflow: hidden;
  transition: all 500ms cubic-bezier(0.25, 0.17, 0.25, 1);
  ${({ isOpen }) =>
    isOpen
      ? css`
          height: auto;
          margin-top: 24px;
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          height: 0px;
        `}
  b {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  ${media.tablet} {
    width: 100%;
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1};
    .br {
      display: none;
    }
  }
`;

const ArrowButton = styled.div`
  background-image: url('/assets/icons/arrow_down.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 20px;
  height: 15px;
  ${media.mobile} {
    width: 20px;
    height: 10px;
  }
`;

export default FrequentlyAskedQuestions;
