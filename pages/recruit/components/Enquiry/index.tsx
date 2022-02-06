import React, { ReactElement } from 'react';
import { SectionTitle } from '..';
import { Button } from 'components';
import Breakpoints from 'constants/breakpoints';
import { RECRUIT_ENQUIRY } from 'database/recruit';
import styled from 'styled-components';

function Enquiry(): ReactElement {
  const { title, description, buttonName } = RECRUIT_ENQUIRY;

  return (
    <EnquiryBlock>
      <EnquiryInner>
        <SectionTitle title={title} className="enquiryTitle" />
        <EnquiryContent dangerouslySetInnerHTML={{ __html: description }} />
        <Button
          width={220}
          height={78}
          buttonColor="white"
          borderColor="white"
          fontColor="black"
        >
          {buttonName}
        </Button>
      </EnquiryInner>
    </EnquiryBlock>
  );
}

const EnquiryBlock = styled.div`
  width: 100%;
  background-color: #f7f7f7; // @Todo 임시 컬러
`;

const EnquiryInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .enquiryTitle {
    width: 500px;
    margin-bottom: 24px;
  }
`;

const EnquiryContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  margin-bottom: 40px;
`;

export default Enquiry;
