import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';

export interface AnimatedBoxProps {
  children: ReactNode;
  className?: string;
  color: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
}

/*
 * 색 카드 상자. 등장 효과는 여기서 주지 않고, 이 상자를 쓰는 섹션이 framer-motion으로 준다.
 * (예전에는 여기서도 react-spring으로 올렸는데, 섹션의 효과와 겹쳐 카드가 두 번 올라왔다.)
 */
function AnimatedBox({
  children,
  className,
  color,
  fontColor,
}: AnimatedBoxProps): ReactElement {
  return (
    <StyledBox
      className={className}
      backgroundColor={color}
      fontColor={fontColor}
      borderRadius={20}
    >
      {children}
    </StyledBox>
  );
}

export default AnimatedBox;

const StyledBox = styled.section<{
  backgroundColor: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
  borderRadius: number;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  /* 시안: 카드 높이 180px (좁은 화면 121px) */
  height: 180px;
  padding: 20px 24px;
  width: auto;
  min-width: 195px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
  color: ${({ theme, fontColor }) => fontColor && theme.palette[fontColor]};

  ${media.mobile} {
    width: auto;
    height: 121px;
  }
`;
