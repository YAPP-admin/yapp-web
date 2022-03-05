import React from 'react';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
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
      <ImageWrapper>
        <div className="image-scale-wrapper">
          <Image src={image} layout="fill" />
        </div>
      </ImageWrapper>
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

  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
  );

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
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

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
