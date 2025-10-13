import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import RecuitBtn from '../RecuitBtn';

const Banner27th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Banner27thTextContentBox className={mounted ? 'appear' : ''}>
        <TextBox>
          <BannerTitleBox>채용 타이틀을 입력해주세요</BannerTitleBox>
          <BannerSubTitleBox>세부 설명이 들어갑니다</BannerSubTitleBox>
        </TextBox>
      </Banner27thTextContentBox>

      <BannerBackgroundInner className={mounted ? 'appear' : ''}>
        <RecuitBtn />
      </BannerBackgroundInner>
    </>
  );
};

export default Banner27th;

const BannerBackgroundInner = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;

  &.appear {
    opacity: 1;
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/27th/banner_home_pc_tablet.png');

  ${media.mobile} {
    background-image: url('/assets/images/27th/banner_home_mobile.png');
  }

  ${media.small} {
    background-image: url('/assets/images/27th/banner_home_mobile.png');
  }
`;

const TextBox = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  ${media.tablet} {
    top: 220px;
  }
`;

const Banner27thTextContentBox = styled.div`
  position: relative;
  left: 50%;
  z-index: 20;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  transition: transform 1s ease, opacity 1s ease;
  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;

  &.appear {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
`;

const BannerTitleBox = styled.h1`
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.head_lg};
  color: ${({ theme }) => theme.palette.white_100};

  ${media.tablet} {
    ${({ theme }) => theme.textStyleV2.resp.head_md};
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.head_sm};
  }
`;

const BannerSubTitleBox = styled.div`
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  color: ${({ theme }) => theme.palette.white_70};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;
