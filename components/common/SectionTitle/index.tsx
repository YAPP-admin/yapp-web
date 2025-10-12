import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

interface SectionTitleProps {
  className?: string;
  fontColor?: PaletteKeyTypes;
  subFontColor?: PaletteKeyTypes;
  title?: string;
  subTitle?: string;
  align?: 'left' | 'center' | 'right';
}

function SectionTitle({
  className,
  fontColor = 'white',
  subFontColor = 'white_50',
  title = '',
  subTitle = '',
  align = 'left',
}: SectionTitleProps): ReactElement {
  return (
    <TitleBox align={align}>
      <StyledTitle className={className} fontColor={fontColor}>
        {title}
      </StyledTitle>
      <StyledSubTitle subFontColor={subFontColor}>{subTitle}</StyledSubTitle>
    </TitleBox>
  );
}

const TitleBox = styled.div<{ align: 'left' | 'center' | 'right' }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
`;

const StyledSubTitle = styled.span<{ subFontColor: PaletteKeyTypes }>`
  margin-top: 8px;
  color: ${({ theme, subFontColor }) => theme.palette[subFontColor]};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  white-space: pre;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

const StyledTitle = styled.span<{ fontColor: PaletteKeyTypes }>`
  color: ${({ theme, fontColor }) => theme.palette[fontColor]};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  white-space: pre;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

export default SectionTitle;
