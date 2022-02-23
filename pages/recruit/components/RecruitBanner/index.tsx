import { Button } from 'components';
import Breakpoints from 'constants/breakpoints';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function RecruitBanner(): ReactElement {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, buttonName, description } = BannerInfo;

  return (
    <RecruitBannerContainer>
      <BannerInner>
        <BannerTitle dangerouslySetInnerHTML={{ __html: title }} />
        <BannerDescription dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonBlock>
          <div className="center">
            <RecruitButton
              className="btn"
              width={174}
              height={78}
              fontColor="white"
              buttonColor="grey_850"
              borderColor="lightGray"
            >
              <svg
                width="174px"
                height="78px"
                viewBox="0 0 170 78"
                className="border"
              >
                <rect x="-0.9" y="0" width="172" height="78" rx="36" ry="36" />
              </svg>
              <span> {buttonName}</span>
            </RecruitButton>
          </div>
        </ButtonBlock>
      </BannerInner>
    </RecruitBannerContainer>
  );
}

const RecruitBannerContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.yellow_400};
`;

const BannerInner = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 164px 0 100px;
  .mobile {
    display: none;
  }
  ${media.tablet} {
    width: 100%;
    padding: 164px 81px 100px;
  }
  ${media.mobile} {
    padding: 80px 56px 64px 21px;
    min-width: ${Breakpoints.small}px;
    margin-bottom: 56px;
    .desktop {
      display: none;
    }
  }
  ${media.small} {
    .mobile {
      display: block;
    }
  }
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Head};
  margin-bottom: 24px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Head};
  }
`;

const BannerDescription = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1}
  margin-bottom:40px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1}
    margin-bottom:32px;
  }
`;

const ButtonBlock = styled.div`
  display: block;
  ${media.mobile} {
    display: flex;
    justify-content: center;
  }
  .center {
    width: 174px;
    height: 78px;
  }

  .btn {
    width: 174px;
    height: 78px;
    position: relative;
    text-align: center;
    cursor: pointer;
    outline: none;
    transition: 1s ease-in-out;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 20px;
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    stroke-dasharray: 174 480;
    stroke-dashoffset: 174;
    transition: 1s ease-in-out;
  }

  .btn:hover {
    transition: 1s ease-in-out;
    background: #f48132;
  }

  .btn:hover svg {
    stroke-dashoffset: -480;
  }

  .btn span {
    color: white;
  }
`;

const RecruitButton = styled(Button)`
  ${media.mobile} {
    width: 112px;
    height: 56px;
  }
`;

export default RecruitBanner;
