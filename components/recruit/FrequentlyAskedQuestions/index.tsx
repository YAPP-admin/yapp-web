import { RECRUIT_FAQ } from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
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
        transition: { duration: 0.5, ease: 'easeOut' },
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
          fontColor="black_100"
          subFontColor="black_50"
        />
        <UnderlineTabs
          tabs={categories}
          currentTab={currentCategory}
          onChange={setCurrentCategory}
          idPrefix={TAB_ID_PREFIX}
          label={title}
          /* 시안: 360 화면에서는 [지원 관련, 활동 관련] / [직군별] 두 줄 */
          mobileBreakAfter={2}
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
          {faqList.map(({ subTitle, description }, index) => {
            /* 같은 질문이 여러 탭에 있어도(예: PM·Designer의 포트폴리오 질문) 따로 여닫히게 탭 이름을 붙인다 */
            const questionKey = `${currentCategory}/${subTitle}`;
            const isOpen = openQuestions.includes(questionKey);
            const answerId = `${TAB_ID_PREFIX}-answer-${currentCategory}-${index}`;

            return (
              <FAQBox key={`faq-${questionKey}`}>
                {/* 질문 줄만 눌러서 여닫는다. 답변을 드래그하거나 답변 속 링크를 눌러도 접히지 않는다 */}
                <FAQSubTitle
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleToggleFaq(questionKey)}
                >
                  <TitleText>{subTitle}</TitleText>
                  <TitleIcon $isOpen={isOpen} aria-hidden>
                    <ArrowButton />
                  </TitleIcon>
                </FAQSubTitle>
                <FAQAnswer id={answerId} $isOpen={isOpen}>
                  <FAQAnswerClip>
                    <FQASubContent
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(description),
                      }}
                    />
                  </FAQAnswerClip>
                </FAQAnswer>
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
  border-bottom: 1px solid ${({ theme }) => theme.palette.black_5};

  ${media.mobile} {
    min-height: 77px;
  }
`;

/* 시안: 질문 한 줄 76px (위아래 20px + 아이콘 36px) */
const FAQSubTitle = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 23px 0;
  text-align: left;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.grey_850};
    outline-offset: -2px;
  }

  ${media.mobile} {
    padding: 24px 0;
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm}
    align-items: flex-start;
  }
`;

const TitleText = styled.span`
  flex: 1;
  min-width: 0;
  word-break: keep-all;
`;

const TitleIcon = styled.span<{ $isOpen: boolean }>`
  display: flex;
  ${({ $isOpen }) => ($isOpen ? `transform: rotate(180deg);` : '')}
  transition: all ease 0.5s;

  ${media.mobile} {
    margin-top: 8px;
    margin-left: 12px;
  }
`;

const ANSWER_TRANSITION = '500ms cubic-bezier(0.25, 0.17, 0.25, 1)';

/*
 * 답변을 여닫을 때 높이까지 부드럽게 바뀌게 한다.
 * height는 0 ↔ auto 사이를 전환할 수 없어서, 격자 줄 높이(0fr ↔ 1fr)를 전환한다.
 */
const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  width: 100%;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  /* 접힌 답변 속 링크에 키보드 초점이 가지 않게 한다. 접힐 때는 다 접힌 뒤에 숨긴다 */
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: grid-template-rows ${ANSWER_TRANSITION},
    opacity ${ANSWER_TRANSITION},
    visibility 0s linear ${({ $isOpen }) => ($isOpen ? '0s' : '500ms')};
`;

const FAQAnswerClip = styled.div`
  min-height: 0;
  overflow: hidden;
`;

const FQASubContent = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.body_md};
  color: ${({ theme }) => theme.palette.black_60};
  padding-bottom: 23px;

  b {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_sm};
    padding-bottom: 24px;

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
