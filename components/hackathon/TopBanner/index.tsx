import { HACKATHON_APPLY_LINK } from 'constants/hackathon';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import media from 'styles/media';
import { Br, hackathonFont } from '../shared';

/*
 * 00_Top banner — Figma 8940:10584(1920) · 8995:9707(834) · 8981:14875(360)
 * 그림 원본: "이미지 모음" 9003:10956(1920) · 9003:11126(834) · 9003:11242(360)
 *
 * 제목("Play Our YAPPKATHON", "29TH")은 프로젝트에 없는 글꼴(Caveat, Sofia Sans)이라 이미지로 넣는다.
 * 부제와 아래 날짜·지원 버튼은 HTML 글자다.
 *
 * 화면 폭별 동작
 * - 1201px 이상(1920 시안): 1920×1080 무대를 가운데에 두고 양옆을 자른다.
 *   1920px보다 넓으면 무대 전체를 폭에 맞춰 키운다(d() 값). 날짜·지원 버튼 크기는 그대로다.
 * - 834~1200px(834 시안): 높이 1080. 배경 사진은 1200px 폭까지 이어지는 원본을 써서
 *   화면이 넓어지면 양옆이 더 보인다. 캐릭터·제목은 가운데 고정.
 * - 833px 이하(360 시안): 높이 780. 배경 사진은 838px 폭까지 이어진다.
 */

const ASSET = '/assets/images/hackathon/top';

/** 1920 시안 값. 1920px보다 넓은 화면에서는 폭에 비례해 커진다(배너가 컨테이너). */
const d = (px: number) => `max(${px}px, ${+(px / 19.2).toFixed(4)}cqw)`;

function TopBanner() {
  return (
    <>
      <Section>
        <Head>
          <link
            rel="preload"
            as="image"
            href={`${ASSET}/art_desktop.webp`}
            imageSrcSet={`${ASSET}/art_desktop.webp 1x, ${ASSET}/art_desktop@2x.webp 2x`}
            media="(min-width: 1201px)"
          />
          <link
            rel="preload"
            as="image"
            href={`${ASSET}/bg_tablet.webp`}
            media="(min-width: 834px) and (max-width: 1200px)"
          />
          <link
            rel="preload"
            as="image"
            href={`${ASSET}/bg_mobile.webp`}
            media="(max-width: 833px)"
          />
        </Head>
        <Stage>
          <Art aria-hidden />
          {/* 834: 눈 9003:11192 */}
          <SnowTablet aria-hidden>
            <Image src={`${ASSET}/snow_tablet.svg`} alt="" fill unoptimized />
          </SnowTablet>
          {/* 360: 눈 9003:11320 · 9003:11328 */}
          <SnowMobileLeft aria-hidden>
            <Image
              src={`${ASSET}/snow_mobile_left.svg`}
              alt=""
              fill
              unoptimized
            />
          </SnowMobileLeft>
          <SnowMobileRight aria-hidden>
            <Image
              src={`${ASSET}/snow_mobile_right.svg`}
              alt=""
              fill
              unoptimized
            />
          </SnowMobileRight>
          {/* 834·360: 캐릭터 9003:11173 · 9003:11301 (1920은 배경 그림에 들어 있다) */}
          <Characters aria-hidden>
            <Image
              src={`${ASSET}/characters.webp`}
              alt=""
              fill
              sizes="(max-width: 833px) 343px, 715px"
            />
          </Characters>
          {/* 834·360: 아래 흰색 그라데이션 띠 9003:11191 · 9003:11319 */}
          <BottomFade aria-hidden />

          <Heading>
            <Title>
              <Image
                src={`${ASSET}/title.webp`}
                alt="Play Our YAPPKATHON 29TH"
                fill
                priority
                sizes="(max-width: 833px) 331px, (max-width: 1200px) 722px, max(1172px, 61vw)"
              />
            </Title>
            <Subtitle>
              AI로 아이디어를 실제 웹 서비스로 구현하는 특별한 하루,{' '}
              <Br on={['tablet', 'mobile']} />
              얍커톤에 함께하세요!
            </Subtitle>
          </Heading>
        </Stage>
      </Section>

      {/* 9002:4763 — 날짜 + 지원 버튼. 화면 아래에 계속 떠 있는다 */}
      <Pill>
        <DateText>12월 19일 (토요일)</DateText>
        <ApplyLink
          href={HACKATHON_APPLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          얍커톤 지원하기
        </ApplyLink>
      </Pill>
    </>
  );
}

/* 1920px보다 넓은 화면에서 무대를 키우는 기준(cqw)이 된다 */
const Section = styled.section`
  container-type: inline-size;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
`;

const Stage = styled.div`
  position: relative;
  height: ${d(1080)};

  ${media.tablet} {
    height: 1080px;
  }

  ${media.mobile} {
    height: 780px;
  }
`;

/*
 * 배경 그림.
 * - 1920: 9003:10957(배경·눈·캐릭터) 1920×1080. 레티나 화면에는 2배(3840×2160) 파일을 쓴다.
 *   배경 사진 원본은 1672px로 작지만 위에 겹친 눈·빛·캐릭터 레이어는 해상도가 높아서,
 *   1배 파일을 브라우저가 늘리면 이 레이어까지 뭉개진다.
 * - 834: 사진 9003:11127에서 화면에 보이는 아래 1080px, 폭 1200px(가운데 기준)
 * - 360: 사진 9003:11243에서 아래 780px, 폭 837.88px(가운데 기준)
 */
const Art = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: ${d(1920)};
  height: 100%;
  transform: translateX(-50%);
  background-image: url(${ASSET}/art_desktop.webp);
  background-image: image-set(
    url(${ASSET}/art_desktop.webp) 1x,
    url(${ASSET}/art_desktop@2x.webp) 2x
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;

  ${media.tablet} {
    width: 1200px;
    background-image: url(${ASSET}/bg_tablet.webp);
  }

  ${media.mobile} {
    width: 837.88px;
    background-image: url(${ASSET}/bg_mobile.webp);
  }
`;

/* 시안 위치를 화면 가운데 기준으로 옮긴 값: left = 50% + (시안 x - 시안 폭 / 2) */
const Layer = styled.div`
  position: absolute;
  display: none;
  pointer-events: none;
`;

const SnowTablet = styled(Layer)`
  ${media.tablet} {
    display: block;
    top: 89.61px;
    left: calc(50% - 371.13px);
    width: 259px;
    height: 266px;
  }

  ${media.mobile} {
    display: none;
  }
`;

const SnowMobileLeft = styled(Layer)`
  ${media.mobile} {
    display: block;
    top: 294.36px;
    left: calc(50% - 160.64px);
    width: 124px;
    height: 128px;
  }
`;

const SnowMobileRight = styled(Layer)`
  ${media.mobile} {
    display: block;
    top: 84.36px;
    left: calc(50% + 33.36px);
    width: 126px;
    height: 98px;
  }
`;

/* 834: x 54.85 y 614.78, 714.06×319.6 / 360: x 6.41 y 557, 342.28×153.2 */
const Characters = styled(Layer)`
  ${media.tablet} {
    display: block;
    top: 614.78px;
    left: calc(50% - 362.15px);
    width: 714.06px;
    height: 319.6px;
  }

  ${media.mobile} {
    top: 557px;
    left: calc(50% - 173.59px);
    width: 342.28px;
    height: 153.2px;
  }
`;

/* 흰색 0% → 100% 세로 그라데이션. 834: y 1015.33, 높이 64.67 / 360: y 749, 높이 31 */
const BottomFade = styled(Layer)`
  ${media.tablet} {
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    height: 64.67px;
    background-image: linear-gradient(
      transparent,
      ${({ theme }) => theme.palette.white}
    );
  }

  ${media.mobile} {
    height: 31px;
  }
`;

/*
 * 제목 이미지 + 부제.
 * 제목 이미지는 그림자(빛)까지 포함한 크기라 시안의 그룹 상자보다 조금 크다.
 * - 1920: 이미지 y 127.28, 1171.3×243.85, 부제 y 369.67(이미지 아래와 1.46px 겹친다)
 * - 834: 이미지 y 219.79, 721.85×150.28, 부제 y 381.93
 * - 360: 이미지 y 180, 330.85×68.88, 부제 y 254.32
 */
const Heading = styled.div`
  position: absolute;
  top: ${d(127.28)};
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet} {
    top: 219.79px;
  }

  ${media.mobile} {
    top: 180px;
  }
`;

const Title = styled.h1`
  position: relative;
  margin: 0;
  display: block;
  flex-shrink: 0;
  width: ${d(1171.3)};
  aspect-ratio: 1171.3 / 243.85;

  ${media.tablet} {
    width: 721.85px;
  }

  /* 320px 화면에서도 좌우 여백(시안 14.58px)을 남기고 줄어든다 */
  ${media.mobile} {
    width: min(330.85px, calc(100% - 29.15px));
  }
`;

/* 그라데이션 글자: #0475E6 → #0067CD(가운데) → #0475E6 */
const Subtitle = styled.p`
  box-sizing: border-box;
  margin: calc(-1 * ${d(1.46)}) 0 0;
  width: ${d(922.61)};
  max-width: calc(100% - 32px);
  font-size: ${d(24)};
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: calc(-1 * ${d(0.24)});
  text-align: center;
  word-break: normal; /* Figma처럼 음절 단위로 줄바꿈 */
  color: ${({ theme }) => theme.palette.hackathon_top_subtitle};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.palette.hackathon_top_subtitle},
    ${({ theme }) => theme.palette.hackathon_top_subtitle_mid} 50%,
    ${({ theme }) => theme.palette.hackathon_top_subtitle}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (forced-colors: active) {
    background-image: none;
    -webkit-text-fill-color: currentColor;
  }

  ${media.tablet} {
    width: auto;
    margin-top: 11.86px;
    ${hackathonFont(26.182, 600, '1.6', -0.2618)};
  }

  ${media.mobile} {
    margin-top: 5.44px;
    ${hackathonFont(12, 600, '1.6', -0.12)};
  }
`;

/*
 * 화면 아래에 고정되는 날짜 + 지원 버튼.
 * 위치는 시안 첫 화면에서의 자리(배너 아래 끝에서 띄운 거리)를 화면 아래 기준으로 옮겼다.
 * - 1920·834: 배너 1080 중 y 963, 높이 81 → 아래에서 36px. 여백 왼쪽 28 오른쪽 10 위아래 10, 간격 24
 * - 360: 배너 780 중 y 703, 높이 53 → 아래에서 24px. 여백 왼쪽 20 오른쪽 6 위아래 6, 간격 12
 * 헤더(z-index 5000)와 모바일 메뉴(4999)보다 아래에 둔다.
 */
const Pill = styled.div`
  position: fixed;
  z-index: 4000;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 10px 10px 10px 28px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.grey_100};
  filter: drop-shadow(
    0 4px 8px ${({ theme }) => theme.palette.hackathon_top_pill_shadow}
  );
  white-space: nowrap;

  ${media.mobile} {
    bottom: 24px;
    gap: 12px;
    padding: 6px 6px 6px 20px;
  }
`;

const DateText = styled.span`
  color: ${({ theme }) => theme.palette.grey_800};
  ${hackathonFont(24, 500, 28.8, -0.36)};

  ${media.mobile} {
    ${hackathonFont(16, 500, 28.8, -0.36)};
  }
`;

const ApplyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.palette.white};
  filter: drop-shadow(
    0 0 6px ${({ theme }) => theme.palette.hackathon_top_button_shadow}
  );
  color: ${({ theme }) => theme.palette.grey_1000};
  ${hackathonFont(24, 600, 28.8, -0.36)};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.chemistry_29th_point};
    outline-offset: 2px;
  }

  ${media.mobile} {
    padding: 6px 14px;
    ${hackathonFont(16, 600, 28.8, -0.36)};
  }
`;

export default TopBanner;
