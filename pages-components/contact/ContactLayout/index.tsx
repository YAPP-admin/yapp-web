import Breakpoints from 'constants/breakpoints';
import React, { ReactElement, ReactNode } from 'react';
import media from 'styles/media';
import styled from 'styled-components';

interface ContactLayoutProps {
  children: ReactNode;
}

function ContactLayout({ children }: ContactLayoutProps): ReactElement {
  return <ContactLayoutContainer>{children}</ContactLayoutContainer>;
}

const ContactLayoutContainer = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  flex: 1 0 auto;
  padding-top: 174px;
  padding-bottom: 188px;
  ${media.tablet} {
    width: auto;
    padding: 174px 80px 164px;
    margin: inherit;
  }
  ${media.mobile} {
    padding: 80px 20px 100px;
    min-width: 280px;
  }
`;

export default ContactLayout;
