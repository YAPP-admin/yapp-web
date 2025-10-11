import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

export interface IButtonStyle {
  width?: number;
  height?: number;
  hasBorder?: boolean;
  borderRadius?: number;
  buttonColor?: PaletteKeyTypes;
  borderColor?: PaletteKeyTypes;
  fontColor?: PaletteKeyTypes;
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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 8px 20px;

  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
    `};

  ${({
    theme,
    fontColor = 'black',
    buttonColor = 'white',
    hasBorder = false,
    borderRadius = 99,
    borderColor = 'white',
  }) => css`
    border-radius: ${borderRadius}px;
    color: ${theme.palette[fontColor]};
    background-color: ${theme.palette[buttonColor]};
    border: ${hasBorder ? '1px solid' : 'none'};
    border-color: ${theme.palette[borderColor]};
  `};

  /* Text Style */
  ${({ theme }) => theme.textStyleV2.resp.body_point_md}
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm}
  }

  &:hover {
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
