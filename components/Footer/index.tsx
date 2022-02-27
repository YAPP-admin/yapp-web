import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function Footer(): ReactElement {
  const { YAPP_NAME, YAPP_OFFICIAL_EMAIL } = Yapp;

  return (
    <>
      <FooterBlock>
        <FooterInner>
          <YappInfo>
            <YappName>{YAPP_NAME}</YappName>
            <YappEmail>{YAPP_OFFICIAL_EMAIL}</YappEmail>
          </YappInfo>
          <InfoText>
            <TextPoint>Y</TextPoint>our own idea can change the{' '}
            <TextPoint>A</TextPoint>ctual world at
            <br /> anytime with <TextPoint>P</TextPoint>assion and{' '}
            <TextPoint>P</TextPoint>otential.
          </InfoText>
          <YappSocialButtonGroup>
            {/* @Todo 임시 버튼들, 나중에 소셜 버튼 나오면 추가 예정 */}
            <SocialButton />
            <SocialButton />
            <SocialButton />
          </YappSocialButtonGroup>
        </FooterInner>
      </FooterBlock>
      <Copyright>Copyright © YAPP All Rights Reserved.</Copyright>
    </>
  );
}

const FooterBlock = styled.div`
  width: 100%;
  height: 336px;
  background-color: ${({ theme }) => theme.palette.grey_900};
  color: ${({ theme }) => theme.palette.white};
`;

const FooterInner = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    width: auto;
    padding: 48px 81px 40px;
  }
  ${media.mobile} {
    padding: 48px 36px 50px;
    min-width: auto;
  }
`;

const YappInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InfoText = styled.div`
  ${({ theme }) => theme.textStyle.web.Footer_Text};
  margin-bottom: 60px;
`;

const TextPoint = styled.span`
  color: ${({ theme }) => theme.palette.yellow_400};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
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

const Copyright = styled.div`
  background-color: ${({ theme }) => theme.palette.grey_1000};
  color: ${({ theme }) => theme.palette.grey_700};
  height: 49px;
  ${({ theme }) => theme.textStyle.web.Copyright_Text}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
