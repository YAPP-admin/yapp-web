import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes, TextStyleV2Types } from 'styles/theme';

interface IBadgeStyle {
  backgroundColor?: PaletteKeyTypes;
  typoColor?: PaletteKeyTypes;
}

interface BadgeProps extends IBadgeStyle {
  className?: string;
  children: ReactNode;
}

function Badge({
  className,
  children,
  backgroundColor = 'grey_100',
  typoColor = 'black_60',
}: BadgeProps): ReactElement {
  return (
    <StyledBadge
      className={className}
      backgroundColor={backgroundColor}
      typoColor={typoColor}
    >
      {children}
    </StyledBadge>
  );
}

const StyledBadge = styled.div<IBadgeStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
  color: ${({ theme, typoColor }) => typoColor && theme.palette[typoColor]};
  ${({ theme }) => theme.textStyleV2.resp.caption_md};
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;

export default Badge;
