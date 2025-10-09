import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import { YappLogo } from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const link = [
  { name: '카카오톡 공식채널', href: Yapp.YAPP_KAKAO },
  { name: '인스타그램', href: Yapp.YAPP_INSTAGRAM },
  { name: '깃허브', href: Yapp.YAPP_GITHUB },
];

const link2 = [
  { name: '미디엄', href: Yapp.YAPP_MEDIUM },
  { name: '링크드인', href: Yapp.YAPP_LINKEDIN },
];

function Footer(): ReactElement {
  return (
    <FooterBlock>
      <FooterInner>
        <Logo />
        <YappInfo>
          <ul>
            {link.map(({ name, href }, idx) => (
              <li key={name}>
                <YappInfoItem
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </YappInfoItem>
                {idx !== link.length - 1 && <Divider />}
              </li>
            ))}
          </ul>
          <ul>
            {link2.map(({ name, href }, idx) => (
              <li key={name}>
                <YappInfoItem
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </YappInfoItem>
                {idx !== link2.length - 1 && <Divider />}
              </li>
            ))}
          </ul>
        </YappInfo>
        <Copyright>ⓒ 2025 YAPP. All Rights Reserved</Copyright>
      </FooterInner>
    </FooterBlock>
  );
}

const FooterBlock = styled.div`
  width: 100%;
  height: 162px;

  background-color: ${({ theme }) => theme.palette.black_5};
  color: ${({ theme }) => theme.palette.white};

  ${media.mobile} {
    height: 195px;
    min-width: 100vw;
  }
`;

const Logo = styled(YappLogo)`
  path {
    fill: ${({ theme }) => theme.palette.black};
  }
`;

const FooterInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px 0;

  ${media.mobile} {
    padding: 24px;
    align-items: flex-start;
  }
`;

const YappInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;

  & ul {
    display: flex;
    margin: 0;
  }

  & li {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const YappInfoItem = styled.a`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.black_100};
  cursor: pointer;
  ${({ theme }) => theme.textStyleV2.fix.font_15}
`;

const Divider = styled.div`
  width: 1px;
  height: 14px;
  background: ${({ theme }) => theme.palette.black_20};
  margin: 0 13px;
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.palette.black_40};
  ${({ theme }) => theme.textStyleV2.fix.font_12}
`;

export default Footer;
