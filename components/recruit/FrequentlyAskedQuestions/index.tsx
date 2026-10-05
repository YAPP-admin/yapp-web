import { RECRUIT_FAQ } from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';

import SectionTemplate from '../SectionTemplate';
import SectionTitle from 'components/common/SectionTitle';
import UnderlineTabs, {
  getTabPanelProps,
} from 'components/common/UnderlineTabs';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

const TAB_ID_PREFIX = 'faq';

function FrequentlyAskedQuestions(): ReactElement {
  const { faqs, title, subTitle, categories } = RECRUIT_FAQ;
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

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

  const faqList = faqs.filter(({ category }) => category === currentCategory);

  const handleToggleFaq = (question: string) => {
    setOpenQuestions(
      openQuestions.includes(question)
        ? openQuestions.filter((opened) => opened !== question)
        : [...openQuestions, question],
    );
  };

  return (
    <SectionTemplate>
      <SectionInner>
        <SectionTitle
          title={title}
          subTitle={subTitle}
          fontColor="black"
          subFontColor="black_50"
        />
        <UnderlineTabs
          tabs={categories}
          currentTab={currentCategory}
          onChange={setCurrentCategory}
          idPrefix={TAB_ID_PREFIX}
          label={title}
        />
        <SectionContent
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          {...getTabPanelProps(TAB_ID_PREFIX, categories, currentCategory)}
        >
          {faqList.length === 0 && (
            <EmptyText>질문을 준비하고 있어요.</EmptyText>
          )}
          {faqList.map(({ subTitle, description }) => {
            const isOpen = openQuestions.includes(subTitle);

            return (
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
            );
          })}
        </SectionContent>
      </SectionInner>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionInner = styled.div`
  max-width: 1040px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const EmptyText = styled.p`
  width: 100%;
  margin: 0;
  padding: 32px 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${({ theme }) => theme.textStyleV2.resp.body_md};
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

/* 시안: 질문 한 줄 76px (위아래 20px + 아이콘 36px) */
const FAQBoxInner = styled.div`
  padding: 23px 0;
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
  flex: 1;
  min-width: 0;
  word-break: keep-all;
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
  width: 100%;
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
