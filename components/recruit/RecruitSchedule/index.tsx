import { RECRUIT_SCHEDULE } from 'database/recruit';
import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTemplate from '../SectionTemplate';
import SectionTitle from 'components/common/SectionTitle';
import CircusCard from 'components/common/CircusCard';
import { PaletteKeyTypes } from 'styles/theme';
import { AnimatedBox } from 'components/common';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

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
  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

  return (
    <SectionLayout
      ref={ref}
      as={motion.section}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionTitle
          title={title}
          subTitle={subTitle}
          fontColor="black_100"
          subFontColor="black_50"
          align="left"
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
            <AnimatedBox
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
          </motion.div>
        </GridContainer>
      </SectionContent>
    </SectionLayout>
  );
}

const SectionLayout = styled(SectionTemplate)`
  width: auto;
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

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
    grid-template-columns: 1fr;
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
