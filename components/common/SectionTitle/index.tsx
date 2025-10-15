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
  caution?: string;
  align?: 'flex-start' | 'center' | 'right';
}

function SectionTitle({
  className,
  fontColor = 'white',
  subFontColor = 'white_50',
  title = '',
  subTitle = '',
  align = 'flex-start',
  caution,
}: SectionTitleProps): ReactElement {
  return (
    <TitleBox align={align}>
      <StyledTitle className={className} fontColor={fontColor}>
        {title}
      </StyledTitle>
      <StyledSubTitle subFontColor={subFontColor}>{subTitle}</StyledSubTitle>
      {caution && (
        <CautionText subFontColor={subFontColor}>{caution}</CautionText>
      )}
    </TitleBox>
  );
}

const TitleBox = styled.div<{ align: 'flex-start' | 'center' | 'right' }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};

  ${media.mobile} {
    margin: 0 12px;
  }
`;

const StyledSubTitle = styled.span<{ subFontColor: PaletteKeyTypes }>`
  margin-top: 8px;
  color: ${({ theme, subFontColor }) => theme.palette[subFontColor]};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  white-space: nowrap;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
    white-space: break-spaces;
  }
`;

const StyledTitle = styled.span<{ fontColor: PaletteKeyTypes }>`
  color: ${({ theme, fontColor }) => theme.palette[fontColor]};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  white-space: pre-line;

  ${media.mobile} {
    width: max-content;
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
    white-space: break-spaces;
  }
`;

const CautionText = styled.span<{ subFontColor: PaletteKeyTypes }>`
  color: ${({ theme, subFontColor }) => theme.palette[subFontColor]};
  ${({ theme }) => theme.textStyleV2.resp.caption_md};
  margin-top: 6px;
  white-space: pre-line;

  ${media.mobile} {
    width: max-content;
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
    white-space: break-spaces;
  }
`;

export default SectionTitle;
