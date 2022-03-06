import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import { SnsGroup } from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function Footer(): ReactElement {
  const {
    YAPP_NAME,
    YAPP_OFFICIAL_EMAIL,
    YAPP_FACEBOOK,
    YAPP_INSTAGRAM,
    YAPP_GITHUB,
  } = Yapp;

  const socialButtons = [YAPP_FACEBOOK, YAPP_INSTAGRAM, YAPP_GITHUB];

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
            <TextPoint>A</TextPoint>ctual world at anytime <br /> with{' '}
            <TextPoint>P</TextPoint>assion and <TextPoint>P</TextPoint>otential.
          </InfoText>
          <YappSocialButtonGroup>
            <SnsGroup />
            <div className="inner-buttons">
              {socialButtons.map((url) => (
                <a
                  className="btn"
                  target="_blank"
                  href={url}
                  rel="noreferrer"
                  key={url}
                />
              ))}
            </div>
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
    padding: 48px 30px 50px 36px;
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
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_3};
    br {
      display: none;
    }
  }
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
  position: relative;
  .inner-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 170px;
    height: 40px;
    top: 0;
    .btn {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
`;

const Copyright = styled.div`
  background-color: ${({ theme }) => theme.palette.grey_1000};
  color: ${({ theme }) => theme.palette.grey_700};
  height: 49px;
  ${({ theme }) => theme.textStyle.web.Caption}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Footer;
