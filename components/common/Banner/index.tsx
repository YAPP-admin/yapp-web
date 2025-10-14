import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';

interface BannerProps {
  backgroundImg?: string;
  className?: string;
  title?: string;
  description?: string;
}

function Banner({
  className,
  backgroundImg = '/assets/images/27th/banner_project_story.png',
  title,
  description,
}: BannerProps): ReactElement {
  return (
    <StyledBox backgroundImg={backgroundImg} className={className}>
      <InnerTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </InnerTextContainer>
    </StyledBox>
  );
}

const StyledBox = styled.div<BannerProps>`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-color: ${({ theme, backgroundImg }) =>
    !backgroundImg && theme.palette.grey_800};
  padding: 146px 0 93px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const InnerTextContainer = styled.div`
  max-width: 1200px;
  margin: 0 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 8px;

  ${media.tablet} {
    width: -webkit-fill-available;
  }

  ${media.mobile} {
    margin: 0 24px;
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0;

  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
    white-space: pre-line;
    margin: 0 24px;
  }
`;

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.palette.white_50};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0;

  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
    white-space: pre-line;
    margin: 0 24px;
  }
`;

export default Banner;
