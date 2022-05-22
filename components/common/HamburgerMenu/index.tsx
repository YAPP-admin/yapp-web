import { ReactElement, useEffect } from 'react';
import { HEADER_MENUS } from 'constants/headerMenus';
import styled from 'styled-components';
import { fadeIn } from 'styles/utils-styles';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HamburgerMenuProps {
  handleOpenMenu: () => void;
}

function HamburgerMenu({ handleOpenMenu }: HamburgerMenuProps): ReactElement {
  const { asPath } = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <HamburgerMenuContainer>
      <InnerMenu>
        <MenuList>
          {HEADER_MENUS.map(({ name, path }) => (
            <Link key={`${name}_${path}`} href={path} scroll>
              <MenuItem active={asPath === path} onClick={handleOpenMenu}>
                {name}
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </InnerMenu>
      <Background />
    </HamburgerMenuContainer>
  );
}

const HamburgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;
`;

const InnerMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 2000;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const MenuList = styled.div`
  height: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MenuItem = styled.a<{ active: boolean }>`
  cursor: pointer;
  ${({ theme }) => theme.textStyle.mobile.Title_1}
  color: ${({ theme, active }) =>
    active ? theme.palette.orange_400 : theme.palette.white};
`;

const Background = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 9, 11, 0.75);
  position: absolute;
  left: 0;
  top: 0;
`;

export default HamburgerMenu;
