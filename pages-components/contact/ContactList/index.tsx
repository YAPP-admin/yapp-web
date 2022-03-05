import { Box } from 'components';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

function ContactList(): ReactElement {
  return (
    <ContactListContainer>
      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ContactInfo></ContactInfo>
        <ContactButton></ContactButton>
      </ContactItem>

      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ContactInfo></ContactInfo>
        <ContactButton></ContactButton>
      </ContactItem>

      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ContactInfo></ContactInfo>
        <ContactButton></ContactButton>
      </ContactItem>

      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ContactInfo></ContactInfo>
        <ContactButton></ContactButton>
      </ContactItem>
    </ContactListContainer>
  );
}

const ContactListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContactItem = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ContactInfo = styled.div`
  flex: 1 0 auto;
  border-radius: 20px 20px 0 0;
`;

const ContactButton = styled.div`
  cursor: pointer;
  background-color: blue;
  border-radius: 0 0 20px 20px;
  height: 65px;
`;

export default ContactList;
