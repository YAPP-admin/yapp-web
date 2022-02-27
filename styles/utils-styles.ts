import { keyframes } from 'styled-components';

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
