import { Button } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import Yapp from 'constants/yapp';
import { RECRUIT_ENQUIRY } from 'database/recruit';
import DOMPurify from 'isomorphic-dompurify';
import { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function Enquiry(): ReactElement {
  const { title, description, buttonName } = RECRUIT_ENQUIRY;

  return (
    <EnquiryBlock>
      <EnquiryInner>
        <EnquiryTitle
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
          className="enquiryTitle"
        />
        <EnquiryContent dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonLinked target="_blank" href={Yapp.YAPP_KAKAO} rel="noreferrer">
          <EnquiryButton
            width={148}
            height={65}
            buttonColor="blue_200"
            borderColor="white"
            fontColor="black"
          >
            {buttonName}
          </EnquiryButton>
        </ButtonLinked>
      </EnquiryInner>
    </EnquiryBlock>
  );
}

const EnquiryBlock = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grey_850}; // @Todo 임시 컬러
  color: ${({ theme }) => theme.palette.white};
`;

const EnquiryInner = styled.div`
  width: ${Breakpoints.large}px;
  margin: 0 auto;
  padding: 104px 0 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .enquiryTitle {
    width: 500px;
    margin-bottom: 24px;
  }
  ${media.tablet} {
    width: 100%;
  }
  ${media.mobile} {
    padding: 64px 0 54px;
  }
`;

const EnquiryTitle = styled.h2`
  ${({ theme }) => theme.textStyle.web.Title};
  margin-bottom: 64px;
  margin-top: 0;
  text-align: center;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Title_2};
    margin-bottom: 32px;
  }
`;

const EnquiryContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  margin-bottom: 40px;
  text-align: center;
  .mobile {
    display: none;
  }
  ${media.mobile} {
    .mobile {
      display: block;
    }
  }
  .ps {
    font-size: 14px;
    font-weight: 200;
  }
`;

const ButtonLinked = styled.a``;

const EnquiryButton = styled(Button)`
  transition: all 0.5s;

  &:hover {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.blue_100};
  }

  ${media.mobile} {
    width: 120px;
    height: 56px;
  }
`;

export default Enquiry;
