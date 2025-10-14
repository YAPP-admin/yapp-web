import NextImage from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { Medium } from 'types/medium';

interface MediumCardProps {
  medium: Medium;
}

function MediumCard({ medium }: MediumCardProps): ReactElement {
  const { title, content, thumbnail, date, url } = medium;

  return (
    <Link
      href={url}
      scroll={false}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <MediumCardContainer>
        <ImageContainer>
          <StyledImage src={thumbnail} alt="project-image" fill />
        </ImageContainer>
        <MediumInfo>
          <MediumDate>{date}</MediumDate>
          <MediumTitle>{title}</MediumTitle>
          <MediumContent>{content}</MediumContent>
        </MediumInfo>
      </MediumCardContainer>
    </Link>
  );
}

const MediumCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    opacity: 0.6;
  }

  ${media.mobile} {
    flex-direction: row;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;

  ${media.mobile} {
    width: 100px;
    aspect-ratio: 1 / 1;
  }
`;

const MediumInfo = styled.section`
  width: 100%;
  margin: 0;

  ${media.small} {
    max-width: 260px;
  }

  ${media.xSmall} {
    max-width: 230px;
  }
`;

const MediumTitle = styled.h3`
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  color: ${({ theme }) => theme.palette.black_100};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;
const MediumDate = styled.span`
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.caption_md};
  color: ${({ theme }) => theme.palette.black_50};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;
const MediumContent = styled.p`
  width: 100%;
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.caption_md};
  color: ${({ theme }) => theme.palette.black_50};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;

const StyledImage = styled(NextImage)`
  object-fit: cover;
  border-radius: 8px;
`;

export default MediumCard;
