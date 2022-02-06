import Breakpoints from 'constants/breakpoints';
import { HEADER_MENUS } from 'constants/headerMenus';
import { IS_RECRUITING } from 'database/recruit';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import RecruitLayout from './RecruitLayout';

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
`;

const MenuText = styled.a`
  cursor: pointer;
  ${({ theme }) => theme.textStyle.web.Category};
`;

export default Header;
