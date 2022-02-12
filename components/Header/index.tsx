import Breakpoints from 'constants/breakpoints';
import { HEADER_MENUS } from 'constants/headerMenus';
import { IS_RECRUITING } from 'database/recruit';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import RecruitLayout from '../RecruitLayout';

function Header(): ReactElement {
  return (
    <RecruitLayout isRecruit={IS_RECRUITING}>
      <HeaderInner>
        <Logo />
        <HeaderMenu>
          {HEADER_MENUS.map(({ name, path }, index) => (
            <Link key={`${name}_${index}`} href={path}>
              <MenuText>{name}</MenuText>
            </Link>
          ))}
        </HeaderMenu>
        <MobileHeaderMenu />
      </HeaderInner>
    </RecruitLayout>
  );
}

const HeaderInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.tablet} {
    width: 100%;
    padding: 0 81px;
  }
  ${media.mobile} {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  background-color: #999; /* @Todo 임시컬러 */
  border-radius: 50%;
`;

const HeaderMenu = styled.div`
  width: 470px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.mobile} {
    display: none;
  }
`;

const MenuText = styled.a`
  cursor: pointer;
  ${({ theme }) => theme.textStyle.web.Category};
`;

const MobileHeaderMenu = styled.div`
  width: 32px;
  height: 32px;
  background-color: #999; /* @Todo 임시컬러 */
  border-radius: 50%;
  display: none;
  ${media.mobile} {
    display: block;
  }
`;

export default Header;
