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
          width={926}
          height={268}
          sizes="(max-width: 833px) 90vw, (max-width: 1920px) 926px, 49vw"
          /* 가는 오선과 글자 윤곽이 기본값(75)에서는 뭉개진다 */
          quality={90}
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

/* 위에서 아래로 흰색이 옅어지는 4x96 PNG */
const WHITE_FADE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAABgCAYAAAA6lNMyAAAATElEQVR42s2OMQ4AIAgDq/H/H1asq3ExIUXseLkWCkliSwMwTtCvRghQnLWc1+2TisNIqoRsKMD8ZHRGGEmVN4BPNhyGoiIHFUcUxgIa32B1EunPrwAAAABJRU5ErkJggg==';

const BannerLayout = styled.div`
  position: relative;

  /*
   * 배너 바로 아래에 흰색이 옅어지는 띠를 깐다. 아래 구역이 흰 배경이라 평소에는 보이지 않는다.
   * 브라우저가 강제로 다크모드를 적용하면 아래 구역만 어두워져 밝은 배너와 딱 잘려 보이는데,
   * 그림은 색이 바뀌지 않으므로 이 띠가 배너에서 어두운 배경으로 이어지는 경계를 풀어 준다.
   * (CSS 그라데이션은 강제 다크모드에서 같이 어두워져 쓸 수 없다)
   */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    height: min(140px, 20vh);
    background: url(${WHITE_FADE}) 0 0 / 100% 100% no-repeat;
    pointer-events: none;
  }

  /*
   * 배경은 화면 폭에 맞추고 시안 비율 그대로 보여 준다. 화면 높이에 맞추지 않으므로 어떤 화면에서도 잘리지 않는다.
   * 대신 화면 비율이 시안과 다르면 배너가 첫 화면보다 길거나 짧다.
   *
   * --banner-unit: 배경 시안의 1px에 해당하는 길이
   * --art-height: 배경 시안의 높이
   * --title-top, --title-width: 배경 시안에서 타이틀의 위쪽 위치와 폭
   */
  --banner-unit: calc(100vw / 1920);
  --art-height: 1200;
  --title-top: 201;
  --title-width: 926;

  ${tabletPortrait} {
    --banner-unit: calc(100vw / 834);
    --title-top: 214;
    --title-width: 603;
  }

  ${mobilePortrait} {
    --banner-unit: calc(100vw / 360);
    --art-height: 780;
    --title-top: 205;
    --title-width: 291;
  }
`;

const BannerBackgroundInner = styled.div`
  position: relative;
  width: 100vw;
  height: calc(var(--banner-unit) * var(--art-height));
  margin: 0 auto;

  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;

  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center top;
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
  /*
   * 배경이 화면 폭에 맞춰 커지거나 줄어도 시안의 타이틀 자리를 따라간다.
   * 눕힌 휴대폰처럼 배경이 아주 작아질 때는 고정 헤더(높이 60~64px)에 가리지 않게 72px 아래로는 올리지 않는다.
   */
  top: max(72px, calc(var(--banner-unit) * var(--title-top)));
  z-index: 20;
  width: calc(var(--banner-unit) * var(--title-width));

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
