import {
  type KeyboardEvent,
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface UnderlineTabsProps {
  className?: string;
  /** 탭 이름 목록 */
  tabs: string[];
  currentTab: string;
  onChange: (tab: string) => void;
  /** 탭과 패널을 잇는 id에 쓰는 접두어. 탭 id는 `${idPrefix}-tab-${index}` */
  idPrefix: string;
  /** 탭 목록을 설명하는 이름 */
  label: string;
}

/** 탭 패널에 넣을 id와 aria-labelledby 값을 만든다 */
export const getTabPanelProps = (
  idPrefix: string,
  tabs: string[],
  currentTab: string,
) => ({
  id: `${idPrefix}-panel`,
  role: 'tabpanel',
  'aria-labelledby': `${idPrefix}-tab-${tabs.indexOf(currentTab)}`,
});

/* 목록 끝을 흐리게 하는 폭. 선택한 탭은 이만큼 안쪽으로 들어오게 옮긴다 */
const FADE_WIDTH = 28;

/** 선택한 탭 아래에 밑줄이 붙는 탭 목록. 방향키, Home, End로 옮길 수 있다 */
function UnderlineTabs({
  className,
  tabs,
  currentTab,
  onChange,
  idPrefix,
  label,
}: UnderlineTabsProps): ReactElement {
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const currentIndex = tabs.indexOf(currentTab);
  /* 탭이 화면보다 넓을 때, 아직 안 보이는 탭이 남은 쪽 */
  const [hidden, setHidden] = useState({ left: false, right: false });

  const updateHidden = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const left = list.scrollLeft > 1;
    const right = list.scrollLeft < list.scrollWidth - list.clientWidth - 1;
    setHidden((prev) =>
      prev.left === left && prev.right === right ? prev : { left, right },
    );
  }, []);

  useEffect(() => {
    updateHidden();
    /* 글꼴이 늦게 적용되면 탭 폭이 달라진다 */
    document.fonts?.ready.then(updateHidden);
    window.addEventListener('resize', updateHidden);
    return () => window.removeEventListener('resize', updateHidden);
  }, [updateHidden, tabs.length]);

  /* 선택한 탭이 잘려 있으면 목록 안에서만 좌우로 옮겨 다 보이게 한다 (페이지는 움직이지 않는다) */
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[currentIndex];
    if (!list || !tab) return;

    const start = tab.offsetLeft;
    const end = start + tab.offsetWidth;
    if (start < list.scrollLeft + FADE_WIDTH) {
      list.scrollTo({ left: start - FADE_WIDTH, behavior: 'smooth' });
    } else if (end > list.scrollLeft + list.clientWidth - FADE_WIDTH) {
      list.scrollTo({
        left: end - list.clientWidth + FADE_WIDTH,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const lastIndex = tabs.length - 1;
    const nextIndexByKey: Record<string, number> = {
      ArrowRight: currentIndex === lastIndex ? 0 : currentIndex + 1,
      ArrowLeft: currentIndex === 0 ? lastIndex : currentIndex - 1,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = nextIndexByKey[event.key];
    if (nextIndex === undefined) return;

    event.preventDefault();
    onChange(tabs[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <TabList
      ref={listRef}
      className={`scroll-none ${className ?? ''}`}
      role="tablist"
      aria-label={label}
      $hiddenLeft={hidden.left}
      $hiddenRight={hidden.right}
      onScroll={updateHidden}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab}
          ref={(element: HTMLButtonElement | null) => {
            tabRefs.current[index] = element;
          }}
          id={`${idPrefix}-tab-${index}`}
          type="button"
          role="tab"
          aria-selected={currentTab === tab}
          aria-controls={`${idPrefix}-panel`}
          tabIndex={currentTab === tab ? 0 : -1}
          $isActive={currentTab === tab}
          onClick={() => onChange(tab)}
          onKeyDown={handleKeyDown}
        >
          {tab}
        </Tab>
      ))}
    </TabList>
  );
}

const TabList = styled.div<{ $hiddenLeft: boolean; $hiddenRight: boolean }>`
  /* 탭의 offsetLeft를 목록 기준으로 재기 위해 */
  position: relative;
  display: flex;
  gap: 32px;
  overflow-x: auto;
  /* 초점 테두리(2px + 간격 2px)가 잘리지 않게 안쪽 여백을 두고, 그만큼 바깥으로 넓힌다 */
  margin: -4px;
  padding: 4px;

  /* 좌우에 탭이 더 있으면 그쪽 끝을 흐리게 해서 넘길 수 있음을 알린다 */
  ${({ $hiddenLeft, $hiddenRight }) => {
    if (!$hiddenLeft && !$hiddenRight) return '';

    const mask = `linear-gradient(
      to right,
      ${$hiddenLeft ? 'transparent' : 'black'} 0,
      black ${FADE_WIDTH}px,
      black calc(100% - ${FADE_WIDTH}px),
      ${$hiddenRight ? 'transparent' : 'black'} 100%
    )`;
    return `
      -webkit-mask-image: ${mask};
      mask-image: ${mask};
    `;
  }}

  ${media.mobile} {
    gap: 14px;
  }
`;

const Tab = styled.button<{ $isActive: boolean }>`
  flex-shrink: 0;
  /* 시안: 높이 48px (밑줄 3px 포함) */
  padding: 8px 0 5px;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.black_50};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};

  ${({ theme, $isActive }) =>
    $isActive &&
    `
      color: ${theme.palette.grey_850};
      border-bottom-color: ${theme.palette.grey_850};
    `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.grey_850};
    outline-offset: 2px;
  }

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.fix.font_14};
    font-weight: 600;
  }
`;

export default UnderlineTabs;
