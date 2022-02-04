import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function Footer(): ReactElement {
  const { YAPP_NAME, YAPP_OFFICIAL_EMAIL } = Yapp;

  return (
    <FooterBlock>
      <FooterInner>
        <YappInfo>
          <YappName>{YAPP_NAME}</YappName>
          <YappEmail>{YAPP_OFFICIAL_EMAIL}</YappEmail>
        </YappInfo>
        <YappSocialButtonGroup>
          {/* @Todo 임시 버튼들, 나중에 소셜 버튼 나오면 추가 예정 */}
          <SocialButton />
          <SocialButton />
          <SocialButton />
        </YappSocialButtonGroup>
      </FooterInner>
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  width: 100%;
`;

const FooterInner = styled.div`
  height: 280px;
  width: ${Breakpoints.xlarge}px;
  margin: 0 auto;
  padding: 55px 0 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const YappInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const YappName = styled.span`
  ${({ theme }) => theme.textStyle.web.Footer_Logo}
`;

const YappEmail = styled.span`
  ${({ theme }) => theme.textStyle.web.Body_1}
`;

const YappSocialButtonGroup = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// @Todo 임시 소셜 버튼
const SocialButton = styled.div`
  width: 32px;
  height: 32px;
  background-color: #c9c9c9;
  border-radius: 50%;
`;

export default Footer;
