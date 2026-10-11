import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';
import { darkTextOnImage } from 'styles/utils-styles';

interface BannerProps {
  backgroundImg?: string;
  backgroundImgTablet?: string;
  backgroundImgMobile?: string;
  className?: string;
  title?: string;
  description?: string;
  /** 한 줄로 쓰면 배경의 캐릭터와 겹칠 만큼 긴 설명. 1201~1600px에서만 정해진 자리에서 줄을 바꾼다 */
  wrapDescriptionOnLaptop?: boolean;
}

function Banner({
  className,
  backgroundImg = '/assets/images/29th/project_page_pc.webp',
  backgroundImgTablet = '/assets/images/29th/project_page_tablet.webp',
  backgroundImgMobile = '/assets/images/29th/project_page_mo.webp',
  title,
  description,
  wrapDescriptionOnLaptop = false,
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
        <StyledDescription $wrapOnLaptop={wrapDescriptionOnLaptop}>
          {description}
        </StyledDescription>
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
  /* 시안: 모든 폭에서 높이 330px. 높이가 늘면 배경 그림이 그만큼 확대된다 */
  box-sizing: border-box;
  min-height: 330px;
  padding: 146px 0 93px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  /*
   * 시안(1440 화면): 글은 한 줄씩, 위에서 146px.
   * 설명을 두 줄로 쓰는 페이지도 330px 안에 들어오게, 가운데 맞춤 대신 위에서부터 놓고 아래 여백을 줄인다.
   */
  ${media.custom(1600)} {
    justify-content: flex-start;
    padding: 146px 0 48px 0;
  }

  /*
   * 1330px보다 좁아지면 한 줄 글자가 캐릭터에 닿는다. 배경을 오른쪽으로 조금씩 밀어(1201px에서 50px) 사이를 띄운다.
   * 캐릭터 오른쪽에는 빈 하늘이 74px 있어서 밀어도 캐릭터는 잘리지 않는다.
   */
  ${media.custom(1329)} {
    background-position: right calc((100vw - 1330px) * 0.39) center;
  }

  ${media.tablet} {
    justify-content: center;
    padding: 146px 0 93px 0;
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
  ${darkTextOnImage}
  /* 글자 끝이 상자 밖으로 1px쯤 나가는 글리프가 잘리지 않게 칠할 자리를 좌우 2px씩 넓힌다 (바깥 여백을 그만큼 줄여 글자 자리는 그대로) */
  padding-inline: 2px;
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  white-space: nowrap;
  margin: 0 -2px;

  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
    white-space: pre-line;
    margin: 0 22px;
  }
`;

const StyledDescription = styled.p<{ $wrapOnLaptop: boolean }>`
  color-scheme: only light;
  color: ${({ theme }) => theme.palette.chemistry_29th_point};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 0;

  animation: ${slideUp} 0.6s ease forwards;
  animation-delay: 0.2s;

  ${media.custom(1600)} {
    white-space: ${({ $wrapOnLaptop }) =>
      $wrapOnLaptop ? 'pre-line' : 'nowrap'};
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
