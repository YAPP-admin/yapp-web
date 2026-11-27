import { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import {
  HACKATHON_FAQ_OPEN_EVENT,
  HACKATHON_SECTION_ID,
} from 'constants/hackathon';
import {
  Br,
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 05_모집안내 — Figma 8964:888(1920) · 8995:12050(834) · 8985:16434(360) */

interface RecruitRow {
  label: string;
  value: ReactNode;
}

const RECRUIT_ROWS: RecruitRow[] = [
  { label: '모집 인원', value: '70명' },
  { label: '모집 기간', value: '2026.11.28 ~ 12.05' },
  {
    label: '지원 방식',
    value: (
      <>
        {/* 시안은 '현장 랜덤 팀 매칭 (4인)'. 팀은 미리 매칭하고 현장에서 공개한다(FAQ에 안내). */}
        개인 지원 / <Br on={['mobile']} />
        랜덤 팀 매칭 (4인)
      </>
    ),
  },
  // 시안 세 장 모두 '선별 방식'이다.
  { label: '선별 방식', value: '지원서 평가 후 선발' },
  // 노션 「일정」 마일스톤 기준(1920 시안과 같음. 834·360 시안은 2026.12.10)
  { label: '합격 발표', value: '2026.12.11' },
  { label: '참가비', value: '무료' },
  { label: '보증금', value: '30,000원' },
];

function Recruit() {
  return (
    <SectionBlock id={HACKATHON_SECTION_ID.recruit}>
      <SectionInner>
        <Content>
          <SectionTitle
            title="모집 안내"
            description={
              <>
                {/* 시안은 '함께할 팀원을 모아 지원해 주세요.' 개인 지원·현장 팀 공개로 바뀌어 고쳤다 */}
                개인으로 지원하면 팀은 현장에서 공개돼요. <Br on={['mobile']} />
                모집 일정과 지원 방법을 확인해 주세요.
              </>
            }
          />
          <Body>
            <Table>
              {RECRUIT_ROWS.map(({ label, value }) => (
                <Row key={label}>
                  <Label>{label}</Label>
                  <Value>{value}</Value>
                </Row>
              ))}
            </Table>
            <PolicyLink
              href={`#${HACKATHON_SECTION_ID.faq}`}
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                window.dispatchEvent(
                  new CustomEvent(HACKATHON_FAQ_OPEN_EVENT, {
                    detail: { topic: 'deposit' },
                  }),
                );
              }}
            >
              보증금·환급 기준 자세히 보기
            </PolicyLink>
          </Body>
        </Content>
      </SectionInner>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding-top: 240px;
  padding-bottom: 240px;
  ${sectionGutter};

  ${media.tablet} {
    padding-top: 160px;
    padding-bottom: 160px;
  }

  ${media.mobile} {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  ${media.mobile} {
    gap: 20px;
  }
`;

/* 왼쪽 라벨 칸(1920·834: 189px 고정, 360: 글자 폭) + 오른쪽 값 칸. 행마다 높이를 맞추려고 grid로 둔다. */
const Table = styled.dl`
  display: grid;
  grid-template-columns: 189px minmax(0, 1fr);
  width: 100%;
  margin: 0;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.grey_100};

  ${media.mobile} {
    grid-template-columns: max-content minmax(0, 1fr);
    border-radius: 16px;
    background-color: ${({ theme }) => theme.palette.grey_25};
  }
`;

/* dt·dd가 grid의 칸이 되도록 묶음 자체는 상자를 만들지 않는다. */
const Row = styled.div`
  display: contents;
`;

const Label = styled.dt`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.grey_600};
  color: ${({ theme }) => theme.palette.white};
  ${hackathonFont(20, 600, '1.5')};
  white-space: nowrap;

  ${Row}:last-child & {
    border-bottom: none;
  }

  ${media.mobile} {
    padding: 20px;
    ${hackathonFont(16, 600, '1.5')};
  }
`;

const Value = styled.dd`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 24px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey_300};
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(20, 500, '1.5')};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${Row}:last-child & {
    border-bottom: none;
  }

  ${media.mobile} {
    padding: 20px;
    ${hackathonFont(16, 500, '1.5')};
  }
`;

const PolicyLink = styled.a`
  color: ${({ theme }) => theme.palette.black_50};
  ${hackathonFont(20, 600, '1.5', -0.4)};
  text-decoration: underline;
  text-underline-position: from-font;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    ${hackathonFont(16, 600, '1.5', -0.4)};
  }
`;

export default Recruit;
