import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  fontColor: 'white' | 'black';
  buttonColor: 'white' | 'gray';
  borderColor: 'white' | 'lightGray';
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

const StyledButton = styled.button<ButtonProps>`
  display: block;
  padding: 24px 40px;
  border-radius: 150px;

  color: ${({ theme, fontColor }) => theme.palette[fontColor]};
  background-color: ${({ theme, buttonColor }) => theme.palette[buttonColor]};
  border: 1px solid ${({ theme, borderColor }) => theme.palette[borderColor]};

  /* 반응형 */
  ${media.desktop} {
    ${({ theme }) => theme.textStyle.web.Button}
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Button}
  }
`;

export default Button;
