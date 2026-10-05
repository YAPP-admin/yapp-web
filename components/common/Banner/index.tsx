import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';

interface BannerProps {
  backgroundImg?: string;
  backgroundImgTablet?: string;
  backgroundImgMobile?: string;
  className?: string;
  title?: string;
  description?: string;
}

function Banner({
  className,
  backgroundImg = '/assets/images/29th/project_page_pc.webp',
  backgroundImgTablet = '/assets/images/29th/project_page_tablet.webp',
  backgroundImgMobile = '/assets/images/29th/project_page_mo.webp',
  title,
  description,
}: BannerProps): ReactElement {
  return (
    <StyledBox
      backgroundImg={backgroundImg}
      backgroundImgTablet={backgroundImgTablet}
      backgroundImgMobile={backgroundImgMobile}
      className={className}
    >
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
  /* PC 배경은 캐릭터가 오른쪽에 있어서, 화면이 좁아져도 오른쪽이 잘리지 않게 맞춘다 */
  background-position: right center;
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

  ${media.tablet} {
    background-position: center;
    background-image: url(${({ backgroundImgTablet }) => backgroundImgTablet});
  }

  /* 시안: 360 화면에서 높이 330px (글자 두 줄씩) */
  ${media.mobile} {
    padding: 130px 0 64px 0;
    background-image: url(${({ backgroundImgMobile }) => backgroundImgMobile});
  }
`;

const InnerTextContainer = styled.div`
  max-width: 1040px;
  margin: 0 80px;
  display: flex;
  flex-direction: column;
  /* 좌우 여백 80px을 뺀 폭 (1201~1360px 화면에서 글자가 왼쪽 끝에 붙지 않도록) */
  width: calc(100% - 160px);
  align-items: flex-start;
  gap: 8px;

  ${media.mobile} {
    width: 100%;
    margin: 0;
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
  color-scheme: only light;
  color: ${({ theme }) => theme.palette.chemistry_29th_text};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0;

  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;

  /* 1201~1600px에서는 한 줄 글자가 배경의 캐릭터와 겹치므로 정해진 자리에서 줄을 바꾼다 */
  ${media.custom(1600)} {
    white-space: pre-line;
  }

  ${media.tablet} {
    white-space: nowrap;
  }

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
    white-space: pre-line;
    margin: 0 24px;
  }
`;

const StyledDescription = styled.p`
  color-scheme: only light;
  color: ${({ theme }) => theme.palette.chemistry_29th_point};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0;

  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;

  ${media.custom(1600)} {
    white-space: pre-line;
  }

  ${media.tablet} {
    white-space: nowrap;
  }

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
    white-space: pre-line;
    margin: 0 24px;
  }
`;

export default Banner;
