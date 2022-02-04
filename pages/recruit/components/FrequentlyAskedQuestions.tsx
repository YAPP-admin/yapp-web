import Breakpoints from 'constants/breakpoints';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function FrequentlyAskedQuestions(): ReactElement {
  return (
    <FAQBlock>
      <FAQInner>asd</FAQInner>
    </FAQBlock>
  );
}

const FAQBlock = styled.div`
  width: 100%;
`;

const FAQInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  margin: 0 auto;
  padding: 100px 0;
  background-color: lightcoral;
`;

export default FrequentlyAskedQuestions;
