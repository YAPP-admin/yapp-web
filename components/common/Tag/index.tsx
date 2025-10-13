import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
}

function Tag({ label, ...rest }: Props): ReactElement {
  return <Container {...rest}>{label}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.black_60};

  ${({ theme }) => theme.textStyleV2.resp.caption_md};
  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;

export default Tag;
