import { RECRUIT_FAQ } from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';

import SectionTemplate from '../SectionTemplate';
import SectionTitle from 'components/common/SectionTitle';
import { Button } from 'components/common';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function FrequentlyAskedQuestions(): ReactElement {
  const { faqs, title, subTitle } = RECRUIT_FAQ;
  const [faqList, setFaqList] = useState(faqs);

  const { ref, controls, containerVariants } = useScrollAnimation({
    containerVariants: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      },
    },
  });

  const handleToggleFaq = (subTitle: string) => {
    setFaqList(
      faqList.map((faq) =>
        faq.subTitle === subTitle ? { ...faq, isOpen: !faq.isOpen } : faq,
      ),
    );
  };
  return (
    <SectionTemplate>
      <SectionTitle
        title={title}
        subTitle={subTitle}
        fontColor="black"
        subFontColor="black_50"
      />
      <SectionContent
        as={motion.div}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {faqList.map(({ subTitle, description, isOpen }) => (
          <FAQBox
            key={`faq-${subTitle}`}
            onClick={() => handleToggleFaq(subTitle)}
          >
            <FAQBoxInner>
              <FAQSubTitle>
                <TitleText>{subTitle}</TitleText>
                <TitleButton isOpen={isOpen}>
                  <ArrowButton />
                </TitleButton>
              </FAQSubTitle>
              <FQASubContent
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
                isOpen={isOpen}
              />
            </FAQBoxInner>
          </FAQBox>
        ))}
        <Button
          variant="black"
          style={{ width: 'fit-content', marginTop: '32px' }}
        >
          27기 채용 FAQ 바로가기
        </Button>
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FAQBox = styled.section`
  width: 100%;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black_5};
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
  padding: 32px 0;
  ${media.mobile} {
    padding: 24px 0;
  }
`;

const FAQSubTitle = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.body_point_md}
  display: flex;
  justify-content: space-between;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm}
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
  ${({ theme }) => theme.textStyleV2.resp.body_md};
  color: ${({ theme }) => theme.palette.black_60};
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
    ${({ theme }) => theme.textStyleV2.resp.body_sm};
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
