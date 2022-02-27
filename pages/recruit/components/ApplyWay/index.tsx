import { Box } from 'components';
import { RECRUIT_APPLY_WAY } from 'database/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate, SectionTitle } from '..';

function ApplyWay(): ReactElement {
  const { title, ways } = RECRUIT_APPLY_WAY;

  return (
    <SectionTemplate>
      <SectionTitle title={title} />
      <SectionContent>
        {ways.map(({ subTitle, description }) => (
          <WayBox
            width={380}
            height={258}
            backgroundColor="grey_50"
            key={`applyWay-${subTitle}`}
          >
            <WayInnerBox>
              <WaySubTitle>{subTitle}</WaySubTitle>
              <WayContent dangerouslySetInnerHTML={{ __html: description }} />
            </WayInnerBox>
          </WayBox>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${media.tablet} {
    flex-direction: column;
    padding: 0 22px;
    width: auto;
    .desktop {
      display: none;
    }
  }
  ${media.mobile} {
    .tablet {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

const WayBox = styled(Box)`
  padding: 0px;
  ${media.tablet} {
    width: 100%;
    margin-bottom: 30px;
    height: auto;
    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
  ${media.mobile} {
    margin: 0 auto;
    margin-bottom: 16px;
    width: 335px;
  }
`;

const WayInnerBox = styled.div`
  padding: 32px;
`;

const WaySubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Subtitle}
  margin-bottom: 8px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Subtitle}
  }
`;

const WayContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  .smallBox {
    margin-top: 16px;
    margin-bottom: 12px;
  }
  .small {
    ${({ theme }) => theme.textStyle.web.Body_2};
    margin-top: 12px;
    display: block;
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Body_3};
      margin-top: 20px;
    }
  }

  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1};
  }

  .smallGrey {
    ${({ theme }) => theme.textStyle.web.Body_2};
    margin: 8px 0 14px;
    color: #898989; // @Todo 임시컬러
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Body_3};
    }
  }
`;

export default ApplyWay;
