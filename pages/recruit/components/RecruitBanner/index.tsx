import { Button, RecruitLayout } from 'components';
import Breakpoints from 'constants/breakpoints';
import {
  IS_RECRUITING,
  RECRUIT_BANNER,
  RECRUIT_BANNER_ACTIVE,
} from 'database/recruit';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

function RecruitBanner(): ReactElement {
  const BannerInfo = IS_RECRUITING ? RECRUIT_BANNER_ACTIVE : RECRUIT_BANNER;
  const { title, buttonName, description } = BannerInfo;

  return (
    <RecruitLayout isRecruit={IS_RECRUITING}>
      <BannerInner>
        <BannerTitle>{title}</BannerTitle>
        <BannerDescription dangerouslySetInnerHTML={{ __html: description }} />
        <Button
          width={216}
          height={78}
          fontColor="black"
          buttonColor="lightestGray"
          borderColor="lightGray"
        >
          {buttonName}
        </Button>
      </BannerInner>
    </RecruitLayout>
  );
}

const BannerInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  margin: 0 auto;
  padding: 164px 0 100px;
`;

const BannerTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Head};
  margin-bottom: 24px;
`;

const BannerDescription = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1}
  margin-bottom:40px;
`;

export default RecruitBanner;
