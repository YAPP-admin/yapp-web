import { AnimatedButton } from 'components/common';
import DOMPurify from 'isomorphic-dompurify';
import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function RecruitBanner() {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, buttonName, description } = BannerInfo;
  const buttonParams = IS_RECRUITING
    ? { width: 168, disabled: true }
    : { disabled: true, width: 190 };

  return (
    <RecruitBannerContainer>
      <BannerInner>
        <BannerTitle
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
        />
        <BannerDescription
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />

        <RecruitButton
          height={65}
          fontColor="black"
          buttonColor="grey_850"
          borderColor="lightGrey"
          variant="secondary"
          buttonText={buttonName}
          {...buttonParams}
        />
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

const RecruitButton = styled(AnimatedButton)<{ disabled?: boolean }>`
  ${media.mobile} {
    width: 112px;
    height: 56px;
    ${({ disabled }) => disabled && ` width: 160px;`}
  }
`;

export default RecruitBanner;
