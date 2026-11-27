import {
  HACKATHON_FAQ_OPEN_EVENT,
  HACKATHON_SECTION_ID,
  HackathonFaqTopic,
} from 'constants/hackathon';
import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import {
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 09_FAQ — Figma 8995:12436(1920) · 8995:12329(834) · 8995:12543(360) */

interface FaqItem {
  question: string;
  answer: ReactNode;
  /** 다른 섹션의 링크가 이 질문을 펼쳐 보여 줄 때 쓰는 이름 */
  topic?: HackathonFaqTopic;
}

interface FaqTab {
  label: string;
  items: FaqItem[];
}

const ICON_PATH = '/assets/images/hackathon/faq';
/* 모집 안내 페이지 FAQ와 같은 속도·곡선 */
const ANSWER_TRANSITION = '500ms cubic-bezier(0.25, 0.17, 0.25, 1)';

/*
 * 노션 「구름 얍커톤 기획안」 · 「노쇼비」 · 「일정」과 운영진 답변(합격 메일 발표, AI 계정 미제공,
 * 보증금 당일 환급, 사전 개발 허용)을 바탕으로 쓴 초안이다. 운영진 검토 후 확정한다.
 * '보증금 · 환급' 탭은 노션 「노쇼비」의 신청 페이지 FAQ를 옮겼다. 환급 시점만 운영진 확정(행사 당일)을 따른다.
 */
const FAQ_TABS: FaqTab[] = [
  {
    label: '지원 관련',
    items: [
      {
        question: 'YAPP 회원이 아니어도 지원할 수 있나요?',
        answer:
          '네. YAPP 회원이 아니어도 외부 참가자로 지원할 수 있습니다. 외부 참가자는 개인 단위로 지원하며, 지원서 평가를 거쳐 70명을 선발합니다.',
      },
      {
        question: '팀을 미리 꾸려서 지원할 수 있나요?',
        answer:
          '팀 단위 지원은 받지 않습니다. 모든 참가자는 개인으로 지원하고, 운영진이 YAPP 29기 플레이어와 외부 참가자를 섞어 4인 팀으로 랜덤 매칭하며, 팀은 행사 당일 현장에서 공개합니다.',
      },
      {
        question: '개발자가 아니어도 참여할 수 있나요?',
        answer:
          '네. 직군과 경력에 관계없이 AI를 활용해 바이브 코딩을 할 수 있다면 누구나 지원할 수 있습니다. 기획자, 디자이너도 AI와 함께 직접 서비스를 만들어 볼 수 있습니다.',
      },
      {
        question: '외부 참가자 합격 결과는 언제 발표되나요?',
        answer:
          '2026년 12월 11일(금)에 메일로 안내드립니다. 합격 메일의 안내에 따라 12월 12일(토)까지 보증금을 납부하시면 참가가 확정됩니다.',
      },
    ],
  },
  {
    label: '행사 관련',
    items: [
      {
        question: 'AI 도구는 직접 준비해야 하나요?',
        answer:
          '네. 행사에서는 AI 토큰이나 유료 계정을 제공하지 않습니다. 개인 노트북과 바로 사용할 수 있는 AI 도구는 반드시 준비해 와 주세요. 노트북 충전기도 꼭 챙겨 주세요.',
      },
      {
        question: '궁금한 점은 어디로 문의하면 되나요?',
        answer: 'support@yapp.co.kr로 메일을 보내 주시면 답변드리겠습니다.',
      },
    ],
  },
  {
    label: '제출 · 심사',
    items: [
      {
        question: '무엇을 제출해야 하나요?',
        answer:
          '누구나 접속할 수 있는 웹 서비스 URL을 제출합니다. 본선 발표도 별도 발표 자료 없이 서비스를 시연하며 진행하므로, 따로 자료를 준비하지 않아도 됩니다.',
      },
      {
        question: '주제는 어떻게 정해지나요?',
        answer:
          "사전 공개 키워드 '크리스마스'와 행사 당일 개회식에서 공개하는 키워드, 두 가지를 모두 담은 서비스를 만듭니다. 사전 키워드로 아이디어를 미리 구상해 오셔도 좋습니다.",
      },
      {
        question: '행사 전에 미리 개발해 와도 되나요?',
        answer:
          '네, 미리 코드를 작성해 오셔도 됩니다. 다만 팀은 현장에서 처음 만나는 팀원들과 함께하고, 두 번째 키워드는 행사 당일 현장에서 공개된다는 점을 꼭 고려해 주세요.',
      },
      {
        question: '심사는 어떻게 진행되나요?',
        answer:
          '1차 심사에서 운영진이 제출된 결과물을 검토해 본선 5팀을 선정합니다. 본선 5팀은 서비스를 시연하며 발표하고, 심사위원이 최종 순위를 정합니다.',
      },
      {
        question: '심사 기준은 무엇인가요?',
        answer:
          '주제 적합성, 아이디어 독창성, 구현 완성도, AI 활용 네 가지를 봅니다. 기준별 세부 배점은 확정 후 안내드립니다.',
      },
    ],
  },
  {
    label: '시상 · 혜택',
    items: [
      {
        question: '수상 상품은 무엇인가요?',
        answer:
          '1등 팀에게는 에어팟, 2등 팀에게는 레오폴드 키보드, 3등 팀에게는 버티컬 마우스를 드립니다. 상품은 팀원 모두에게 지급되며, 상위 5팀에게는 특별상으로 YAPP 30기 서류 면제권도 드립니다.',
      },
      {
        question: '특별상은 무엇인가요?',
        answer:
          '특별상은 YAPP 30기 서류 면제권입니다. 본선에 오른 상위 5팀에게 드립니다.',
      },
      {
        question: '수상하지 못해도 받을 수 있는 혜택이 있나요?',
        answer:
          '참가자 모두에게 기념 굿즈와 점심 식사, 저녁 치킨·피자, 간식을 제공합니다. 13:00부터 17:00까지는 멘토에게 막히는 부분을 자유롭게 묻고 네트워킹할 수 있습니다.',
      },
    ],
  },
  {
    label: '보증금 · 환급',
    items: [
      {
        question: '참가비가 있나요? 보증금은 왜 받나요?',
        answer:
          '참가비는 무료입니다. 다만 노쇼를 막고 행사를 원활하게 운영하기 위해 1인 30,000원의 참가 보증금을 받습니다. 행사에 정상적으로 참여하시면 전액 돌려드립니다.',
      },
      {
        question: '보증금은 언제, 어떻게 내나요?',
        answer:
          '12월 11일(금) 합격 메일로 납부 방법을 안내드립니다. 12월 12일(토)까지 보증금을 납부하시면 참가가 확정되고, 이후 팀 구성이 진행됩니다.',
      },
      {
        question: '어떻게 해야 보증금을 돌려받을 수 있나요?',
        topic: 'deposit',
        answer:
          '행사 당일 12월 19일(토) 09:00부터 21:00까지 일정에 끝까지 참여하시면 정상 참여로 인정되어 전액 환급해 드립니다. 정상 참여 여부는 운영진이 출석과 행사 참여를 확인해 판단합니다.',
      },
      {
        question: '보증금은 언제 돌려받나요?',
        answer: '정상 참여가 확인되면 행사 당일 바로 환급해 드립니다.',
      },
      {
        question: '참가를 취소하면 보증금을 돌려받을 수 있나요?',
        topic: 'deposit',
        answer: (
          <>
            취소 시점에 따라 환급 금액이 달라집니다.
            <br />· 12/12(토) 23:59까지: 30,000원 (100%)
            <br />· 12/13(일) ~ 12/16(수): 15,000원 (50%)
            <br />· 12/17(목) ~ 12/19(토): 환급 불가
            <br />
            주최 측 사정으로 행사가 취소되면 전액 환급해 드립니다.
          </>
        ),
      },
      {
        question: '행사 도중에 먼저 나가면 어떻게 되나요?',
        answer:
          '처음부터 끝까지 참여해야 정상 참여로 인정됩니다. 부득이하게 퇴장해야 한다면 운영진에게 미리 알려 주세요. 무단 불참이나 중도 퇴장 시에는 보증금이 환급되지 않을 수 있습니다.',
      },
      {
        question: '갑작스러운 사정으로 참석하지 못하면 어떻게 하나요?',
        answer:
          '질병, 사고 등 불가피한 사유로 참석이 어려우면 운영진에게 알려 주세요. 상황과 증빙자료를 확인한 뒤 환급 여부를 개별 검토합니다.',
      },
      {
        question: '취소 후 예비 합격자가 충원되면 전액 환급되나요?',
        answer:
          '예비 합격자 충원 여부와 관계없이 기본 환급 기준이 적용됩니다. 다만 충원에 따른 비용 감소와 운영상 손실 등을 고려해 환급액이 조정될 수 있습니다.',
      },
    ],
  },
];

const tabId = (tab: number) => `hackathon-faq-tab-${tab}`;
const panelId = (tab: number) => `hackathon-faq-panel-${tab}`;
const answerId = (tab: number, item: number) =>
  `hackathon-faq-answer-${tab}-${item}`;
const itemId = (tab: number, item: number) =>
  `hackathon-faq-item-${tab}-${item}`;

function Faq() {
  const [activeTab, setActiveTab] = useState(0);
  // 시안대로 탭의 첫 질문을 펼쳐 둔다
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  const selectTab = (tab: number) => {
    setActiveTab(tab);
    setOpenItems(new Set([0]));
  };

  const toggleItem = (item: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  /*
   * 다른 섹션의 링크(예: 모집 안내의 보증금·환급 기준)가 해당 질문을 펼치고 그 질문으로 이동한다.
   * 탭이 바뀐 뒤 그려진 질문으로 스크롤해야 해서 이동할 질문을 기억해 두고 렌더 뒤에 스크롤한다.
   */
  const scrollTarget = useRef<string | null>(null);

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const { topic } = (event as CustomEvent<{ topic: HackathonFaqTopic }>)
        .detail;
      const tab = FAQ_TABS.findIndex((t) =>
        t.items.some((item) => item.topic === topic),
      );
      if (tab < 0) return;
      const targets = FAQ_TABS[tab].items.flatMap((item, index) =>
        item.topic === topic ? [index] : [],
      );
      scrollTarget.current = itemId(tab, targets[0]);
      setActiveTab(tab);
      setOpenItems(new Set(targets));
    };
    window.addEventListener(HACKATHON_FAQ_OPEN_EVENT, handleOpen);
    return () =>
      window.removeEventListener(HACKATHON_FAQ_OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!scrollTarget.current) return;
    document
      .getElementById(scrollTarget.current)
      ?.scrollIntoView({ behavior: 'smooth' });
    scrollTarget.current = null;
  }, [activeTab, openItems]);

  const { items } = FAQ_TABS[activeTab];

  return (
    <SectionBlock id={HACKATHON_SECTION_ID.faq}>
      <SectionInner>
        <Content>
          <SectionTitle
            title="자주 묻는 질문"
            description="지원 전 궁금한 내용을 먼저 확인해보세요."
          />
          <TabList role="tablist" aria-label="자주 묻는 질문 분류">
            {FAQ_TABS.map(({ label }, index) => {
              const selected = index === activeTab;
              return (
                <Tab
                  key={label}
                  type="button"
                  role="tab"
                  id={tabId(index)}
                  aria-selected={selected}
                  aria-controls={selected ? panelId(index) : undefined}
                  $selected={selected}
                  onClick={() => selectTab(index)}
                >
                  {label}
                </Tab>
              );
            })}
          </TabList>
          <ItemList
            role="tabpanel"
            id={panelId(activeTab)}
            aria-labelledby={tabId(activeTab)}
          >
            {items.map(({ question, answer }, index) => {
              const open = openItems.has(index);
              return (
                <Item key={question} id={itemId(activeTab, index)}>
                  <QuestionButton
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId(activeTab, index)}
                    onClick={() => toggleItem(index)}
                  >
                    <Question>{question}</Question>
                    <Chevron $open={open}>
                      <Image
                        src={`${ICON_PATH}/chevron_down.svg`}
                        alt=""
                        width={36}
                        height={36}
                        unoptimized
                      />
                    </Chevron>
                  </QuestionButton>
                  <AnswerPanel
                    id={answerId(activeTab, index)}
                    $open={open}
                    aria-hidden={!open}
                  >
                    <AnswerClip>
                      <Answer>{answer}</Answer>
                    </AnswerClip>
                  </AnswerPanel>
                </Item>
              );
            })}
          </ItemList>
        </Content>
      </SectionInner>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding-top: 240px;
  padding-bottom: 120px;
  ${sectionGutter};

  ${media.tablet} {
    padding-top: 160px;
    padding-bottom: 160px;
  }

  ${media.mobile} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

/* 360 시안에서 탭 네 개가 320px 화면을 넘으면 탭 줄만 가로로 넘긴다 */
const TabList = styled.div`
  display: flex;
  gap: 32px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;

/* 밑줄은 Figma에서 안쪽 선이라 탭 높이(48)에 포함된다: 위 8 + 글자 32 + 아래 5 + 선 3 */
const Tab = styled.button<{ $selected: boolean }>`
  flex-shrink: 0;
  margin: 0;
  padding: 8px 0 5px;
  border: 0;
  border-bottom: 3px solid
    ${({ theme, $selected }) =>
      $selected ? theme.palette.grey_850 : 'transparent'};
  background: none;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme, $selected }) =>
    $selected ? theme.palette.grey_850 : theme.palette.grey_400};
  ${({ $selected }) => hackathonFont(20, $selected ? 600 : 500, '1.6', -0.4)};

  ${media.mobile} {
    ${({ $selected }) =>
      hackathonFont(16, $selected ? 600 : 500, '1.6', -0.32)};
  }
`;

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

/* 구분선은 Figma에서 항목 위에 겹친 선이라 높이에 더하지 않는다 */
const Item = styled.li`
  scroll-margin-top: 100px; /* 고정 헤더 60 + 여유 40 */
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.palette.black_5};
`;

const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  text-align: left;
`;

const Question = styled.span`
  flex: 1 0 0;
  min-width: 1px;
  color: ${({ theme }) => theme.palette.black_100};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */
  ${hackathonFont(18, 600, 28.8, -0.36)};

  ${media.mobile} {
    ${hackathonFont(16, 600, 25.6, -0.32)};
  }
`;

/* 열린 상태의 위쪽 화살표(시안 chevron_up)는 아래쪽 화살표를 180도 돌린 모양과 같다 */
const Chevron = styled.span<{ $open: boolean }>`
  display: flex;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  transform: rotate(${({ $open }) => ($open ? 180 : 0)}deg);
  transition: transform ${ANSWER_TRANSITION};
`;

/*
 * 답변 여닫기 애니메이션. 모집 안내 페이지 FAQ(components/recruit/FrequentlyAskedQuestions)와 같은 방식:
 * height는 0 ↔ auto 전환이 안 되므로 격자 줄 높이(0fr ↔ 1fr)를 전환한다.
 * 질문과 답변 사이 8px도 접힐 때 함께 줄어들도록 답변 안쪽 위 여백으로 둔다.
 */
const AnswerPanel = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  /* 다 접힌 뒤에 숨겨 접힌 답변 속 링크에 키보드 초점이 가지 않게 한다 */
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: grid-template-rows ${ANSWER_TRANSITION},
    opacity ${ANSWER_TRANSITION},
    visibility 0s linear ${({ $open }) => ($open ? '0s' : '500ms')};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const AnswerClip = styled.div`
  min-height: 0;
  overflow: hidden;
`;

const Answer = styled.p`
  margin: 0;
  padding-top: 8px;
  color: ${({ theme }) => theme.palette.grey_500};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */
  ${hackathonFont(16, 500, '1.5', -0.36)};
`;

export default Faq;
