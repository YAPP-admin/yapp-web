import type { Dispatch, ReactElement, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import { ProjectField, TAB_LABELS } from 'types/project';

interface ITabMenuStyle {
  backgroundColor?: PaletteKeyTypes;
}

export interface TabMenuProps extends ITabMenuStyle {
  className?: string;
  tabs: ProjectField[];
  currentTab: ProjectField;
  onClick: Dispatch<SetStateAction<ProjectField>>;
}

function TabMenu({
  className,
  tabs,
  currentTab,
  onClick,
  backgroundColor = 'grey_100',
}: TabMenuProps): ReactElement {
  return (
    <TabMenuContainer className={className} backgroundColor={backgroundColor}>
      {tabs.map((tab: any) => (
        <TabMenuButton
          key={`field-${tab}`}
          onClick={() => onClick(tab)}
          isActive={currentTab === tab}
        >
          {TAB_LABELS[tab] || tab}
        </TabMenuButton>
      ))}
    </TabMenuContainer>
  );
}

const TabMenuContainer = styled.div<ITabMenuStyle>`
  display: inline-flex;
  gap: 32px;
  position: relative;
  height: 48px;
  ${media.mobile} {
    height: 43px;
  }
  border-radius: 124px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
`;

const TabMenuButton = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  cursor: pointer;
  z-index: 2;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }

  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  ${({ isActive }) =>
    isActive
      ? css`
          color: #25282d;
          border-bottom: 3px solid #25282d;
        `
      : css`
          color: ${({ theme }) => theme.palette.black_50};
        `}

  cursor: pointer;
  z-index: 100;
`;

export default TabMenu;
