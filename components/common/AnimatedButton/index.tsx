import styled, { css } from 'styled-components';
import media from 'styles/media';
import { slideIn, slideOut } from 'styles/utils-styles';
import Button, { ButtonProps } from '../Button';

export type AnimatedButtonVariant = 'primary' | 'secondary';

export interface AnimatedButtonProps extends ButtonProps {
  width: number;
  height: number;
  buttonText: string;
  href?: string;
  variant?: AnimatedButtonVariant;
}

function AnimatedButton({
  width,
  height,
  buttonText,
  href,
  variant = 'primary',
  ...rest
}: AnimatedButtonProps) {
  return (
    <ButtonStyled width={width} height={height} variant={variant} {...rest}>
      {/* <svg
        width={`${width + 2}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        className="border"
      >
        <rect
          x="-0.9"
          y="1"
          width={width}
          height={height - 2}
          rx="32"
          ry="32"
        />
      </svg> */}
      <span className="textgroup">
        <span className="mainText">{buttonText}</span>
        <span className="cloneText">{`모집 알림 신청`}</span>
      </span>
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)<{ variant?: AnimatedButtonVariant }>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  outline: none;
  transition: 1s ease-in-out;
  color: ${({ theme }) => theme.palette.white};

  .textgroup {
    position: relative;
  }

  .cloneText {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: inline-block;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 20px;
    fill: none;
    stroke: ${({ theme }) => theme.palette.orange_400};
    stroke-width: 2px;
    stroke-dasharray: 168 480;
    stroke-dashoffset: 168;
    transition: 1s ease-in-out;
  }

  &:hover {
    transition: 1s ease-in-out;
    ${({ variant }) =>
      variant === 'primary'
        ? css`
            background: ${({ theme }) => theme.palette.grey_900};
            color: ${({ theme }) => theme.palette.blue_200};
          `
        : css`
            background: ${({ theme }) => theme.palette.orange_400};
          `};

    svg {
      stroke-dashoffset: -480;
    }
    .mainText {
      animation: ${slideOut} 0.533s cubic-bezier(0.33, 0, 0.67, 1) forwards;
    }
    .cloneText {
      animation: ${slideIn} 0.567s cubic-bezier(0.22, 1, 0.36, 1) 0.367s
        forwards;
    }
    ${media.mobile} {
      svg {
        display: none;
      }
    }
  }
`;

export default AnimatedButton;
