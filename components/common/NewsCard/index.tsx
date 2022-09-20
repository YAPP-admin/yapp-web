import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import DOMPurify from 'isomorphic-dompurify';
import { AnimatedImage } from 'components/common';
import media from 'styles/media';

interface NewsCardProps {
  data: {
    image: string;
    link: string;
    content: string;
  };
  className?: string;
}

function NewsCard({ data, className }: NewsCardProps): ReactElement {
  const { image, link, content } = data;

  const handleClickCard = () => {
    window.open(link, '_blank');
  };

  return (
    <StyledNewsCard className={className} onClick={handleClickCard}>
      <AnimatedImage
        className="news-card-image"
        src={image}
        alt="news-image"
        height={379}
      />
      <ContentWrapper
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
    </StyledNewsCard>
  );
}

const StyledNewsCard = styled.div`
  display: inline-block;
  width: 380px;
  height: 515px;
  border-radius: 25px;
  margin: 15px;
  background-color: ${({ theme }) => theme.palette.white};
  cursor: pointer;
  overflow: hidden;
  will-change: transform;

  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
  );
  transition: filter 1s;
  :hover {
    filter: drop-shadow(
      0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '30'}
    );

    .image-scale-wrapper {
      transform: scale(1.05);
    }
  }

  ${media.mobile} {
    width: 335px;
    height: 471px;
  }

  > .news-card-image {
    ${media.mobile} {
      height: 335px;
    }
  }
`;

const ContentWrapper = styled.div`
  height: 60px;
  padding: 25px;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.textStyle.web.NewsCard_Text};
  ${media.mobile} {
    height: 50px;
    padding: 22px;
    ${({ theme }) => theme.textStyle.mobile.NewsCard_Text};
  }
`;

export default NewsCard;
