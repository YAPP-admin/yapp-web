import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';

interface IFloatingButtonStyle {
  image: any;
}

export interface FloatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IFloatingButtonStyle {
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function FloatingButton({
  image,
  className,
  onClick,
  ...rest
}: FloatingButtonProps) {
  return (
    <StyledFloaingButton className={className} onClick={onClick} {...rest}>
      floating
    </StyledFloaingButton>
  );
}

const StyledFloaingButton = styled.button``;

export default FloatingButton;
