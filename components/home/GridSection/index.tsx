'use client';

import { type ReactElement } from 'react';
import styled from 'styled-components';
import { CURRENT_INFO_DATA, GRID_SECTION } from 'database/home';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import CircusCard from 'components/common/CircusCard';
import SectionTitle from 'components/common/SectionTitle';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function GridSection(): ReactElement {
  const { title, subTitle } = GRID_SECTION;

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
        <motion.div ref={ref} variants={itemVariants}>
          <SectionTitle
            title={title}
            subTitle={subTitle}
            fontColor="black_100"
            subFontColor="black_50"
          />
        </motion.div>

        <GridContainer
          as={motion.div}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {CURRENT_INFO_DATA.map(
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
        </GridContainer>
      </SectionInner>
    </SectionLayout>
  );
}

const SectionLayout = styled(motion.section)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white};
  align-items: center;
  box-sizing: border-box;
  width: auto;
  /* 시안: 1920 화면에서 섹션 높이 1200px, 내용은 가운데 */
  min-height: 1200px;
  padding: 160px 80px;

  ${media.tablet} {
    min-height: auto;
    padding: 100px 80px;
  }

  ${media.mobile} {
    padding: 120px 20px;
  }
`;

const SectionInner = styled.div`
  max-width: 1040px;
  width: 100%;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 24px;
  margin-top: 32px;

  grid-template-columns: repeat(2, 1fr);
  align-items: stretch;

  ${media.mobile} {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export default GridSection;
