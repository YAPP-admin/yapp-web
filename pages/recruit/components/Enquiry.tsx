import Breakpoints from 'constants/breakpoints';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function Enquiry(): ReactElement {
  return (
    <EnquiryBlock>
      <EnquiryInner>asd</EnquiryInner>
    </EnquiryBlock>
  );
}

const EnquiryBlock = styled.div`
  width: 100%;
`;

const EnquiryInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  margin: 0 auto;
  padding: 100px 0;
  background-color: lightcyan;
`;

export default Enquiry;
