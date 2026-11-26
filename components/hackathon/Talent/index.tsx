import Image from 'next/image';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import {
  Br,
  hackathonFont,
  SectionInner,
  SectionTitle,
  sectionGutter,
} from '../shared';

/* 02_인재상 — Figma 8967:933(1920) · 8995:10223(834) · 8981:13642(360) */

const ASSET_PATH = '/assets/images/hackathon/talent';

/** 위치 지정. 834 시안은 카드 오른쪽에 붙은 요소를 right 기준으로 옮겨 카드 폭이 늘어도 같은 자리에 둔다. */
type Spot = { left?: number; right?: number; top: number } | null;

interface Sparkle {
  /** 시안 노드 id(1920) */
  id: string;
  src: string;
  size: number;
  desktop: Spot;
  tablet: Spot;
  mobile: Spot;
}

/* 카드 안 반짝이(별). 시안 노드 크기 안에 9.1%씩 안쪽으로 그림이 들어간다. */
const SPARKLES: Sparkle[] = [
  {
    id: '8969:11258',
    src: `${ASSET_PATH}/star_24.svg`,
    size: 24,
    desktop: { left: 512, top: 31 },
    tablet: { right: 324.48, top: 29 },
    mobile: { left: 43, top: 171 },
  },
  {
    id: '8969:11260',
    src: `${ASSET_PATH}/star_16.svg`,
    size: 16,
    desktop: { left: 500, top: 59 },
    tablet: { right: 344.48, top: 57 },
    mobile: { left: 31, top: 199 },
  },
  {
    id: '8969:11262',
    src: `${ASSET_PATH}/star_16.svg`,
    size: 16,
    desktop: { left: 53, top: 310 },
    tablet: { left: 53, top: 310 },
    mobile: null,
  },
  {
    id: '8969:11264',
    src: `${ASSET_PATH}/star_21.svg`,
    size: 21.5,
    desktop: { left: 955.5, top: 69.5 },
    tablet: null,
    mobile: { right: 25.5, top: 334 },
  },
  {
    id: '8969:11268',
    src: `${ASSET_PATH}/star_9.svg`,
    size: 9.5,
    desktop: { left: 69, top: 92 },
    tablet: { left: 69, top: 92 },
    mobile: null,
  },
  {
    id: '8969:11266',
    src: `${ASSET_PATH}/star_21.svg`,
    size: 21.5,
    desktop: { left: 31, top: 288 },
    tablet: { left: 31, top: 288 },
    mobile: null,
  },
];

interface Trait {
  name: string;
  description: ReactNode;
}

const TRAITS: Trait[] = [
  {
    name: 'AI 활용',
    description: (
      <>
        AI로 어디까지 할 수 있을지 직접 시도하며{' '}
        <Br on={['desktop', 'tablet', 'mobile']} />
        가능성을 확인해보고 <Br on={['tablet']} />
        싶은 분
      </>
    ),
  },
  {
    name: '도전',
    description: (
      <>
        머릿속에만 있던 아이디어를 <Br on={['desktop', 'mobile']} />
        실제 서비스로 <Br on={['tablet']} />
        구현해보고 싶은 분
      </>
    ),
  },
  {
    name: '집중',
    description: (
      <>
        짧은 시간 안에 중요한 기능부터 구현해,{' '}
        <Br on={['desktop', 'tablet', 'mobile']} />
        하나의 결과물을 끝까지 완성하고 싶은 분
      </>
    ),
  },
];

function Talent() {
  return (
    <SectionBlock>
      <SectionInner>
        <Content>
          <SectionTitle
            title="아이디어를 현실로 만드는 무대"
            description={
              <>
                AI로 직접 시도하고, <Br on={['mobile']} />
                팀과 함께 결과물을 완성해보세요.
              </>
            }
          />
          <Body>
            <Stage>
              {SPARKLES.map(({ id, src, size, desktop, tablet, mobile }) => (
                <SparkleBox
                  key={id}
                  aria-hidden
                  $size={size}
                  $desktop={desktop}
                  $tablet={tablet}
                  $mobile={mobile}
                >
                  <SparkleArt>
                    <Image src={src} alt="" fill unoptimized />
                  </SparkleArt>
                </SparkleBox>
              ))}
              <CodeIcon aria-hidden>
                <Image
                  src={`${ASSET_PATH}/icon_code.svg`}
                  alt=""
                  fill
                  unoptimized
                />
              </CodeIcon>
              <Santa>
                <Image
                  src={`${ASSET_PATH}/santa_pm.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 833px) 285px, (max-width: 1200px) 351px, 381px"
                />
              </Santa>
              <Speech>
                <Bubble>바이브 코딩이 가능한 누구나</Bubble>
                <Tail aria-hidden>
                  <TailDesktop
                    src={`${ASSET_PATH}/bubble_tail.svg`}
                    alt=""
                    width={24}
                    height={33}
                    unoptimized
                  />
                  <TailMobile
                    src={`${ASSET_PATH}/bubble_tail_mobile.svg`}
                    alt=""
                    width={24}
                    height={18}
                    unoptimized
                  />
                </Tail>
              </Speech>
            </Stage>
            <TraitList>
              {TRAITS.map(({ name, description }) => (
                <TraitCard key={name}>
                  <TraitName>{name}</TraitName>
                  <TraitDescription>{description}</TraitDescription>
                </TraitCard>
              ))}
            </TraitList>
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
    padding-top: 200px;
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
  gap: 20px;

  ${media.mobile} {
    gap: 16px;
  }
`;

/* 주제 카드 — 8969:11249(1920) · 8995:10229(834) · 8981:15545(360) */
const Stage = styled.div`
  position: relative;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.hackathon_night};

  ${media.mobile} {
    height: 402.581px;
  }
`;

const spot = (value: Spot) =>
  value
    ? css`
        display: block;
        top: ${value.top}px;
        left: ${value.left !== undefined ? `${value.left}px` : 'auto'};
        right: ${value.right !== undefined ? `${value.right}px` : 'auto'};
      `
    : css`
        display: none;
      `;

const SparkleBox = styled.span<{
  $size: number;
  $desktop: Spot;
  $tablet: Spot;
  $mobile: Spot;
}>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  ${({ $desktop }) => spot($desktop)};

  ${media.tablet} {
    ${({ $tablet }) => spot($tablet)};
  }

  ${media.mobile} {
    ${({ $mobile }) => spot($mobile)};
  }
`;

const SparkleArt = styled.span`
  position: absolute;
  inset: 9.1%;
`;

/* lucide/code-xml — 8969:11255(1920 80px) · 8995:10235(834 60px), 360 시안에는 없음 */
const CodeIcon = styled.span`
  position: absolute;
  left: 533px;
  top: 47px;
  width: 80px;
  height: 80px;

  ${media.tablet} {
    left: auto;
    right: 259.52px;
    top: 60.44px;
    width: 60px;
    height: 60px;
  }

  ${media.mobile} {
    display: none;
  }
`;

/* 산타PM 1 — 8969:11250(1920) · 8995:10230(834) · 8981:15546(360) */
const Santa = styled.div`
  position: absolute;
  left: 597px;
  top: 0;
  width: 380.193px;
  height: 462px;

  ${media.tablet} {
    left: auto;
    right: -54.932px;
    top: 12.78px;
    width: 350.932px;
    height: 426.442px;
  }

  ${media.mobile} {
    left: 50%;
    right: auto;
    top: 126px;
    width: 284.026px;
    height: 345.141px;
    transform: translateX(-50%);
  }
`;

/* 말풍선 — 8969:11251(1920) · 8995:10231(834) · 8981:15547(360) */
const Speech = styled.div`
  position: absolute;
  left: 81px;
  top: 50%;
  display: flex;
  align-items: center;
  transform: translateY(-50%);

  ${media.tablet} {
    left: 31px;
  }

  ${media.mobile} {
    left: 50%;
    top: calc(50% - 107.4px);
    flex-direction: column;
    transform: translate(-50%, -50%);
  }
`;

const Bubble = styled.p`
  margin: 0 -5px 0 0;
  padding: 32px 56px;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(28, 700, '1.5')};
  text-align: center;
  white-space: nowrap;

  ${media.tablet} {
    padding: 28px 36px;
    ${hackathonFont(24, 700, '1.5')};
  }

  ${media.mobile} {
    margin: 0 0 -5px;
    padding: 16px 24px;
    ${hackathonFont(20, 700, '1.5')};
  }

  /* 320px 폭에서는 카드(280px)보다 넓어지지 않게 좌우 여백만 줄인다 */
  @media (max-width: 359px) {
    padding: 16px 18px;
  }
`;

/* 말풍선 꼬리 — 1920·834는 오른쪽(28×32.332, 그림 23.333 폭), 360은 아래(24×20.785, 그림 17.32 높이) */
const Tail = styled.span`
  position: relative;
  flex-shrink: 0;
  display: block;
  width: 28px;
  height: 32.332px;
  line-height: 0;

  ${media.mobile} {
    width: 24px;
    height: 20.785px;
  }
`;

const TailDesktop = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 23.333px;
  height: 32.332px;

  ${media.mobile} {
    display: none;
  }
`;

const TailMobile = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  width: 24px;
  height: 17.32px;

  ${media.mobile} {
    display: block;
  }
`;

const TraitList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;

  ${media.mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

const TraitCard = styled.li`
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  box-sizing: border-box;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    flex: none;
    gap: 8px;
    padding: 20px;
    border-radius: 16px;
  }
`;

const TraitName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(24, 700, 'normal')};

  ${media.mobile} {
    ${hackathonFont(20, 700, 'normal')};
  }
`;

const TraitDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_700};
  ${hackathonFont(16, 500, '1.5')};

  ${media.mobile} {
    ${hackathonFont(14, 500, '1.5')};
  }
`;

export default Talent;
