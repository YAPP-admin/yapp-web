import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

interface IBadgeStyle {
  backgroundColor?: PaletteKeyTypes;
}

interface BadgeProps extends IBadgeStyle {
  className?: string;
  children: ReactNode;
}

function Badge({
  className,
  children,
  backgroundColor = 'grey_100',
}: BadgeProps): ReactElement {
  return (
    <StyledBadge className={className} backgroundColor={backgroundColor}>
      {children}기
    </StyledBadge>
  );
}

const StyledBadge = styled.div<IBadgeStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 37px;
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.grey_1000};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};

  ${({ theme }) => theme.textStyle.web.Body_1};
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1};
  }
`;

export default Badge;
