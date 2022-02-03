import Breakpoints from 'constants/breakpoints';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function Header(): ReactElement {
  return (
    <HeaderBlock>
      <HeaderInner>Header</HeaderInner>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  width: 100%;
`;

const HeaderInner = styled.div`
  width: ${Breakpoints.xxlarge}px;
`;

export default Header;
