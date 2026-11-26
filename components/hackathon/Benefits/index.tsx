import Image from 'next/image';
import { ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import {
  Br,
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 08_참가자혜택 — Figma 8994:6626(1920) · 8995:12166(834) · 8995:6923(360) */

interface Benefit {
  name: string;
  description: ReactNode;
  icon: string;
  /** 1920·834 시안의 아이콘 크기 */
  size: { width: number; height: number };
  /** 360 시안의 아이콘 크기 */
  mobileSize: { width: number; height: number };
  /** 360 시안에서 아이콘을 이 폭의 칸 가운데에 둔다(간식만 54px 칸) */
  mobileSlot?: number;
}

const ICON_PATH = '/assets/images/hackathon/icons';

const BENEFITS: Benefit[] = [
  {
    name: '참가자 굿즈',
    description: (
      <>
        해커톤 참가자를 위한
        <Br on={['desktop', 'tablet']} /> 기념 굿즈 제공
      </>
    ),
    icon: `${ICON_PATH}/benefit_goods.svg`,
    size: { width: 64, height: 60 },
    mobileSize: { width: 54, height: 50.625 },
  },
  {
    name: '식사',
    description: (
      <>
        행사 당일 팀원들과 함께하는 <Br on={['desktop', 'tablet', 'mobile']} />
        점심 식사·저녁 치킨피자 제공
      </>
    ),
    icon: `${ICON_PATH}/benefit_meal.svg`,
    size: { width: 55, height: 60 },
    mobileSize: { width: 54, height: 58.909 },
  },
  {
    name: '간식',
    description: (
      <>
        하루의 몰입을 돕는 <Br on={['desktop', 'tablet', 'mobile']} />
        다양한 간식 제공
      </>
    ),
    icon: `${ICON_PATH}/benefit_snack.svg`,
    size: { width: 40, height: 60 },
    mobileSize: { width: 40, height: 60 },
    mobileSlot: 54,
  },
  {
    name: '네트워킹',
    description: (
      <>
        서로의 아이디어와 경험을 <Br on={['desktop', 'tablet']} />
        나누는 <Br on={['mobile']} />
        네트워킹 시간 진행
      </>
    ),
    icon: `${ICON_PATH}/benefit_networking.svg`,
    size: { width: 65, height: 60 },
    mobileSize: { width: 50, height: 46.154 },
  },
  {
    name: '멘토링',
    description: (
      <>
        작업 중 자유롭게 커피챗 하며 <Br on={['desktop', 'tablet', 'mobile']} />
        질문할 수 있는 기회 제공
      </>
    ),
    icon: `${ICON_PATH}/benefit_mentoring.svg`,
    size: { width: 70, height: 60 },
    mobileSize: { width: 54, height: 46.286 },
  },
  {
    name: '상장과 상품',
    description: (
      <>
        수상팀 대상 상장 및 <Br on={['desktop', 'tablet']} />
        에어팟, 키보드, <Br on={['mobile']} />
        마우스 상품 증정
      </>
    ),
    icon: `${ICON_PATH}/benefit_award.svg`,
    size: { width: 62, height: 60 },
    mobileSize: { width: 54, height: 52.258 },
  },
];

function Benefits() {
  return (
    <SectionBlock id="benefits">
      <SectionInner>
        <Content>
          <SectionTitle
            title="참가자 혜택"
            description={
              <>
                수상 여부와 관계없이 해커톤 참가자를 위해 <Br on={['mobile']} />
                준비하고 있는 혜택이에요.
              </>
            }
          />
          <Body>
            <CardGrid>
              {BENEFITS.map(
                ({ name, description, icon, size, mobileSize, mobileSlot }) => (
                  <Card key={name}>
                    <IconSlot
                      $width={size.width}
                      $height={size.height}
                      $mobileWidth={mobileSize.width}
                      $mobileHeight={mobileSize.height}
                      $mobileSlot={mobileSlot ?? mobileSize.width}
                    >
                      <Image src={icon} alt="" fill unoptimized />
                    </IconSlot>
                    <CardText>
                      <CardName>{name}</CardName>
                      <CardDescription>{description}</CardDescription>
                    </CardText>
                  </Card>
                ),
              )}
            </CardGrid>
            <Note>
              굿즈 종류와 추가 혜택 등 세부 내용은 <Br on={['mobile']} />
              확정 후 안내됩니다.
            </Note>
          </Body>
        </Content>
      </SectionInner>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  background-color: ${({ theme }) => theme.palette.grey_100};
  padding-top: 100px;
  padding-bottom: 240px;
  ${sectionGutter};

  ${media.tablet} {
    padding-top: 80px;
    padding-bottom: 160px;
  }

  ${media.mobile} {
    padding-top: 40px;
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  align-items: start;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.white};
  box-sizing: border-box;

  ${media.mobile} {
    flex-direction: row;
    align-items: center;
    gap: 24px;
    height: 107px;
    padding: 20px;
    border-radius: 16px;
  }
`;

const IconSlot = styled.div<{
  $width: number;
  $height: number;
  $mobileWidth: number;
  $mobileHeight: number;
  $mobileSlot: number;
}>`
  position: relative;
  flex-shrink: 0;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;

  ${media.mobile} {
    width: ${({ $mobileWidth }) => $mobileWidth}px;
    height: ${({ $mobileHeight }) => $mobileHeight}px;
    margin: 0
      ${({ $mobileSlot, $mobileWidth }) => ($mobileSlot - $mobileWidth) / 2}px;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    flex: 1 0 0;
    min-width: 1px;
    gap: 4px;
  }
`;

const CardName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(24, 700, 'normal')};

  ${media.mobile} {
    ${hackathonFont(18, 700, 'normal')};
  }
`;

const CardDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_700};
  ${hackathonFont(20, 500, '1.5')};

  ${media.mobile} {
    ${hackathonFont(14, 500, '1.5')};
  }
`;

const Note = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${hackathonFont(16, 500, '1.5', -0.4)};
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */
`;

export default Benefits;
