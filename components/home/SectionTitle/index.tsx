import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

interface SectionTitleProps {
  children: string | ReactNode;
  className?: string;
  fontColor?: PaletteKeyTypes;
}

function SectionTitle({
  children,
  className,
  fontColor = 'black',
}: SectionTitleProps): ReactElement {
  return (
    <StyledSectionTitle className={className} fontColor={fontColor}>
      {children}
    </StyledSectionTitle>
  );
}

const StyledSectionTitle = styled.span<{ fontColor: PaletteKeyTypes }>`
  color: ${({ theme, fontColor }) => theme.palette[fontColor]};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

export default SectionTitle;
