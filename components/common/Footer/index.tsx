import Yapp from 'constants/yapp';
import { YappLogo } from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const links = [
  { name: '카카오톡 공식채널', href: Yapp.YAPP_KAKAO },
  { name: '인스타그램', href: Yapp.YAPP_INSTAGRAM },
  { name: '깃허브', href: Yapp.YAPP_GITHUB },
  { name: '미디엄', href: Yapp.YAPP_MEDIUM },
  { name: '링크드인', href: Yapp.YAPP_LINKEDIN },
  { name: '스레드', href: Yapp.YAPP_THREADS },
];

function Footer(): ReactElement {
  return (
    <FooterBlock>
      <FooterInner>
        <LeftColumn>
          <TopRow>
            <Logo />
            <Links>
              {links.map(({ name, href }, idx) => (
                <React.Fragment key={name}>
                  <LinkItem>
                    <LinkAnchor
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </LinkAnchor>
                    {idx !== links.length - 1 && (
                      <Divider $hideOnMobile={idx === 2} />
                    )}
                  </LinkItem>
                  {idx === 2 && <MobileBreak />}
                </React.Fragment>
              ))}
            </Links>
          </TopRow>
          <BusinessInfo>
            <p>고유번호: 133-82-75281</p>
            <p>주소: 서울특별시 마포구 와우산로 105, 5층-220A호</p>
            <p>이메일: support@yapp.co.kr</p>
          </BusinessInfo>
        </LeftColumn>
        <Copyright>ⓒ 2026 YAPP. All Rights Reserved</Copyright>
      </FooterInner>
    </FooterBlock>
  );
}

const FooterBlock = styled.footer`
  width: auto;
  background-color: ${({ theme }) => theme.palette.black_5};
  padding: 24px 100px;

  ${media.mobile} {
    padding: 24px;
  }
`;

const FooterInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.mobile} {
    width: 100%;
    gap: 20px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Logo = styled(YappLogo)`
  width: 20px;
  height: 27px;
  flex-shrink: 0;

  path {
    fill: ${({ theme }) => theme.palette.black_100};
  }
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li`
  display: flex;
  align-items: center;
`;

const LinkAnchor = styled.a`
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.black_100};
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  line-height: 24px;

  ${media.mobile} {
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 22.4px;
  }
`;

const Divider = styled.div<{ $hideOnMobile?: boolean }>`
  width: 1px;
  height: 14px;
  background: ${({ theme }) => theme.palette.black_20};
  margin: 0 13px;

  ${media.mobile} {
    margin: 0 12px;
    display: ${({ $hideOnMobile }) => ($hideOnMobile ? 'none' : 'block')};
  }
`;

const MobileBreak = styled.div`
  display: none;

  ${media.mobile} {
    display: block;
    flex-basis: 100%;
    width: 100%;
    height: 0;
  }
`;

const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.black_60};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.28px;
  line-height: 24px;

  & p {
    margin: 0;
  }

  ${media.mobile} {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.palette.black_40};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  line-height: 22.4px;

  ${media.mobile} {
    font-size: 12px;
    letter-spacing: -0.24px;
    line-height: 19.2px;
  }
`;

export default Footer;
