import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import theme, { PaletteTypes } from 'styles/theme';

interface IBoxStyle {
  backgroundColor?: PaletteTypes;
  width?: number;
  height?: number;
  borderRadius?: number;
  isFullWidth?: boolean;
}

interface BoxProps extends IBoxStyle {
  children: ReactNode;
  className?: string;
}

function Box({
  children,
  className,
  width = 0,
  height = 0,
  backgroundColor = 'gray',
  borderRadius = 20,
  ...rest
}: BoxProps): ReactElement {
  return (
    <StyledBox
      {...rest}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      Box
    </StyledBox>
  );
}

const StyledBox = styled.div<IBoxStyle>`
  padding: 10px;
  width: ${({ isFullWidth, width }) => (isFullWidth ? '100%' : `${width}px`)};
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
`;

export default Box;