import { FieldNameTypes } from 'components/recruit/RecruitField';
import type { Dispatch, ReactElement, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { PaletteKeyTypes } from 'styles/theme';
import { ProjectField } from 'types/project';

interface IButtonMenuStyle {
  backgroundColor?: PaletteKeyTypes;
}

export interface ButtonMenuProps extends IButtonMenuStyle {
  className?: string;
  tabs: (ProjectField | FieldNameTypes)[];
  currentTab: ProjectField | FieldNameTypes;
  onClick:
    | Dispatch<SetStateAction<ProjectField>>
    | Dispatch<SetStateAction<FieldNameTypes>>;
}

function ButtonMenu({
  className,
  tabs,
  currentTab,
  onClick,
  backgroundColor = 'grey_100',
}: ButtonMenuProps): ReactElement {
  return (
    <ButtonMenuContainer
      className={className}
      backgroundColor={backgroundColor}
    >
      {tabs.map((tab: any) => (
        <ButtonMenuButton
          key={`field-${tab}`}
          onClick={() => onClick(tab)}
          isActive={currentTab === tab}
        >
          {tab}
        </ButtonMenuButton>
      ))}
    </ButtonMenuContainer>
  );
}

const ButtonMenuContainer = styled.div<IButtonMenuStyle>`
  display: flex;
  overflow-x: auto;
`;

const ButtonMenuButton = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  padding: 12px 20px;
  margin: 0 4px;
  cursor: pointer;
  z-index: 100;

  ${({ theme }) => theme.textStyle.mobile.Body_Point2};
  transition: all 0.5s;
  ${({ isActive, theme }) =>
    isActive
      ? css`
          color: ${theme.palette.white};
          background-color: ${theme.palette.orange_400};
        `
      : css`
          color: ${theme.palette.black};
          background-color: ${theme.palette.white};
        `}
`;

export default ButtonMenu;
