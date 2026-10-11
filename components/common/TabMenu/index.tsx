import type { Dispatch, ReactElement, SetStateAction } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { ProjectField, TAB_LABELS } from 'types/project';

export interface TabMenuProps {
  className?: string;
  tabs: ProjectField[];
  currentTab: ProjectField;
  onClick:
    | Dispatch<SetStateAction<ProjectField>>
    | ((tab: ProjectField) => void);
  /** 스크린 리더가 읽는 탭 묶음 이름 */
  label?: string;
}

function TabMenu({
  className,
  tabs,
  currentTab,
  onClick,
  label = '분류',
}: TabMenuProps): ReactElement {
  return (
    <TabMenuContainer className={className} role="group" aria-label={label}>
      {tabs.map((tab) => (
        <TabMenuButton
          key={`field-${tab}`}
          type="button"
          aria-pressed={currentTab === tab}
          onClick={() => onClick(tab)}
          $isActive={currentTab === tab}
        >
          {TAB_LABELS[tab] || tab}
        </TabMenuButton>
      ))}
    </TabMenuContainer>
  );
}

const TabMenuContainer = styled.div`
  display: inline-flex;
  /* 시안: 탭 사이 32px, 360 화면에서는 24px */
  gap: 32px;

  ${media.mobile} {
    gap: 24px;
  }
`;

const TabMenuButton = styled.button<{ $isActive: boolean }>`
  flex-shrink: 0;
  /* 시안: 높이 48px (밑줄 3px 포함), 360 화면에서는 42px */
  padding: 8px 0 5px;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey_400};
  ${({ theme }) => theme.textStyleV2.fix.font_20};
  font-weight: 500;

  ${({ theme, $isActive }) =>
    $isActive &&
    `
      font-weight: 600;
      color: ${theme.palette.grey_850};
      border-bottom-color: ${theme.palette.grey_850};
    `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.grey_850};
    outline-offset: 2px;
  }

  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.size_16};
  }
`;

export default TabMenu;
