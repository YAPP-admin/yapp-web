import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface BannerProps {
  backgroundImg?: string;
  className?: string;
  title?: string;
  description?: string;
}

function Banner({
  className,
  backgroundImg = '',
  title,
  description,
}: BannerProps): ReactElement {
  return (
    <StyledBox backgroundImg={backgroundImg} className={className}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledBox>
  );
}

const StyledBox = styled.div<BannerProps>`
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: ${({ theme, backgroundImg }) =>
    !backgroundImg && theme.palette.grey_800};
  padding: 146px 0 93px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  margin: 0 80px;
  white-space: nowrap ${media.mobile} {
    white-space: pre-line;
  }
`;

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.palette.white_50};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  margin: 0 80px;
  white-space: nowrap ${media.mobile} {
    white-space: pre-line;
  }
`;

export default Banner;
