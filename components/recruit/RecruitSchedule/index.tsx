'use client';

import { RECRUIT_SCHEDULE } from 'database/recruit';
import { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTitle from 'components/common/SectionTitle';
import CircusCard from 'components/common/CircusCard';
import { PaletteKeyTypes } from 'styles/theme';
import { AnimatedBox } from 'components/common';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

const additionalSchedule = {
  contents: [
    { label: '1차 서류', text: '지원서 작성 및 포트폴리오 제출' },
    { label: '2차 면접', text: '온라인 인터뷰 후 최종 합격' },
  ],
  color: 'chemistry_29th_blue',
  fontColor: 'white_100',
};

function RecruitSchedule(): ReactElement {
  const { title, schedules, subTitle } = RECRUIT_SCHEDULE;
  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

  return (
    <SectionLayout
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <SectionInner>
        <motion.div variants={itemVariants}>
          <SectionTitle
            title={title}
            subTitle={subTitle}
            fontColor="black_100"
            subFontColor="black_50"
            align="flex-start"
          />
        </motion.div>
        <SectionContent
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <GridContainer as={motion.div} variants={containerVariants}>
            {schedules.map(
              ({ title, content, icon, color, fontColor }, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <CircusCard
                    title={title}
                    content={content}
                    icon={icon}
                    color={color as PaletteKeyTypes}
                    fontColor={fontColor as PaletteKeyTypes}
                  />
                </motion.div>
              ),
            )}
            <motion.div key="additional" variants={itemVariants}>
              <GuideBox
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
              </GuideBox>
            </motion.div>
          </GridContainer>
        </SectionContent>
      </SectionInner>
    </SectionLayout>
  );
}

const SectionLayout = styled(motion.section)`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const SectionInner = styled.div`
  max-width: 1040px;
  width: 100%;
`;

const SectionContent = styled.div`
  width: auto;
  display: flex;
  gap: 30px;
  justify-content: space-between;

  ${media.tablet} {
    gap: 0px;
    width: auto;
  }
`;

/* 안내 문구가 줄바꿈되면 카드가 내용만큼 늘어난다 (다른 카드는 높이 고정) */
const GuideBox = styled(AnimatedBox)`
  height: auto;
  min-height: 180px;
`;

/* 시안: 제목 아래 48px. 360 화면에서는 카드 328x156, 간격 16px (본문보다 좌우 4px씩 넓다) */
const GridContainer = styled.article`
  width: 100%;
  display: grid;
  gap: 24px;
  margin-top: 48px;

  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;

  ${media.mobile} {
    grid-template-columns: 1fr;
    align-items: stretch;
    gap: 16px;
    width: calc(100% + 8px);
    margin: 48px -4px 0;

    section {
      height: 156px;
    }

    ${GuideBox} {
      height: auto;
      min-height: 156px;
    }
  }
`;

const CardInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

const CardInnerLine = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CardLabel = styled.span`
  white-space: nowrap;
  padding: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.white_20};
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.caption_md};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.caption_sm};
  }
`;

const CardInnerText = styled.div`
  color: ${({ theme }) => theme.palette.white_100};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

export default RecruitSchedule;
