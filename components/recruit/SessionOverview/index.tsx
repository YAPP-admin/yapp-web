import { SESSION_OVERVIEW } from 'database/recruit';
import { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTemplate from '../SectionTemplate';
import SectionTitle from 'components/common/SectionTitle';
import { PaletteKeyTypes } from 'styles/theme';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { motion } from 'framer-motion';

function SessionOverview(): ReactElement {
  const { title, overviewContents, subtitle } = SESSION_OVERVIEW;

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
      <SectionInner>
        <motion.div variants={itemVariants}>
          <SectionTitle
            title={title}
            subTitle={subtitle}
            fontColor="black_100"
            subFontColor="black_50"
            align="flex-start"
          />
        </motion.div>
        <SectionContent
          as={motion.ul}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {overviewContents.map(
            ({ date, programs, backgroundColor }, index) => (
              <OverviewContentBox
                key={`recruit-overview-${date}`}
                as={motion.li}
                variants={itemVariants}
              >
                <OverviewContentSubTitle
                  backgroundColor={backgroundColor as PaletteKeyTypes}
                >
                  {date}
                </OverviewContentSubTitle>
                <OverviewContentContent>
                  {programs.map((program, i) => (
                    <span key={`line-${i}`}>{program}</span>
                  ))}
                </OverviewContentContent>
              </OverviewContentBox>
            ),
          )}
        </SectionContent>
      </SectionInner>
    </SectionLayout>
  );
}

const SectionLayout = styled(SectionTemplate)`
  display: flex;
  justify-content: center;
  width: auto;
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionContent = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 30px;
  margin-top: 48px;
`;

const OverviewContentBox = styled.li`
  list-style: none;
  width: 100%;
`;

const OverviewContentSubTitle = styled.div<{
  backgroundColor: PaletteKeyTypes;
}>`
  border-radius: 8px 8px 0 0;
  padding: 7px 0;
  text-align: center;
  background-color: ${({ backgroundColor, theme }) =>
    theme.palette[backgroundColor]};
  ${({ theme }) => theme.textStyleV2.resp.body_point_md};
  color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.body_point_sm};
  }
`;

const OverviewContentContent = styled.div`
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: space-around;
  ${({ theme }) => theme.textStyleV2.fix.font_15};
  background-color: ${({ theme }) => theme.palette.black_5};
  color: ${({ theme }) => theme.palette.black_80};
  padding: 22px 0;
`;

export default SessionOverview;
