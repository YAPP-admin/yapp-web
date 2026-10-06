import { type ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Yapp from 'constants/yapp';
import {
  RECRUIT_JOB_SECTION,
  type RecruitJob,
  type RecruitJobTalentItem,
} from 'database/recruitJobs';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

interface JobDetailProps {
  job: RecruitJob;
}

/* 여러 줄이면 줄마다 '-'를 붙이고, 한 문단이면 그대로 보여 준다 */
function Lines({ lines }: { lines: string[] }): ReactElement {
  return (
    <LineList>
      {lines.map((line) => (
        <li key={line}>
          {lines.length > 1 && <span aria-hidden="true">-</span>}
          <span>{line}</span>
        </li>
      ))}
    </LineList>
  );
}

function TalentItem({
  item,
  index,
  numbered,
}: {
  item: RecruitJobTalentItem;
  index: number;
  numbered: boolean;
}): ReactElement {
  return (
    <Group>
      <GroupTitle>
        {numbered ? `${index + 1}. ${item.title}` : item.title}
      </GroupTitle>
      {item.lines && <Lines lines={item.lines} />}
      {item.summary && (
        <Summary>
          <span aria-hidden="true">→</span>
          <span>{item.summary}</span>
        </Summary>
      )}
      {item.children?.map((child) => (
        <SubGroup key={child.title}>
          <SubGroupTitle>{child.title}</SubGroupTitle>
          <Lines lines={child.lines} />
        </SubGroup>
      ))}
    </Group>
  );
}

function JobDetail({ job }: JobDetailProps): ReactElement {
  const { name, description, talent, jd, character } = job;
  const backgroundColor = job.backgroundColor as PaletteKeyTypes;
  const fontColor = job.fontColor as PaletteKeyTypes;

  return (
    <Wrapper>
      <Hero $backgroundColor={backgroundColor} $fontColor={fontColor}>
        <HeroText>
          <HeroName>{name}</HeroName>
          <HeroDescription>{description}</HeroDescription>
          <AlertLink
            href={Yapp.PREVIOUS_GENERATION_RECRUIT_LINK}
            target="_blank"
            rel="noreferrer"
            $backgroundColor={backgroundColor}
            $fontColor={fontColor}
          >
            {Yapp.YAPP_GENERATION}기 모집 알림 신청하기
          </AlertLink>
        </HeroText>
        <Character>
          <Image src={character} alt="" width={304} height={236} unoptimized />
        </Character>
      </Hero>

      <PanelList>
        <Panel>
          <PanelTitle>{RECRUIT_JOB_SECTION.talentTitle}</PanelTitle>
          {talent.intro && <PanelIntro>{talent.intro}</PanelIntro>}
          <GroupList $afterIntro={Boolean(talent.intro)}>
            {talent.items.map((item, index) => (
              <TalentItem
                key={item.title}
                item={item}
                index={index}
                numbered={Boolean(talent.numbered)}
              />
            ))}
          </GroupList>
        </Panel>

        <Panel>
          <PanelTitle>{RECRUIT_JOB_SECTION.jdTitle}</PanelTitle>
          <GroupList $compact>
            {jd.map(({ title, lines }) => (
              <Group key={title}>
                <GroupTitle>{title}</GroupTitle>
                <Lines lines={lines} />
              </Group>
            ))}
          </GroupList>
        </Panel>
      </PanelList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

/* 시안: 1040x236 */
const Hero = styled.section<{
  $backgroundColor: PaletteKeyTypes;
  $fontColor: PaletteKeyTypes;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  min-height: 236px;
  padding: 32px;
  border-radius: 16px;
  color: ${({ theme, $fontColor }) => theme.palette[$fontColor]};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.palette[$backgroundColor]};

  ${media.mobile} {
    padding: 24px;
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* 캐릭터 자리만큼 비워 둔다 */
  max-width: calc(100% - 320px);

  ${media.mobile} {
    max-width: calc(100% - 236px);
  }

  ${media.custom(599)} {
    max-width: 100%;
    /* 좁은 화면에서는 캐릭터가 글 아래 오른쪽에 놓인다 */
    padding-bottom: 72px;
  }
`;

const HeroName = styled.h2`
  margin: 0;
  ${({ theme }) => theme.textStyleV2.fix.font_24};
  font-weight: 700;
`;

/* 시안: 설명은 두 줄 자리를 차지하고, 버튼은 카드 아래쪽에 놓인다 */
const HeroDescription = styled.p`
  min-height: 64px;
  margin: 4px 0 0;
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  white-space: pre-line;
  word-break: keep-all;

  ${media.tablet} {
    white-space: normal;
  }

  ${media.mobile} {
    min-height: 0;
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

/* 밝은 카드(노랑)에서는 어두운 버튼, 그 외에는 흰 버튼에 카드 색 글자 */
const AlertLink = styled.a<{
  $backgroundColor: PaletteKeyTypes;
  $fontColor: PaletteKeyTypes;
}>`
  margin-top: 20px;
  padding: 8px 18px;
  border-radius: 99px;
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  font-weight: 700;
  ${({ theme, $backgroundColor, $fontColor }) =>
    $fontColor === 'white_100'
      ? `
        background-color: ${theme.palette.white_100};
        color: ${theme.palette[$backgroundColor]};
      `
      : `
        background-color: ${theme.palette.grey_800};
        color: ${theme.palette.white_100};
      `}
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

/* 시안: 카드 오른쪽 16px 안쪽, 아래에 붙는 304x236 그림 */
const Character = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0;
  width: 304px;
  height: 236px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${media.mobile} {
    right: 8px;
    width: 228px;
    height: 177px;
  }

  ${media.custom(599)} {
    right: 0;
    width: 152px;
    height: 118px;
  }
`;

const PanelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Panel = styled.section`
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.chemistry_29th_grey};

  ${media.mobile} {
    padding: 24px 20px;
  }
`;

const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const PanelIntro = styled.p`
  margin: 4px 0 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

/* 시안: 제목 아래 20px (소개 문장이 있으면 32px) */
const GroupList = styled.div<{ $afterIntro?: boolean; $compact?: boolean }>`
  --group-gap: ${({ $compact }) => ($compact ? '24px' : '28px')};
  margin-top: ${({ $afterIntro }) => ($afterIntro ? '32px' : '20px')};
`;

/* 시안: 묶음 사이 56px(JD는 48px), 가운데에 구분선 */
const Group = styled.div`
  & + & {
    margin-top: var(--group-gap);
    padding-top: var(--group-gap);
    border-top: 1px solid ${({ theme }) => theme.palette.black_10};
  }
`;

const GroupTitle = styled.h3`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  word-break: keep-all;
`;

const SubGroup = styled.div`
  margin-top: 12px;
`;

const SubGroupTitle = styled.h4`
  margin: 0 0 4px;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  word-break: keep-all;
`;

const LineList = styled.ul`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_600};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  word-break: keep-all;

  /* 줄이 넘어가도 '-' 아래가 아니라 글자 아래에서 시작하게 한다 */
  li {
    display: flex;
    gap: 4px;
  }

  li > span:first-child:not(:only-child) {
    flex-shrink: 0;
  }

  /* 좁은 화면에서는 항목마다 여러 줄이 되므로 항목 사이를 띄운다 */
  ${media.mobile} {
    li + li {
      margin-top: 4px;
    }
  }
`;

const Summary = styled.p`
  display: flex;
  gap: 4px;
  margin: 4px 0 0;
  color: ${({ theme }) => theme.palette.grey_800};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  font-weight: 600;
  word-break: keep-all;

  span:first-child {
    flex-shrink: 0;
  }
`;

export default JobDetail;
