import { Box } from 'components';
import { RECRUIT_APPLY_WAY } from 'database/recruit';
import useDragScroll from 'hooks/useDragScroll';
import React, { ReactElement } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate, SectionTitle } from '..';

function ApplyWay(): ReactElement {
  const { title, ways } = RECRUIT_APPLY_WAY;

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
        {ways.map(({ subTitle, description }) => (
          <WayBox
            width={380}
            height={258}
            backgroundColor="grey_50"
            key={`applyWay-${subTitle}`}
          >
            <WayInnerBox>
              <WaySubTitle>{subTitle}</WaySubTitle>
              <WayContent
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              />
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
    margin: 0 22px;
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
  white-space: nowrap;
  ${media.tablet} {
    margin-right: 30px;
    min-width: 380px;
  }
  ${media.mobile} {
    margin: 0 auto;
    margin-bottom: 16px;
    min-width: auto;
    white-space: normal;
    min-height: 191px;
    height: auto;
    width: 100%;
  }
`;

const WayInnerBox = styled.div`
  padding: 32px;
`;

const WaySubTitle = styled.div`
  ${({ theme }) => theme.textStyle.web.Subtitle}
  color: ${({ theme }) => theme.palette.grey_1000};
  margin-bottom: 8px;
  ${media.mobile} {
    ${({ theme }) => theme.textStyle.mobile.Subtitle}
  }
`;

const WayContent = styled.div`
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

export default ApplyWay;
