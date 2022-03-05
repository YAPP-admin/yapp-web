import { Box } from 'components';
import { IllustContact } from 'public/assets/images';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import {
  ContactFacebookIcon,
  ContactInstagramIcon,
  ContactKakaoIcon,
  ContactMailIcon,
} from '../ContactSocialIcon';

interface SocialTypes {
  social: 'mail' | 'kakao' | 'facebook' | 'instagram';
}

function ContactList(): ReactElement {
  return (
    <ContactListContainer>
      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ItemInner>
          <ContactTitle>
            <ContactMailIcon />
            <TitleText social="mail">메일</TitleText>
          </ContactTitle>
          <ContactContent>support@yapp.co.kr</ContactContent>
        </ItemInner>
        <ContactButton social="mail">메일로 문의하기</ContactButton>
      </ContactItem>

      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ItemInner>
          <ContactTitle>
            <ContactKakaoIcon />
            <TitleText social="kakao">카카오톡</TitleText>
          </ContactTitle>
          <ContactContent>@YAPP</ContactContent>
        </ItemInner>
        <ContactButton social="kakao">카카오톡으로 문의하기</ContactButton>
      </ContactItem>

      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <ItemInner>
          <ContactTitle>
            <ContactFacebookIcon />
            <TitleText social="facebook">페이스북</TitleText>
          </ContactTitle>
          <ContactContent>@YAPP</ContactContent>
        </ItemInner>
        <ContactButton social="facebook">
          페이스북 페이지로 이동하기
        </ContactButton>
      </ContactItem>

      <ContactItem width={278} height={243} backgroundColor="grey_50">
        <IllustImage src={IllustContact} alt="문의 일러스트" />
        <ItemInner>
          <ContactTitle>
            <ContactInstagramIcon />
            <TitleText social="instagram">인스타그램</TitleText>
          </ContactTitle>
          <ContactContent>about.yapp</ContactContent>
        </ItemInner>
        <ContactButton social="instagram">인스타그램 방문하기</ContactButton>
      </ContactItem>
    </ContactListContainer>
  );
}

const ContactListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${media.tablet} {
    flex-direction: column;
  }
`;

const ContactItem = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    margin-bottom: 32px;
    width: auto;
    height: 125px;
  }
`;

const ItemInner = styled.div`
  flex: 1 0 auto;
  padding: 28px;
  padding-bottom: 0;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    flex-direction: row;
    align-items: center;
    padding: 40px 40px 42px 40px;
  }
`;

const ContactTitle = styled.div`
  display: flex;
`;

const TitleText = styled.span<SocialTypes>`
  margin-top: 2px;
  ${({ social }) => {
    switch (social) {
      case 'mail':
        return 'margin-left: 16px;';
      case 'kakao':
        return 'margin-left: 20px;';
      case 'facebook':
        return 'margin-left: 22px;';
      case 'instagram':
        return 'margin-left: 10px;';
      default:
        return '';
    }
  }}
  color: ${({ theme }) => theme.palette.grey_1000};
  ${({ theme }) => theme.textStyle.web.Body_Point};
`;

const ContactContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_Point};
  color: ${({ theme }) => theme.palette.grey_700};
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet} {
    justify-content: flex-end;
  }
`;

const ContactButton = styled.div<SocialTypes>`
  cursor: pointer;
  border-radius: 0 0 20px 20px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.textStyle.web.Body_Text};
  color: ${({ theme }) => theme.palette.white};
  ${({ social, theme }) => {
    switch (social) {
      case 'mail':
        return `
          background-color: ${theme.palette.orange_400};
        `;
      case 'kakao':
        return `
          background-color: ${theme.palette.yellow_500};
        `;
      case 'facebook':
        return `
          background-color: ${theme.palette.facebook};
        `;
      case 'instagram':
        return `
          background: linear-gradient(92.72deg, #CC39FF 0%, #E339FF 0.01%, #A839FF 99.41%);
        `;
      default:
        return '';
    }
  }}
  ${media.tablet} {
    display: none;
  }
`;

const IllustImage = styled.img`
  position: absolute;
  right: 2px;
  top: -97px;
  ${media.tablet} {
    display: none;
  }
`;

export default ContactList;
