import Breakpoints from 'constants/breakpoints';
import { HEADER_MENUS } from 'constants/headerMenus';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hamburger, YappLogo } from 'public/assets/icons';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import useToggle from 'hooks/useToggle';
import HamburgerMenu from 'components/HamburgerMenu';

function Header(): ReactElement {
  const { asPath } = useRouter();
  const [isOpenMenu, handleOpenMenu] = useToggle(false);

  return (
    <>
      <HeaderBlock>
        <HeaderInner>
          <YappLogo />
          <HeaderMenu>
            {HEADER_MENUS.map(({ name, path }) => (
              <Link key={`${name}_${path}`} href={path}>
                <MenuText active={asPath === path}>{name}</MenuText>
              </Link>
            ))}
          </HeaderMenu>
          <MobileHeaderMenu onClick={handleOpenMenu} />
        </HeaderInner>
      </HeaderBlock>
      {isOpenMenu && <HamburgerMenu handleOpenMenu={handleOpenMenu} />}
    </>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey_900};
  color: ${({ theme }) => theme.palette.white};
`;

const HeaderInner = styled.div`
  width: ${Breakpoints.large}px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.tablet} {
    width: auto;
    padding: 0 81px;
  }
  ${media.mobile} {
    padding: 0 20px;
    height: 64px;
  }
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

const MenuText = styled.a<{ active: boolean }>`
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.palette.orange_400 : theme.palette.white};
  ${({ theme }) => theme.textStyle.web.Category};
`;

const MobileHeaderMenu = styled(Hamburger)`
  display: none;
  ${media.mobile} {
    display: block;
    cursor: pointer;
  }
`;

export default Header;
