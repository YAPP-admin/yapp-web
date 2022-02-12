import { Button, RecruitLayout } from 'components';
import Breakpoints from 'constants/breakpoints';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';

function RecruitBanner(): ReactElement {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, buttonName, description } = BannerInfo;

  return (
    <RecruitLayout isRecruit={IS_RECRUITING}>
      <BannerInner>
        <BannerTitle dangerouslySetInnerHTML={{ __html: title }} />
        <BannerDescription dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonBlock>
          <RecruitButton
            width={174}
            height={78}
            fontColor="black"
            buttonColor="lightestGray"
            borderColor="lightGray"
          >
            {buttonName}
          </RecruitButton>
        </ButtonBlock>
      </BannerInner>
    </RecruitLayout>
  );
}

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
`;

const RecruitButton = styled(Button)`
  ${media.mobile} {
    width: 112px;
    height: 56px;
  }
`;

export default RecruitBanner;
