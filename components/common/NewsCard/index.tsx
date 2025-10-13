import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import Image from 'next/image';
import { Medium } from 'types/medium';
import { PaletteKeyTypes } from 'styles/theme';

interface NewsCardProps {
  data: Medium;
  className?: string;
  color: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
}

function NewsCard({ data, color, fontColor }: NewsCardProps): ReactElement {
  const { thumbnail, title, url } = data;

  const handleClickCard = () => {
    window.open(url, '_blank');
  };

  return (
    <StyledNewsCard
      color={color}
      fontColor={fontColor}
      onClick={handleClickCard}
    >
      <ContentWrapper> {title}</ContentWrapper>
      <Image src={thumbnail} alt="news-image" width={330} height={160} />
    </StyledNewsCard>
  );
}

const StyledNewsCard = styled.div<{
  color: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 330px;
  min-height: 480px;
  border-radius: 25px;
  margin: 15px;
  background-color: ${({ theme, color }) => theme.palette[color]};
  color: ${({ theme, fontColor }) => theme.palette[fontColor]};
  cursor: pointer;
  overflow: hidden;

  ${media.mobile} {
    min-width: 240px;
    min-height: 320px;
  }

  & img {
    width: 100%;
    height: 240px;
    object-fit: cover;

    ${media.mobile} {
      width: 100%;
      height: 160px;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 60px;
  padding: 23px 24px;
  white-space: pre-line;

  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.textStyleV2.fix.font_24};
  ${media.mobile} {
    height: 40px;
    ${({ theme }) => theme.textStyleV2.fix.font_18};
  }
`;

export default NewsCard;
