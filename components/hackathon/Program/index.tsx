import Image from 'next/image';
import styled from 'styled-components';
import media from 'styles/media';
import {
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 04_프로그램 — Figma 8950:13510(1920) · 8995:11693(834) · 8981:15743(360) */

const ASSET_PATH = '/assets/images/hackathon/program';

type Art = 'start' | 'dots' | 'service' | 'finish';

interface Schedule {
  time: string;
  label: string;
  art: Art;
  badge?: string;
}

const SCHEDULES: Schedule[] = [
  // 시간은 기획안 타임테이블 기준(시안은 08:40·11:00·19:50). 시안의 칸 5개는 그대로 둔다.
  { time: '09:00', label: '입장 시작', art: 'start', badge: 'Start' },
  { time: '09:30', label: '키워드 공개', art: 'dots' },
  { time: '10:00', label: '서비스 제작', art: 'service' },
  { time: '17:00', label: '결과물 제출', art: 'dots' },
  { time: '20:00', label: '시상 · 마무리', art: 'finish', badge: 'Finish' },
];

/**
 * 1920·834 시안의 캐릭터. 위 칸(높이 144)에 잘려 보이는 부분만 내보낸 SVG라
 * 크기는 SVG 크기, 위치는 시안 노드 기준(left = 50% + 오프셋 - 노드 폭/2).
 */
const CHARACTERS: Record<
  Exclude<Art, 'dots'>,
  { src: string; width: number; height: number; top: number; left: string }
> = {
  // 8950:13519 (좌우 반전된 캐릭터, 반전 상태로 내보냄)
  start: {
    src: `${ASSET_PATH}/character_start.svg`,
    width: 138,
    height: 102,
    top: 43,
    left: 'calc(50% - 68.961px)',
  },
  // 8950:13547
  service: {
    src: `${ASSET_PATH}/character_service.svg`,
    width: 144,
    height: 106,
    top: 38,
    left: 'calc(50% - 71.998px)',
  },
  // 8950:13573
  finish: {
    src: `${ASSET_PATH}/character_finish.svg`,
    width: 160,
    height: 101,
    top: 43,
    left: 'calc(50% - 72px)',
  },
};

/** 360 시안의 캐릭터(왼쪽 80×67 칸). finish는 칸 전체를 담은 프레임(8981:16037)이다. */
const MOBILE_CHARACTERS: Record<
  Exclude<Art, 'dots'>,
  { src: string; width: number; height: number; top: number; left: number }
> = {
  // 8981:15939
  start: {
    src: `${ASSET_PATH}/character_start_mobile.svg`,
    width: 50,
    height: 40,
    top: 14.25,
    left: 15,
  },
  // 8985:16076
  service: {
    src: `${ASSET_PATH}/character_service_mobile.svg`,
    width: 50,
    height: 40,
    top: 14.25,
    left: 15,
  },
  // 8981:16037
  finish: {
    src: `${ASSET_PATH}/character_finish_mobile.svg`,
    width: 80,
    height: 67,
    top: 0,
    left: 0,
  },
};

function ScheduleArt({ art, badge }: { art: Art; badge?: string }) {
  if (art === 'dots') {
    return (
      <>
        <Dots aria-hidden>
          <span />
          <span />
          <span />
        </Dots>
        <MobileDots aria-hidden>
          <span />
          <span />
          <span />
        </MobileDots>
      </>
    );
  }

  const character = CHARACTERS[art];
  const mobileCharacter = MOBILE_CHARACTERS[art];

  return (
    <>
      <Character $top={character.top} $left={character.left}>
        <Image
          src={character.src}
          alt=""
          width={character.width}
          height={character.height}
          unoptimized
        />
      </Character>
      {badge && <Badge>{badge}</Badge>}
      <MobileCharacter $top={mobileCharacter.top} $left={mobileCharacter.left}>
        <Image
          src={mobileCharacter.src}
          alt=""
          width={mobileCharacter.width}
          height={mobileCharacter.height}
          unoptimized
        />
      </MobileCharacter>
    </>
  );
}

function Program() {
  return (
    <SectionBlock id="program">
      <SectionInner>
        <Content>
          <SectionTitle
            title="당일 프로그램"
            description="상세 일정은 내부 사정에 의해 조정될 수 있습니다."
          />
          <ScheduleList>
            {SCHEDULES.map(({ time, label, art, badge }) => (
              <ScheduleCard key={time}>
                <ArtArea>
                  <ScheduleArt art={art} badge={badge} />
                </ArtArea>
                <InfoArea>
                  <Time>{time}</Time>
                  <Label>{label}</Label>
                </InfoArea>
              </ScheduleCard>
            ))}
          </ScheduleList>
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
    background-color: ${({ theme }) => theme.palette.grey_25};
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.mobile} {
    gap: 32px;
  }
`;

/* 1920: 한 줄 5칸(gap 20) · 834: 192px 3칸, 두 번째 줄 왼쪽 정렬(가로 20, 세로 32) · 360: 세로 목록(gap 12) */
const ScheduleList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;

  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 192px);
    column-gap: 20px;
    row-gap: 32px;
  }

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const ScheduleCard = styled.li`
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  /*
   * 시안의 카드 높이는 237로 고정이고 내용(240.5)은 가운데 정렬이라 위아래로 1.75px씩 넘친다.
   * 같은 방식으로 그려야 카드 위치가 시안과 맞는다.
   */
  height: 237px;
  justify-content: center;
  border-radius: 16px;

  ${media.mobile} {
    height: auto;
    justify-content: flex-start;
    flex: none;
    flex-direction: row;
    align-items: center;
  }
`;

const ArtArea = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 144px;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.palette.grey_100};
  overflow: hidden;

  ${media.mobile} {
    flex-shrink: 0;
    width: 80px;
    height: 67px;
    border-radius: 16px 0 0 16px;
    background-color: ${({ theme }) => theme.palette.white};
  }
`;

const Character = styled.div<{ $top: number; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left};
  display: flex;

  ${media.mobile} {
    display: none;
  }
`;

const MobileCharacter = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  display: none;

  ${media.mobile} {
    display: flex;
  }
`;

/* Start/Finish 태그 8950:13529 */
const Badge = styled.span`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 8px;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.grey_600};
  ${hackathonFont(12, 600, '1.5')};
  white-space: nowrap;

  ${media.mobile} {
    display: none;
  }
`;

/* 점 세 개 8950:13537: 지름 15, 간격 20, 192 칸 기준 left 53 */
const Dots = styled.div`
  position: absolute;
  top: 65px;
  left: calc(50% - 43px);
  display: flex;
  gap: 20px;

  span {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.grey_300};
  }

  ${media.mobile} {
    display: none;
  }
`;

/* 360 점 세 개 8981:16030: 지름 10, 간격 10, left 15 top 28.25 */
const MobileDots = styled.div`
  position: absolute;
  top: 28.25px;
  left: 15px;
  display: none;
  gap: 10px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.grey_200};
  }

  ${media.mobile} {
    display: flex;
  }
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  border-radius: 0 0 16px 16px;
  background-color: ${({ theme }) => theme.palette.grey_700};
  white-space: nowrap;

  ${media.mobile} {
    flex: 1 0 0;
    min-width: 1px;
    gap: 2px;
    padding: 12px 16px;
    border-radius: 0 16px 16px 0;
  }
`;

const Time = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_300};
  ${hackathonFont(15, 600, '1.5')};

  ${media.mobile} {
    ${hackathonFont(12, 600, '1.5')};
  }
`;

const Label = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.white};
  ${hackathonFont(20, 600, '1.5')};

  ${media.mobile} {
    ${hackathonFont(16, 600, '1.5')};
  }
`;

export default Program;
