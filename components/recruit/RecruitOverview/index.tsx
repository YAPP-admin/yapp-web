import { Box } from 'components/common';
import { RECRUIT_OVERVIEW } from 'database/recruit';
import useDragScroll from 'hooks/useDragScroll';
import DOMPurify from 'isomorphic-dompurify';
import { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate, SectionTitle } from '..';

function RecruitOverview(): ReactElement {
  const { title, overviewContents } = RECRUIT_OVERVIEW;

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
        {overviewContents.map(({ subTitle, description }) => (
          <OverviewContentBox
            backgroundColor="grey_50"
            key={`recruit-overview-${subTitle}`}
          >
            <OverviewContentInnerBox>
              <OverviewContentSubTitle>{subTitle}</OverviewContentSubTitle>
              <OverviewContentContent
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              />
            </OverviewContentInnerBox>
          </OverviewContentBox>
        ))}
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  justify-content: space-between;

  ${media.tablet} {
    gap: 0px;
    width: auto;
    overflow: auto;
    margin-left: 22px;

    &::-webkit-scrollbar {
      display: none;
    }
    .desktop {
      display: none;
    }
  }
  ${media.mobile} {
    flex-direction: column;
    gap: 16px;
    margin: 0 22px;
    .tablet {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

const OverviewContentBox = styled(Box)`
  flex: 1;
  padding: 0px;

  ${media.tablet} {
    margin-left: 30px;
    min-width: 380px;
  }
  ${media.mobile} {
    margin: 0 auto;
    min-width: auto;
    white-space: normal;
    min-height: 191px;
    height: auto;
    width: 100%;
  }
`;

const OverviewContentInnerBox = styled.div`
  padding: 32px;
`;

const OverviewContentSubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Subtitle}
  color: ${({ theme }) => theme.palette.grey_1000};
  margin-bottom: 8px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Subtitle}
  }
`;

const OverviewContentContent = styled.div`
  ${({ theme }) => theme.textStyle.web.Body_1};
  color: ${({ theme }) => theme.palette.grey_850};
  .smallBox {
    margin-top: 16px;
    margin-bottom: 12px;
  }
  .small {
    ${({ theme }) => theme.textStyle.web.Body_2};
    color: ${({ theme }) => theme.palette.grey_600};
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
    color: ${({ theme }) => theme.palette.grey_600};
    ${media.mobile} {
      ${({ theme }) => theme.textStyle.mobile.Body_3};
    }
  }
`;

export default RecruitOverview;
