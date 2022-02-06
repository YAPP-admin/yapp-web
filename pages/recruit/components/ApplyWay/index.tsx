import { Box } from 'components';
import { RECRUIT_APPLY_WAY } from 'database/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
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
            height={307}
            backgroundColor="lightestGray"
            key={`applyWay-${subTitle}`}
          >
            <WaySubTitle>{subTitle}</WaySubTitle>
            <WayContent dangerouslySetInnerHTML={{ __html: description }} />
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
`;

const WayBox = styled(Box)`
  padding: 32px;
`;

const WaySubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.SubTitle}
  margin-bottom: 8px;
`;

const WayContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  .smallBox {
    margin-top: 16px;
    margin-bottom: 12px;
  }
  .small {
    ${({ theme }) => theme.textStyle.web.Body_2};
  }
`;

export default ApplyWay;
