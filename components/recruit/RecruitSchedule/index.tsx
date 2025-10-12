import { RECRUIT_SCHEDULE } from 'database/recruit';
import useDragScroll from 'hooks/useDragScroll';
import { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { SectionTemplate } from '..';
import SectionTitle from 'components/common/SectionTitle';
import CircusCard from 'components/common/CircusCard';
import { PaletteKeyTypes } from 'styles/theme';
import { AnimatedBox } from 'components/common';

const additionalSchedule = {
  contents: [
    { label: '1차 서류', text: '지원서 작성 및 포트폴리오 제출' },
    { label: '2차 서류', text: '온라인 인터뷰 후 최종 합격' },
  ],
  color: 'circus_blue',
  fontColor: 'white_100',
};

function RecruitSchedule(): ReactElement {
  const { title, schedules, subTitle } = RECRUIT_SCHEDULE;
  const { handleDragEnd, handleDragMove, handleDragStart, scrollRef } =
    useDragScroll();

  return (
    <SectionTemplate>
      <SectionTitle
        title={title}
        subTitle={subTitle}
        fontColor="black_100"
        subFontColor="black_50"
        align="left"
      />
      <SectionContent
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        ref={scrollRef}
      >
        <GridContainer>
          {schedules.map(
            ({ title, content, icon, color, fontColor }, index) => (
              <CircusCard
                key={index}
                title={title}
                content={content}
                icon={icon}
                color={color as PaletteKeyTypes}
                fontColor={fontColor as PaletteKeyTypes}
              />
            ),
          )}
          <AnimatedBox
            key={6}
            color={additionalSchedule.color as PaletteKeyTypes}
            fontColor={additionalSchedule.fontColor as PaletteKeyTypes}
          >
            <CardInnerBox>
              {additionalSchedule.contents.map((item, index) => (
                <CardInnerLine key={index}>
                  <CardLabel>{item.label}</CardLabel>
                  <CardInnerText style={{ marginTop: '4px' }}>
                    {item.text}
                  </CardInnerText>
                </CardInnerLine>
              ))}
            </CardInnerBox>
          </AnimatedBox>
        </GridContainer>
      </SectionContent>
    </SectionTemplate>
  );
}

const SectionContent = styled.div`
  width: auto;
  display: flex;
  gap: 30px;
  justify-content: space-between;

  ${media.tablet} {
    gap: 0px;
    width: auto;
    overflow: auto;
  }
`;

const GridContainer = styled.article`
  width: 100%;
  display: grid;
  row-gap: 32px;
  column-gap: 30px;
  margin-top: 64px;

  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;

  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    align-items: stretch;
  }
`;

const CardInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  min-height: 150px;
`;

const CardInnerLine = styled.li`
  display: flex;
  gap: 16px;
`;

// Card 내부 label + text
const CardLabel = styled.span`
  padding: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.black_100};
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.caption_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;

const CardInnerText = styled.div`
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

export default RecruitSchedule;
