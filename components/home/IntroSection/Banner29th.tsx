import styled, { keyframes } from 'styled-components';
import media from 'styles/media';
import Image from 'next/image';

/* 등장 효과는 CSS로만 준다. 스크립트가 실행되기 전에도 첫 화면이 보여야 한다 */
const Banner29th = () => {
  return (
    <BannerLayout>
      <Banner29thTitleBox>
        <Image
          src="/assets/images/29th/title_pc.png"
          alt="Play Our CHEMISTRY - 새로운 무대의 시작, YAPP 29기에서 함께해요!"
          width={928}
          height={262}
          sizes="(max-width: 833px) 90vw, (max-width: 1920px) 928px, 49vw"
          priority
        />
      </Banner29thTitleBox>

      <BannerBackgroundInner />
    </BannerLayout>
  );
};

export default Banner29th;

/*
 * 세로로 긴 화면에서만 태블릿·모바일용 배경을 쓴다 (가로로 눕힌 기기는 PC 배경이 맞다).
 * 모바일 배경(360x780)은 휴대폰처럼 길쭉한 화면(가로:세로 13:20 이하)에만 쓴다.
 * 태블릿 세로(768x1024 등)에 쓰면 크게 확대돼 아래쪽 캐릭터가 잘린다.
 */
const tabletPortrait = `${media.tablet} and (orientation: portrait)`;
const mobilePortrait = `${media.mobile} and (max-aspect-ratio: 13/20)`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const titleIn = keyframes`
  to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
`;

const floatY = keyframes`
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 10px, 0);
  }
`;

const BannerLayout = styled.div`
  position: relative;

  /*
   * --banner-unit: 배경 시안의 1px에 해당하는 길이 (배경이 cover로 채워질 때의 배율)
   * --art-height: 배경 시안의 높이
   * --title-top, --title-width: 배경 시안에서 타이틀의 위쪽 위치와 폭
   */
  --banner-unit: max(100vw / 1920, 100vh / 1200);
  --art-height: 1200;
  --title-top: 201;
  --title-width: 928;

  /*
   * 화면이 낮아서 배경이 위아래로 넘칠 때 배경을 위로 올리는 양.
   * 가운데 맞춤을 기본으로 하되, 타이틀이 고정 헤더(높이 60~64px)에 가리지 않도록
   * 타이틀 위쪽이 80px보다 올라가지 않는 선에서 멈춘다.
   */
  --banner-shift: max(
    0px,
    min(
      (var(--banner-unit) * var(--art-height) - 100vh) / 2,
      var(--banner-unit) * var(--title-top) - 80px
    )
  );

  ${tabletPortrait} {
    --banner-unit: max(100vw / 834, 100vh / 1200);
    --title-top: 214;
    --title-width: 603;
  }

  ${mobilePortrait} {
    --banner-unit: max(100vw / 360, 100vh / 780);
    --art-height: 780;
    --title-top: 205;
    --title-width: 291;
  }
`;

const BannerBackgroundInner = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center calc(var(--banner-shift) * -1);
  background-image: url('/assets/images/29th/banner_home_pc.webp');

  ${tabletPortrait} {
    background-image: url('/assets/images/29th/banner_home_tablet.webp');
  }

  ${mobilePortrait} {
    background-image: url('/assets/images/29th/banner_home_mobile.webp');
  }
`;

const Banner29thTitleBox = styled.div`
  position: absolute;
  left: 50%;
  /* 배경이 화면에 맞춰 커지거나 잘려도 시안의 타이틀 자리를 따라간다 */
  top: calc(var(--banner-unit) * var(--title-top) - var(--banner-shift));
  z-index: 20;
  /* 좁고 긴 화면에서 배경이 크게 확대돼도 타이틀이 화면 밖으로 나가지 않게 한다 */
  width: min(calc(var(--banner-unit) * var(--title-width)), 90vw);

  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;
  /* 위에서 내려오며 나타난 뒤, 위아래로 천천히 떠 있는다 */
  animation: ${titleIn} 1s ease forwards,
    ${floatY} 1s ease-in-out 1s infinite alternate;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
