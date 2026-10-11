import { css, keyframes } from 'styled-components';

/**
 * 이미지 위에 놓인 어두운 글자에 쓴다.
 *
 * 브라우저가 강제로 다크모드를 적용하면 글자색은 밝게 뒤집히지만 이미지는 그대로 남는다.
 * 그래서 밝은 이미지 위의 어두운 글자가 밝아져 읽기 어려워진다.
 * 글자를 글자색 대신 같은 색의 배경으로 칠하면 색이 뒤집히지 않고 그대로 남는다
 * (어두운 배경색은 강제 다크모드에서도 어둡게 유지된다). 라이트 화면에서 보이는 결과는 같다.
 *
 * 흰 글자에는 쓰지 않는다. 밝은 배경색은 어둡게 바뀌므로 흰 글자가 어두워진다.
 */
export const darkTextOnImage = css`
  background-image: linear-gradient(currentColor, currentColor);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  /* 고대비 모드에서는 배경이 지워지므로 글자색으로 되돌린다 */
  @media (forced-colors: active) {
    background-image: none;
    -webkit-text-fill-color: currentColor;
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  0% {
      transform: translateY(100%)
  }

  to {
      opacity: 1
  }
`;

export const slideOut = keyframes`
  to {
      transform: translateY(-100%);
      opacity: 0
  }
`;
