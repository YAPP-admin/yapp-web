import { FieldNameTypes } from 'components/recruit/RecruitField';
import type { Dispatch, ReactElement, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import { ProjectField } from 'types/project';

interface ITabMenuStyle {
  backgroundColor?: PaletteKeyTypes;
}

export interface TabMenuProps extends ITabMenuStyle {
  className?: string;
  tabs: (ProjectField | FieldNameTypes)[];
  currentTab: ProjectField | FieldNameTypes;
  onClick:
    | Dispatch<SetStateAction<ProjectField>>
    | Dispatch<SetStateAction<FieldNameTypes>>;
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
          {tab}
        </TabMenuButton>
      ))}
      <AnimatedBackground tabs={tabs} currentTab={currentTab} />
    </TabMenuContainer>
  );
}

const TabMenuContainer = styled.div<ITabMenuStyle>`
  display: inline-flex;
  position: relative;
  height: 64px;
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
  min-width: 196px;
  height: inherit;

  ${media.tablet} {
    min-width: 164px;
  }
  ${media.mobile} {
    min-width: 95px;
    ${({ theme }) => theme.textStyle.mobile.Body_Point2};
  }

  ${({ theme }) => theme.textStyle.web.Subtitle};
  ${({ isActive }) =>
    isActive
      ? css`
          color: ${({ theme }) => theme.palette.white};
        `
      : css`
          color: ${({ theme }) => theme.palette.grey_700};
        `}

  cursor: pointer;
  z-index: 100;
`;

// 움직이는 배경
const AnimatedBackground = styled.span<
  Pick<TabMenuProps, 'tabs' | 'currentTab'>
>`
  position: absolute;
  top: 0;
  left: ${({ tabs, currentTab }) => tabs.indexOf(currentTab) * 196}px;
  ${media.tablet} {
    left: ${({ tabs, currentTab }) => tabs.indexOf(currentTab) * 164}px;
  }
  ${media.mobile} {
    left: ${({ tabs, currentTab }) => tabs.indexOf(currentTab) * 95}px;
  }
  width: 196px;
  height: inherit;
  ${media.tablet} {
    width: 164px;
  }
  ${media.mobile} {
    width: 95px;
  }

  border-radius: 124px;
  background-color: ${({ theme }) => theme.palette.blue_100};
  transition: all 0.2s ease-in-out;
`;

export default TabMenu;
