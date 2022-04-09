import { Button } from 'components';
import DOMPurify from 'isomorphic-dompurify';
import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styles/media';
import { slideIn, slideOut } from 'styles/utils-styles';

function RecruitBanner(): ReactElement {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, buttonName, description } = BannerInfo;

  return (
    <RecruitBannerContainer>
      <BannerInner>
        <BannerTitle
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
        />
        <BannerDescription
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
        {/* <ButtonBlock target="_blank" href={Yapp.YAPP_RECRUIT} rel="noreferrer"> <<- 활성화 시킬려면 주석 해제 */}
        <ButtonBlock>
          {/* <RecruitButton
            width={168}
            height={65}
            fontColor="black"
            buttonColor="grey_850"
            borderColor="lightGrey"
          >
            <svg
              width="172px"
              height="65px"
              viewBox="0 0 168 65"
              className="border"
            >
              <rect x="-0.9" y="1" width="167" height="63" rx="32" ry="32" />
            </svg>

            <span className="textgroup">
              <span className="mainText">{buttonName}</span>
              <span className="cloneText">{buttonName}</span>
            </span>
          </RecruitButton> */}

          <RecruitButton
            width={190}
            height={65}
            fontColor="black"
            buttonColor="grey_850"
            borderColor="lightGrey"
            isDisabled
          >
            <svg
              width="192px"
              height="65px"
              viewBox="0 0 190 65"
              className="border"
            >
              <rect x="-0.9" y="1" width="188" height="63" rx="32" ry="32" />
            </svg>
            <span className="textgroup">
              <span className="mainText">21기에서 만나요!</span>
              <span className="cloneText">21기에서 만나요!</span>
            </span>
          </RecruitButton>
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
  padding: 120px 0 100px;
  .mobile {
    display: none;
  }
  ${media.tablet} {
    width: auto;
    padding: 164px 80px 100px;
  }
  ${media.mobile} {
    padding: 80px 20px 64px 20px;
    margin-bottom: 56px;
    .desktop {
      display: none;
    }
  }

  ${media.custom(420)} {
    .mobile {
      display: block;
    }
  }
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Head};
  color: ${({ theme }) => theme.palette.grey_1000};
  margin-bottom: 24px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Head};
  }
`;

const BannerDescription = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  color: ${({ theme }) => theme.palette.grey_900};
  margin-bottom: 56px;
  ${media.tablet} {
    margin-bottom: 103px;
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1}
    margin-bottom:32px;
  }
`;

const ButtonBlock = styled.a`
  display: block;
  ${media.mobile} {
    display: flex;
    justify-content: center;
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 20px;
    fill: none;
    stroke: ${({ theme }) => theme.palette.orange_400};
    stroke-width: 2px;
    stroke-dasharray: 168 480;
    stroke-dashoffset: 168;
    transition: 1s ease-in-out;
  }
`;

const RecruitButton = styled(Button)<{ isDisabled?: boolean }>`
  position: relative;
  text-align: center;
  cursor: pointer;
  ${({ isDisabled }) => isDisabled && `cursor: not-allowed;`}
  outline: none;
  transition: 1s ease-in-out;
  color: ${({ theme }) => theme.palette.white};

  .textgroup {
    position: relative;
  }

  .cloneText {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: inline-block;
  }

  &:hover {
    transition: 1s ease-in-out;
    background: ${({ theme }) => theme.palette.orange_400};
    svg {
      stroke-dashoffset: -480;
    }
    .mainText {
      animation: ${slideOut} 0.533s cubic-bezier(0.33, 0, 0.67, 1) forwards;
    }
    .cloneText {
      animation: ${slideIn} 0.567s cubic-bezier(0.22, 1, 0.36, 1) 0.367s
        forwards;
    }
    ${media.mobile} {
      svg {
        display: none;
      }
    }
  }

  ${media.mobile} {
    width: 112px;
    height: 56px;
    ${({ isDisabled }) => isDisabled && ` width: 160px;`}
  }
`;

export default RecruitBanner;
