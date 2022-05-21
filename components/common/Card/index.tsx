import type { ReactNode } from 'react';
import styled from 'styled-components';

export interface CardStyle {
  width: number;
  height: number;
}

export interface CardProps extends CardStyle {
  className?: string;
  children: ReactNode;
}

function Card({ className, children, ...rest }: CardProps) {
  return (
    <StyledCard className={className} {...rest}>
      {children}
    </StyledCard>
  );
}

export const StyledCard = styled.div<CardStyle>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  overflow: hidden;
  will-change: transform;

  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
  );
  transition: filter 0.5s;
  :hover {
    filter: drop-shadow(
      0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
    );
  }
`;

export default Card;
