import { Box } from 'components/common';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const Banner26th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Banner26thTextContentBox className={mounted ? 'appear' : ''}>
        <BannerTitleBox>
          <StyledBox width={143} height={35} borderRadius={999} color="white">
            26th Recruiting
          </StyledBox>
          <h3>
            <BannerSubTitleBox>
              <span>야뿌 동산에</span> <MoYappBox />
            </BannerSubTitleBox>
            26기에 함께 할 야뿌를 찾습니다
          </h3>
        </BannerTitleBox>
      </Banner26thTextContentBox>

      <BannerBackgroundInner className={mounted ? 'appear' : ''} />
    </>
  );
};

export default Banner26th;

const BannerBackgroundInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(1.2);
  opacity: 0;
  transition: transform 2s ease, opacity 2s ease;

  &.appear {
    transform: scale(1);
    opacity: 1;
  }

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('/assets/images/26th/banner-pc.png');

  ${media.mobile} {
    background-image: url('/assets/images/26th/banner-tablet.png');
  }

  ${media.small} {
    background-image: url('/assets/images/26th/banner-mobile.png');
  }
`;

const Banner26thTextContentBox = styled.div`
  position: absolute;
  top: 10.4rem;
  left: 50%;
  z-index: 20;
  flex: 1;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 43px;

  transition: transform 2s ease, opacity 2s ease;
  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;

  &.appear {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
  ${media.small} {
    top: 8.4rem;
  }
`;

const BannerTitleBox = styled.div`
  display: flex;
  gap: 1.6rem;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h3 {
    margin: 0;
    text-align: center;
    font-size: 6rem;
    font-weight: 800;
    line-height: 140%;
    letter-spacing: -4%;
    color: ${({ theme }) => theme.palette.black};
  }
  ${media.mobile} {
    & > h3 {
      font-size: 5.4rem;
    }
  }
  ${media.small} {
    gap: 1.2rem;
    & > h3 {
      font-size: 2.6rem;
    }
  }
`;

const BannerSubTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    font-size: 5.6rem;
  }
  ${media.mobile} {
    & > span {
      font-size: 5rem;
    }
  }
  ${media.small} {
    & > span {
      font-size: 2.2rem;
    }
  }
`;
const MoYappBox = styled.div`
  width: 411px;
  height: 92px;
  background: url('/assets/images/26th/moyapp.png') no-repeat center;

  ${media.small} {
    width: 193px;
    height: 43.15px;
    background: url('/assets/images/26th/moyapp-mobile.png') no-repeat center;
  }
`;

const StyledBox = styled(Box)`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -2%;
  text-align: center;
  line-height: 35px;

  ${media.small} {
    width: 108px;
    height: 29px;
    font-size: 1.1rem;
    line-height: 29px;
  }
`;
