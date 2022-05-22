import Breakpoints from 'constants/breakpoints';
import { HEADER_MENUS } from 'constants/headerMenus';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hamburger, YappLogo } from 'public/assets/icons';
import React, { ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import useToggle from 'hooks/useToggle';
import HamburgerMenu from 'components/common/HamburgerMenu';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Path from 'constants/path';
import smoothscroll from 'smoothscroll-polyfill'; // Safari 에서 smooth 효과 적용

function Header(): ReactElement {
  const { asPath } = useRouter();
  const router = useRouter();
  const [isOpenMenu, handleOpenMenu, setOpenMenu] = useToggle(false);
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    smoothscroll.polyfill();

    if (windowWidth > Breakpoints.medium) {
      setOpenMenu(false);
    }
  }, [windowWidth]);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    if (!ref.current) return;
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    handleOpenMenu();
  };

  return (
    <>
      <HeaderBlock ref={ref}>
        <HeaderInner>
          <Logo onClick={() => router.push(Path.Home)} />
          <HeaderMenu>
            {HEADER_MENUS.map(({ name, path }) => (
              <Link key={`${name}_${path}`} href={path} scroll={false}>
                <MenuText active={asPath === path}>{name}</MenuText>
              </Link>
            ))}
          </HeaderMenu>
          <MobileHeaderMenu onClick={handleToggleMenu} />
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
  position: sticky;
  top: 0;
  z-index: 5000;
`;

const HeaderInner = styled.div`
  width: ${Breakpoints.large}px;
  height: 70px;
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

const Logo = styled(YappLogo)`
  width: 48px;
  height: 48px;
  cursor: pointer;
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
