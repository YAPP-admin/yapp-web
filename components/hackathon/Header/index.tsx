import { HACKATHON_SECTION_ID } from 'constants/hackathon';
import Image from 'next/image';
import { Hamburger } from 'public/assets/icons';
import { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { fadeIn } from 'styles/utils-styles';
import { hackathonFont } from '../shared';

/*
 * 해커톤 전용 헤더. 시안은 Top banner 맨 위의 내비게이션 바다.
 * Figma 8940:10625(1920) · 8995:9773(834) · 8981:14877(360)
 * - 화면 위에 고정되어 배너 그림 위에 겹친다(검정 50% + 배경 흐림).
 * - 360 시안은 메뉴 대신 32px 아이콘만 있다. 아이콘을 눌렀을 때 화면은 시안에 없어서,
 *   기존 공용 헤더의 전체 화면 메뉴 모양을 따랐다(가설).
 */

const ICON_PATH = '/assets/images/hackathon/top';
const HEADER_HEIGHT = 60;

const MENUS = [
  { name: '행사 안내', id: HACKATHON_SECTION_ID.intro },
  { name: '모집 안내', id: HACKATHON_SECTION_ID.recruit },
  { name: '시상 안내', id: HACKATHON_SECTION_ID.award },
  { name: 'FAQ', id: HACKATHON_SECTION_ID.faq },
];

/** 페이지는 #__next 안에서 스크롤된다 */
const getScroller = () => document.getElementById('__next');

/**
 * 지금 보고 있는 섹션. 섹션 윗변이 화면 40% 지점을 지나면 그 섹션으로 본다.
 * 시안은 맨 위(배너)에서 "행사 안내"를 켠 상태라 기본값도 첫 메뉴다.
 */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(MENUS[0].id);

  useEffect(() => {
    const scroller = getScroller();
    if (!scroller) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current: string = MENUS[0].id;
      MENUS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) {
          current = id;
        }
      });
      setActiveId(current);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      scroller.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return activeId;
}

function Header() {
  const activeId = useActiveSection();
  const [isMenuOpen, setMenuOpen] = useState(false);

  /* 모바일 메뉴가 열려 있는 동안 뒤 페이지가 스크롤되지 않게 막는다 */
  useEffect(() => {
    if (!isMenuOpen) return;
    const scroller = getScroller();
    if (!scroller) return;
    const prevOverflow = scroller.style.overflow;
    scroller.style.overflow = 'hidden';
    return () => {
      scroller.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  /* 화면이 모바일 폭보다 넓어지면 열린 메뉴를 닫는다 */
  useEffect(() => {
    const query = window.matchMedia('(min-width: 834px)');
    const handleChange = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  const handleMenuClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    getScroller()?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuLinks = (variant: 'bar' | 'overlay') =>
    MENUS.map(({ name, id }) => {
      const isActive = activeId === id;
      const MenuItem = variant === 'bar' ? MenuLink : OverlayLink;
      return (
        <MenuItem
          key={id}
          href={`#${id}`}
          $active={isActive}
          aria-current={isActive ? 'true' : undefined}
          onClick={(event: MouseEvent<HTMLAnchorElement>) =>
            handleMenuClick(event, id)
          }
        >
          {name}
        </MenuItem>
      );
    });

  return (
    <>
      <HeaderBlock $isMenuOpen={isMenuOpen}>
        <HeaderInner>
          <LogoLink
            href="#"
            aria-label="YAPP × goorm 해커톤, 맨 위로"
            onClick={handleLogoClick}
          >
            {/* 8950:12901 — logo_yapp 63.43×16, icon_x 21×21, logo_goorm 67.375×17.5, 간격 4 */}
            <LogoYapp>
              <Image
                src={`${ICON_PATH}/logo_yapp.svg`}
                alt=""
                fill
                unoptimized
              />
            </LogoYapp>
            <LogoX>
              <Image src={`${ICON_PATH}/icon_x.svg`} alt="" fill unoptimized />
            </LogoX>
            <LogoGoorm>
              <Image
                src={`${ICON_PATH}/logo_goorm.webp`}
                alt=""
                fill
                sizes="68px"
              />
            </LogoGoorm>
          </LogoLink>
          <Nav aria-label="해커톤 안내">{menuLinks('bar')}</Nav>
          <MenuButton
            type="button"
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMenuOpen}
            aria-controls="hackathon-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <CloseIcon /> : <Hamburger aria-hidden />}
          </MenuButton>
        </HeaderInner>
      </HeaderBlock>
      {isMenuOpen && (
        <Overlay id="hackathon-mobile-menu">
          <OverlayNav aria-label="해커톤 안내">
            {menuLinks('overlay')}
          </OverlayNav>
        </Overlay>
      )}
    </>
  );
}

/* 메뉴를 열면 공용 헤더처럼 배경색을 빼고 흐림만 남긴다(시안 없음) */
const HeaderBlock = styled.header<{ $isMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme, $isMenuOpen }) =>
    $isMenuOpen ? 'transparent' : theme.palette.hackathon_header_bg};
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  /* 1920 시안: 아래 테두리 1px(검정 5%)이 바 안쪽에 겹쳐 있다. 834·360 시안에는 없다 */
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.palette.hackathon_header_border};

  ${media.tablet} {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: none;
  }
`;

const HeaderInner = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: ${HEADER_HEIGHT}px;
  padding: 0 80px;

  ${media.mobile} {
    padding: 0 24px;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.white};
    outline-offset: 4px;
  }
`;

const LogoYapp = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 63.434px;
  height: 16px;
`;

const LogoX = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 21px;
  height: 21px;
`;

/* 시안: 회색 로고 이미지에 plus-lighter 합성 */
const LogoGoorm = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 67.375px;
  height: 17.5px;
  mix-blend-mode: plus-lighter;
`;

/* 8940:10633 — 메뉴 간격 56 */
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 56px;

  ${media.mobile} {
    display: none;
  }
`;

const MenuLink = styled.a<{ $active: boolean }>`
  color: ${({ theme, $active }) =>
    $active ? theme.palette.white : theme.palette.white_50};
  ${hackathonFont(15, 500, 24, -0.3)};
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.palette.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.white};
    outline-offset: 4px;
  }
`;

/* 8981:14888 — 32×32 아이콘 자리 */
const MenuButton = styled.button`
  display: none;

  ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.white};
    outline-offset: 2px;
  }
`;

/* 시안 없음: 공용 HamburgerMenu와 같은 모양(검정 50% + 흐림 30px, 위에 짙은 막) */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 4999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.black_50};
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  animation: ${fadeIn} 0.5s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.palette.grey_1000};
    opacity: 0.75;
  }
`;

const OverlayNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const OverlayLink = styled.a<{ $active: boolean }>`
  color: ${({ theme, $active }) =>
    $active ? theme.palette.white : theme.palette.white_50};
  ${({ theme }) => theme.textStyleV2.fix.font_20};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.white};
    outline-offset: 4px;
  }
`;

function CloseIcon() {
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
