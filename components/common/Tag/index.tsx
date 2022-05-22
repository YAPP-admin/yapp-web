import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
}

function Tag({ label, ...rest }: Props): ReactElement {
  return <Container {...rest}>{label}</Container>;
}

const Container = styled.div`
  padding: 5px 12px;
  display: inline-block;
  background-color: ${({ theme }) => theme.palette.orange_400};
  color: ${({ theme }) => theme.palette.white};
  border-radius: 31px;
  ${({ theme }) => theme.textStyle.web.Body_1};
`;

export default Tag;
