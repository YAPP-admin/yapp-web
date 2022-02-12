import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

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
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 55px 0 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.tablet} {
    width: 100%;
    padding: 48px 81px 40px;
  }
  ${media.mobile} {
    padding: 48px 36px 50px;
    height: 290px;
    min-width: ${Breakpoints.small}px;
  }
`;

const YappInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const YappName = styled.span`
  ${({ theme }) => theme.textStyle.web.Footer_Logo}
  ${media.mobile} {
    margin-bottom: 8px;
    ${({ theme }) => theme.textStyle.mobile.Footer_Logo}
  }
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
