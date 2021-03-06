import DOMPurify from 'isomorphic-dompurify';
import { Box } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import { RECRUIT_SCHEDULE } from 'database/recruit';
import useDragScroll from 'hooks/useDragScroll';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate, SectionTitle } from '..';

function RecruitSchedule(): ReactElement {
  const { title, schedules } = RECRUIT_SCHEDULE;

  const { handleDragEnd, handleDragMove, handleDragStart, scrollRef } =
    useDragScroll();

  return (
    <SectionTemplate>
      <SectionTitle title={title} />
      <SectionContent
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        ref={scrollRef}
      >
        {schedules.map(({ subTitle, description }) => (
          <ScheduleBox
            width={278}
            height={188}
            backgroundColor="grey_50"
            key={`schedule-${subTitle}`}
          >
            <ScheduleBoxInner>
              <ScheduleSubTitle>{subTitle}</ScheduleSubTitle>
              <ScheduleContent
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              />
            </ScheduleBoxInner>
          </ScheduleBox>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  width: ${Breakpoints.large}px;
  justify-content: space-between;
  ${media.tablet} {
    width: auto;
    overflow: auto;
    margin-left: 22px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ScheduleBox = styled(Box)`
  padding: 0;
  white-space: nowrap;
  ${media.tablet} {
    margin-right: 30px;
    min-width: 278px;
  }
  ${media.mobile} {
    min-width: 225px;
    height: 172px;
  }
`;

const ScheduleBoxInner = styled.div`
  padding: 32px;
`;

const ScheduleSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Subtitle};
  color: ${({ theme }) => theme.palette.grey_1000};
  margin-bottom: 12px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Subtitle}
    margin-bottom: 7px;
  }
`;

const ScheduleContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_Point};
  color: ${({ theme }) => theme.palette.grey_850};
  .smallBox {
    margin-top: 16px;
    margin-bottom: 12px;
  }
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Body_1};
  }
`;

export default RecruitSchedule;
