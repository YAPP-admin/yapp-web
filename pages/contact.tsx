import ContactLayout from 'pages-components/contact/ContactLayout';
import ContactTitle from 'pages-components/contact/ContactTitle';
import React, { ReactElement } from 'react';

function ContactPage(): ReactElement {
  return (
    <ContactLayout>
      <ContactTitle />
    </ContactLayout>
  );
}

export default ContactPage;
