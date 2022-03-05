import {
  ContactLayout,
  ContactList,
  ContactTitle,
} from 'pages-components/contact';
import React, { ReactElement } from 'react';

function ContactPage(): ReactElement {
  return (
    <ContactLayout>
      <ContactTitle />
      <ContactList />
    </ContactLayout>
  );
}

export default ContactPage;
