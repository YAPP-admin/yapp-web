import { Button } from 'components';
import Breakpoints from 'constants/breakpoints';
import { RECRUIT_BANNER } from 'constants/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function RecruitBanner(): ReactElement {
  const { title, buttonName, description } = RECRUIT_BANNER;

  return (
    <BannerBlock>
      <BannerInner>
        <BannerTitle>{title}</BannerTitle>
        <BannerDescription dangerouslySetInnerHTML={{ __html: description }} />
        <Button
          width={216}
          height={78}
          fontColor="black"
          buttonColor="gray"
          borderColor="lightGray"
        >
          {buttonName}
        </Button>
      </BannerInner>
    </BannerBlock>
  );
}

const BannerBlock = styled.div`
  width: 100%;
`;

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
