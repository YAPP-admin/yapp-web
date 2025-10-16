import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

export interface IButtonStyle {
  variant: 'primary' | 'black';
  borderRadius?: number;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonStyle {
  children?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  children,
  className,
  onClick,
  ...rest
}: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<IButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 8px 20px;
  transition: transform 0.2s ease, background-color 0.2s ease;

  ${({ theme, borderRadius = 99, variant }) => css`
    background-color: ${variant === 'primary'
      ? theme.palette.white
      : theme.palette.black_100};

    border-radius: ${borderRadius}px;
    color: ${variant === 'primary'
      ? theme.palette.black_100
      : theme.palette.white_100};
  `};

  /* Text Style */
  ${({ theme }) => theme.textStyleV2.resp.body_point_md}
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm}
  }

  &:hover {
    transform: scale(1.1);
    ${({ theme, variant }) => css`
      background-color: ${variant === 'black' && theme.palette.black_70};
    `};
    ${({ theme, variant }) => css`
      opacity: ${variant === 'primary' && 0.6};
    `};
  }

  &:active {
    transform: scale(0.9);
    ${({ variant }) => css`
      opacity: ${variant === 'primary' && 1};
    `};
  }

  &:disabled {
    cursor: not-allowed;
    transform: none;
  }
`;

export default Button;
