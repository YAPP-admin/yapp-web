import { type KeyboardEvent, type ReactElement, useRef } from 'react';
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

/** 선택한 탭 아래에 밑줄이 붙는 탭 목록. 방향키, Home, End로 옮길 수 있다 */
function UnderlineTabs({
  className,
  tabs,
  currentTab,
  onChange,
  idPrefix,
  label,
}: UnderlineTabsProps): ReactElement {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const currentIndex = tabs.indexOf(currentTab);

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
      className={`scroll-none ${className ?? ''}`}
      role="tablist"
      aria-label={label}
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

const TabList = styled.div`
  display: flex;
  gap: 32px;
  overflow-x: auto;

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
