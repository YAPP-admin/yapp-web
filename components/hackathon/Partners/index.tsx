import Image from 'next/image';
import styled, { css } from 'styled-components';
import media from 'styles/media';

/*
 * 10_홍보처 — Figma 9003:10804(1920) · 9003:10880(834) · 9003:10727(360)
 * 로고 원본은 "홍보처" 섹션 9003:11781(홍보1~4).
 *
 * 로고는 시안 크기 그대로 가운데 한 줄로 놓는다. 화면이 한 줄 폭보다 좁아지면
 * (1201~1527px, 320~359px) 로고와 간격을 같은 비율로 줄인다.
 * 어두운 로고가 강제 다크에서 묻히지 않도록 그림에 흰 바탕을 넣었다(DESIGN.md 1. 원칙).
 */

const LOGO_PATH = '/assets/images/hackathon/partners';

interface Partner {
  name: string;
  src: string;
  /** 1920 / 834 / 360 시안의 로고 폭. 높이는 aspect로 정한다 */
  width: [number, number, number];
  /** 1920 시안의 폭:높이 */
  aspect: [number, number];
}

const PARTNERS: Partner[] = [
  {
    name: '고용노동부',
    src: `${LOGO_PATH}/logo_moel.webp`,
    width: [174.91, 94.18, 43.73],
    aspect: [174.91, 52],
  },
  {
    name: 'HRDK 한국산업인력공단',
    src: `${LOGO_PATH}/logo_hrdk.svg`,
    width: [357.5, 178.75, 98.31],
    aspect: [357.5, 40],
  },
  {
    name: 'K-하이테크 플랫폼',
    src: `${LOGO_PATH}/logo_k_hightech.webp`,
    width: [304.23, 158.2, 79.1],
    aspect: [304.23, 50],
  },
  {
    name: 'goorm',
    src: `${LOGO_PATH}/logo_goorm.webp`,
    width: [171, 83.6, 41.8],
    aspect: [171, 45],
  },
];

/** 시안의 로고 사이 간격 */
const GAP: [number, number, number] = [120, 52, 16];

/** 시안의 한 줄 폭(로고 폭 + 간격 합)과, 줄이기 시작할 때 남길 좌우 여백 합 */
const ROW = [
  { width: 1367.64, gutter: 160 },
  { width: 670.72, gutter: 160 },
  { width: 310.94, gutter: 48 },
];

/** 시안 값 px. 한 줄이 화면에 들어가지 않으면 같은 비율로 줄인다 */
const fluid = (px: number, index: number) => {
  const { width, gutter } = ROW[index];
  return `min(${px}px, calc((100vw - ${gutter}px) * ${(px / width).toFixed(
    5,
  )}))`;
};

function Partners() {
  return (
    <SectionBlock aria-label="홍보처">
      <LogoList>
        {PARTNERS.map(({ name, src, width, aspect }) => (
          <LogoItem key={name} $width={width} $aspect={aspect}>
            <Image src={src} alt={name} fill unoptimized />
          </LogoItem>
        ))}
      </LogoList>
    </SectionBlock>
  );
}

const SectionBlock = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 80px 0;

  ${media.tablet} {
    padding: 40px 0;
  }

  ${media.mobile} {
    padding: 24px 0;
  }
`;

const LogoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${fluid(GAP[0], 0)};

  ${media.tablet} {
    gap: ${fluid(GAP[1], 1)};
  }

  ${media.mobile} {
    gap: ${fluid(GAP[2], 2)};
  }
`;

const logoWidth = (width: Partner['width']) => css`
  width: ${fluid(width[0], 0)};

  ${media.tablet} {
    width: ${fluid(width[1], 1)};
  }

  ${media.mobile} {
    width: ${fluid(width[2], 2)};
  }
`;

const LogoItem = styled.li<{
  $width: Partner['width'];
  $aspect: Partner['aspect'];
}>`
  position: relative;
  flex-shrink: 0;
  aspect-ratio: ${({ $aspect }) => `${$aspect[0]} / ${$aspect[1]}`};
  ${({ $width }) => logoWidth($width)};
`;

export default Partners;
