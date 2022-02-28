import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import media from 'styles/media';

interface NewsCardProps {
  data: any; // 임시
  className?: string;
}

function NewsCard({ data, className }: NewsCardProps): ReactElement {
  const { image, link, content } = data;

  const handleClickCard = () => {
    window.open(link, '_blank');
  };

  return (
    <StyledNewsCard className={className} onClick={handleClickCard}>
      <ImageWrapper>
        <div className="image-scale-wrapper">
          <Image src={image} layout="fill" />
        </div>
      </ImageWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </StyledNewsCard>
  );
}

const StyledNewsCard = styled.div`
  display: inline-block;
  width: 380px;
  height: 515px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  margin: 15px;

  transition: filter 1s;
  :hover {
    filter: drop-shadow(
      0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
    );
    .image-scale-wrapper {
      transform: scale(1.1);
    }
  }

  ${media.mobile} {
    width: 335px;
    height: 471px;
  }
`;

const ImageWrapper = styled.div`
  height: 379px;
  overflow: hidden;

  .image-scale-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.7s;
  }

  ${media.mobile} {
    height: 355px;
  }
`;

const ContentWrapper = styled.div`
  height: 88px;
  padding: 24px;
  text-overflow: ellipsis;

  ${({ theme }) => theme.textStyle.web.NewsCard_Text};
  ${media.mobile} {
    height: 72px;
    padding: 22px;
    ${({ theme }) => theme.textStyle.mobile.NewsCard_Text};
  }
`;

export default NewsCard;
