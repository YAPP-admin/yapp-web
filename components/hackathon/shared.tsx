import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';

/*
 * 해커톤 랜딩(/hackathon) 공용 요소.
 *
 * 시안은 1920w, 834w, 360w 세 장이다. 화면 폭과 시안의 대응:
 * - 1201px 이상: 1920w 시안. 본문 폭 1040px을 가운데에 둔다.
 * - 834~1200px(media.tablet): 834w 시안. 좌우 여백 80px, 본문은 남는 폭을 채운다.
 * - 833px 이하(media.mobile): 360w 시안. 좌우 여백 20px.
 *
 * 글자 크기·줄 높이·자간은 시안 값을 그대로 옮긴다. textStyleV2는 줄 높이가 1.6em으로
 * 고정이라 시안(1.5, 51.2px 등)과 어긋나는 경우가 있어 이 페이지에서는 hackathonFont를 쓴다.
 */

export const CONTENT_WIDTH = 1040;

/**
 * Figma가 실제로 그리는 한 줄 높이. Figma는 줄 높이를 정수 px로 맞춘다
 * (시안 노드의 글자 상자 높이로 확인):
 * - 배수(150%, 160%)는 반올림: 22px × 1.6 = 35.2 → 35, 15px × 1.5 = 22.5 → 23
 * - px 값은 올림: 51.2 → 52, 20.09 → 21
 * 브라우저에 소수 줄 높이를 그대로 주면 섹션마다 1px 안팎이 모자라 아래로 갈수록 어긋난다.
 */
const figmaLineHeight = (size: number, lineHeight: number | string) => {
  if (typeof lineHeight === 'number')
    return `${Math.ceil(lineHeight - 1e-3)}px`;
  const ratio = Number(lineHeight);
  if (Number.isNaN(ratio)) return lineHeight; // 'normal'
  return `${Math.round(size * ratio)}px`;
};

/** 시안 글자 값. lineHeight는 px 숫자 또는 '1.5' 같은 배수 문자열(또는 'normal'), letterSpacing은 px. */
export const hackathonFont = (
  size: number,
  weight: 400 | 500 | 600 | 700,
  lineHeight: number | string,
  letterSpacing = 0,
) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${figmaLineHeight(size, lineHeight)};
  letter-spacing: ${letterSpacing}px;
`;

/** 섹션 안쪽 본문 폭. 좌우 여백은 섹션 쪽에서 준다. */
export const SectionInner = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH}px;
  margin: 0 auto;
  box-sizing: border-box;
`;

/** 섹션 좌우 여백: 데스크톱·태블릿 80px(1920에서는 본문 폭이 가운데 정렬로 440px이 된다), 모바일 20px. */
export const sectionGutter = css`
  padding-left: 80px;
  padding-right: 80px;

  ${media.mobile} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

type Breakpoint = 'desktop' | 'tablet' | 'mobile';

/**
 * 시안에서 디자이너가 직접 끊은 줄바꿈. 지정한 시안 폭에서만 줄을 바꾼다.
 * 예: <Br on={['mobile']} /> → 833px 이하에서만 줄바꿈.
 */
export function Br({ on }: { on: Breakpoint[] }) {
  return <BrBlock $on={on} />;
}

const BrBlock = styled.br<{ $on: Breakpoint[] }>`
  display: ${({ $on }) => ($on.includes('desktop') ? 'inline' : 'none')};

  ${media.tablet} {
    display: ${({ $on }) => ($on.includes('tablet') ? 'inline' : 'none')};
  }

  ${media.mobile} {
    display: ${({ $on }) => ($on.includes('mobile') ? 'inline' : 'none')};
  }
`;

interface SectionTitleProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

/**
 * 섹션 제목 + 설명. 시안 값:
 * - 1920·834: 제목 Bold 32/51.2 자간 -0.64, 설명 SemiBold 20/32 자간 -0.4 black 50%, 간격 4
 * - 360: 제목 Bold 24/1.5 자간 -0.48, 설명 SemiBold 16/1.5 자간 -0.32 black 60%, 간격 8
 * 어두운 배경 섹션은 className으로 색을 덮어쓴다.
 */
export function SectionTitle({
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <TitleBlock className={className}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </TitleBlock>
  );
}

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */

  ${media.mobile} {
    gap: 8px;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${hackathonFont(32, 700, 51.2, -0.64)};

  ${media.mobile} {
    ${hackathonFont(24, 700, '1.5', -0.48)};
  }
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${hackathonFont(20, 600, 32, -0.4)};

  ${media.mobile} {
    color: ${({ theme }) => theme.palette.black_60};
    ${hackathonFont(16, 600, '1.5', -0.32)};
  }
`;
