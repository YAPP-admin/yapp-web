import { ReactNode } from 'react';
import styled from 'styled-components';
import theme, { PaletteTypes } from 'styles/theme';

interface IBoxStyledProps {
  backgroundColor?: PaletteTypes;
  width: string;
  height: string;
  borderRadius?: string;
}

interface BoxProps extends IBoxStyledProps {
  children: ReactNode;
  className?: string;
}

function Box({
  children,
  className,
  backgroundColor = 'gray',
  borderRadius = '20px',
  ...rest
}: BoxProps) {
  return (
    <StyledBox
      {...rest}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      Box
    </StyledBox>
  );
}

const StyledBox = styled.div<IBoxStyledProps>`
  padding: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
`;

export default Box;
