import HamburgerMenu from 'components/common/HamburgerMenu';
import Breakpoints from 'constants/breakpoints';
import { HEADER_MENUS } from 'constants/headerMenus';
import Path from 'constants/path';
import useToggle from 'hooks/useToggle';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Hamburger, YappLogo } from 'public/assets/icons';
import { ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function Header(): ReactElement {
  const { asPath } = useRouter();
  const [isOpenMenu, handleOpenMenu, setOpenMenu] = useToggle(false);
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
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
      <HeaderBlock ref={ref} $isMenuOpen={isOpenMenu}>
        <HeaderInner>
          <LogoLink href={Path.Home} scroll={false} aria-label="YAPP 홈">
            <YappLogo aria-hidden />
          </LogoLink>
          <HeaderMenu>
            {HEADER_MENUS.map(({ name, path }) => (
              <Link key={`${name}_${path}`} href={path} scroll={false}>
                <MenuText active={asPath === path}>{name}</MenuText>
              </Link>
            ))}
          </HeaderMenu>
          <MobileMenuButton
            type="button"
            aria-label={isOpenMenu ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpenMenu}
            onClick={handleToggleMenu}
          >
            {isOpenMenu ? <CloseIcon /> : <Hamburger aria-hidden />}
          </MobileMenuButton>
        </HeaderInner>
      </HeaderBlock>
      {isOpenMenu && <HamburgerMenu handleOpenMenu={handleOpenMenu} />}
    </>
  );
}

/* 시안: 검정 30% 배경에 흐림 20px, 높이 60px. 메뉴를 열면 배경색 없이 흐림만 남는다 */
const HeaderBlock = styled.header<{ $isMenuOpen: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme, $isMenuOpen }) =>
    $isMenuOpen ? 'transparent' : theme.palette.black_30_pure};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.palette.white_50};
  position: fixed;
  top: 0;
  z-index: 5000;
`;

const HeaderInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  height: 60px;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* 시안: 360 화면은 좌우 24px */
  ${media.mobile} {
    padding: 0 24px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.white};
    outline-offset: 4px;
  }
`;

const HeaderMenu = styled.div`
  width: 470px;
  gap: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${media.mobile} {
    display: none;
  }
`;

const MenuText = styled.span<{ active: boolean }>`
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.palette.white : theme.palette.white_50};
  ${({ theme }) => theme.textStyleV2.fix.font_15};
`;

/* 시안: 32x32 아이콘 자리. 메뉴가 열리면 X로 바뀐다 */
const MobileMenuButton = styled.button`
  display: none;

  ${media.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.white};
    outline-offset: 2px;
  }
`;

function CloseIcon(): ReactElement {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3L19 19M19 3L3 19"
        stroke="currentColor"
        strokeWidth="2.67"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Header;
