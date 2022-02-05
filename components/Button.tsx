import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

interface IButtonStyle {
  width?: number;
  height?: number;
  fontColor: 'white' | 'black';
  buttonColor: PaletteKeyTypes;
  borderColor: 'white' | 'lightGray';
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonStyle {
  className?: string;
  children: ReactNode;
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
  border-radius: 150px;

  ${({ width, height }) =>
    css`
      width: ${width}px;
      height: ${height}px;
    `};

  ${({ theme, fontColor, buttonColor, borderColor }) => {
    return {
      color: theme.palette[fontColor],
      backgroundColor: theme.palette[buttonColor],
      border: `1px solid ${theme.palette[borderColor]}}`,
    };
  }};

  /* 반응형 */
  ${media.desktop} {
    ${({ theme }) => theme.textStyle.web.Button}
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Button}
  }
`;

export default Button;
