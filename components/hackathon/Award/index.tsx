import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { HACKATHON_SECTION_ID } from 'constants/hackathon';
import {
  Br,
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 06_시상안내 — Figma 8969:11894(1920) · 8995:12089(834) · 8985:16570(360) */

interface AwardInfo {
  tag: string;
  value: ReactNode;
}

const AWARD_INFO: AwardInfo[] = [
  { tag: '제출 결과물', value: '접속 가능한 웹 서비스 URL' },
  {
    tag: '결과물 심사',
    value: (
      <>
        1차 심사 → 본선 5팀 시연 <Br on={['mobile']} />→ 최종 심사
      </>
    ),
  },
];

type Size = { width: number; height: number };

interface Prize {
  rank: string;
  name: string;
  image: string;
  /** 시안의 상품 사진 크기: 1920 · 834 · 360 */
  size: { desktop: Size; tablet: Size; mobile: Size };
}

const IMAGE_PATH = '/assets/images/hackathon/award';

/* 상품 사진 원본: 이미지 모음 9003:11699(상품1) · 9003:11700(상품2) · 9003:11701(상품3) */
const PRIZES: Prize[] = [
  {
    rank: '1등',
    name: '에어팟',
    image: `${IMAGE_PATH}/prize_airpods.webp`,
    size: {
      desktop: { width: 175, height: 175 },
      tablet: { width: 113.413, height: 113.413 },
      mobile: { width: 53.846, height: 53.846 },
    },
  },
  {
    rank: '2등',
    name: '레오폴드 키보드',
    image: `${IMAGE_PATH}/prize_keyboard.webp`,
    size: {
      desktop: { width: 270, height: 270 },
      tablet: { width: 174.981, height: 174.981 },
      mobile: { width: 83.077, height: 83.077 },
    },
  },
  {
    rank: '3등',
    name: '버티컬 마우스',
    image: `${IMAGE_PATH}/prize_mouse.webp`,
    size: {
      desktop: { width: 130, height: 172.913 },
      tablet: { width: 84.25, height: 112.061 },
      mobile: { width: 40, height: 53.204 },
    },
  },
];

function Award() {
  return (
    <SectionBlock id={HACKATHON_SECTION_ID.award}>
      <SectionInner>
        <Content>
          <SectionTitle
            title="시상 안내"
            description={
              <>
                결과물 제출과 심사 방식, 수상팀 상품을 <Br on={['mobile']} />
                확인해 주세요.
              </>
            }
          />
          <Body>
            <InfoList>
              {AWARD_INFO.map(({ tag, value }) => (
                <InfoRow key={tag}>
                  <InfoTag>{tag}</InfoTag>
                  <InfoValue>{value}</InfoValue>
                </InfoRow>
              ))}
            </InfoList>
            <PrizeArea>
              <PrizeBox>
                <PrizeList>
                  {PRIZES.map(({ rank, name, image, size }) => (
                    <PrizeCard key={rank}>
                      <PhotoBox>
                        <Photo
                          $desktop={size.desktop}
                          $tablet={size.tablet}
                          $mobile={size.mobile}
                        >
                          <Image
                            src={image}
                            alt=""
                            fill
                            sizes={`(max-width: 833px) ${Math.ceil(
                              size.mobile.width,
                            )}px, (max-width: 1200px) ${Math.ceil(
                              size.tablet.width,
                            )}px, ${size.desktop.width}px`}
                            unoptimized
                          />
                        </Photo>
                      </PhotoBox>
                      <PrizeLabel>
                        <PrizeRank>{rank}</PrizeRank>
                        <PrizeName>{name}</PrizeName>
                      </PrizeLabel>
                    </PrizeCard>
                  ))}
                </PrizeList>
                <BonusBlock>
                  {/* 운영진 확정: 상위 5팀(1920 시안과 같음. 834·360 시안은 '특별상 1팀') */}
                  <BonusTitle>상위 5팀: YAPP 30기 서류 면제권</BonusTitle>
                  <BonusNote>
                    팀원별 상품 지급 예정 · 특별상 세부 조건은 추후 안내
                  </BonusNote>
                </BonusBlock>
              </PrizeBox>
              <Footnote>
                상품 모델과 지급 방식은 최종 안내를 확인해 주세요.
              </Footnote>
            </PrizeArea>
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
    padding-bottom: 80px;
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
  gap: 24px;

  ${media.mobile} {
    gap: 20px;
  }
`;

const InfoList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${media.mobile} {
    align-items: flex-start;
  }
`;

const InfoTag = styled.dt`
  flex-shrink: 0;
  padding: 10px 14px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  color: ${({ theme }) => theme.palette.grey_700};
  ${hackathonFont(18, 500, '1.5')};
  white-space: nowrap;

  ${media.mobile} {
    padding: 8px 12px;
    ${hackathonFont(15, 500, '1.5')};
  }
`;

const InfoValue = styled.dd`
  margin: 0;
  min-width: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(20, 500, '1.5')};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    ${hackathonFont(15, 500, '1.5')};
  }
`;

const PrizeArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.mobile} {
    gap: 12px;
  }
`;

const PrizeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.hackathon_night};

  ${media.tablet} {
    gap: 20px;
    padding: 24px;
  }

  ${media.mobile} {
    gap: 12px;
    padding: 10px;
    border-radius: 12px;
  }
`;

const PrizeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.tablet} {
    gap: 16px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

const PrizeCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.tablet} {
    gap: 12px;
  }

  ${media.mobile} {
    gap: 8px;
  }
`;

const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  overflow: hidden;

  ${media.tablet} {
    height: 155.538px;
    border-radius: 16px;
  }

  ${media.mobile} {
    height: 88px;
    border-radius: 8px;
  }
`;

/* 사진 칸이 시안보다 좁아지면(320px 등) 비율을 유지한 채 줄어든다. */
const Photo = styled.div<{ $desktop: Size; $tablet: Size; $mobile: Size }>`
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
  width: ${({ $desktop }) => $desktop.width}px;
  aspect-ratio: ${({ $desktop }) => `${$desktop.width} / ${$desktop.height}`};

  ${media.tablet} {
    width: ${({ $tablet }) => $tablet.width}px;
  }

  ${media.mobile} {
    width: ${({ $mobile }) => $mobile.width}px;
  }

  img {
    object-fit: contain;
  }
`;

const PrizeLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.hackathon_point_blue};
  color: ${({ theme }) => theme.palette.white};
  text-align: center;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.tablet} {
    padding: 12px;
    border-radius: 16px;
  }

  ${media.mobile} {
    gap: 1.231px;
    padding: 6.154px;
    border-radius: 8px;
  }
`;

const PrizeRank = styled.p`
  margin: 0;
  ${hackathonFont(16, 700, 31)};

  ${media.tablet} {
    ${hackathonFont(11, 700, 20.09)};
  }

  ${media.mobile} {
    ${hackathonFont(10, 500, '1.5')};
  }
`;

const PrizeName = styled.p`
  margin: 0;
  ${hackathonFont(24, 700, 29)};

  ${media.tablet} {
    ${hackathonFont(16, 700, 18.794)};
  }

  ${media.mobile} {
    ${hackathonFont(11, 700, '1.5')};
  }
`;

const BonusBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.tablet} {
    gap: 4px;
  }

  ${media.mobile} {
    gap: 1.846px;
  }
`;

const BonusTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.white};
  ${hackathonFont(18, 700, '1.5')};

  ${media.tablet} {
    ${hackathonFont(16, 700, '1.5')};
  }

  ${media.mobile} {
    ${hackathonFont(11, 700, '1.5')};
  }
`;

const BonusNote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_300};
  ${hackathonFont(14, 500, '1.5')};

  ${media.tablet} {
    ${hackathonFont(12, 500, '1.5')};
  }

  ${media.mobile} {
    ${hackathonFont(9, 500, '1.5')};
  }
`;

const Footnote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${hackathonFont(16, 500, '1.5', -0.4)};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    color: ${({ theme }) => theme.palette.black_60};
    ${hackathonFont(12, 600, '1.5', -0.32)};
  }
`;

export default Award;
