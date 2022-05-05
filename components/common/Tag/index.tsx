import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
}

function Tag({ label }: Props): ReactElement {
  return <Container>{label}</Container>;
}

const Container = styled.span`
  padding: 5px 12px;
  background-color: ${({ theme }) => theme.palette.orange_400};
  color: ${({ theme }) => theme.palette.white};
  border-radius: 31px;
  ${({ theme }) => theme.textStyle.web.Body_1};
`;

export default Tag;
