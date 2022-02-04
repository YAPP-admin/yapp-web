import { Box } from 'components';
import Breakpoints from 'constants/breakpoints';
import { RECRUIT_APPLY_WAY } from 'constants/recruit';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

function ApplyWay(): ReactElement {
  const { title, ways } = RECRUIT_APPLY_WAY;

  return (
    <ApplyWayBlock>
      <ApplyWayInner>
        <SectionTitle title={title} />
        <SectionContent>
          {ways.map((way) => (
            <WayBox width={380} height={307} backgroundColor="lightGray">
              <WaySubTitle>{way.title}</WaySubTitle>
            </WayBox>
          ))}
        </SectionContent>
      </ApplyWayInner>
    </ApplyWayBlock>
  );
}

const ApplyWayBlock = styled.div`
  width: 100%;
`;

const ApplyWayInner = styled.div`
  width: ${Breakpoints.xlarge}px;
  margin: 0 auto;
  padding: 100px 0;
`;

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
`;

const WayContent = styled.div``;

export default ApplyWay;
