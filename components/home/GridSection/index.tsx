import type { ReactElement } from 'react';
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
      initial={typeof window === 'undefined' ? false : 'hidden'}
      animate={controls}
      variants={containerVariants}
    >
      <motion.div ref={ref} variants={itemVariants}>
        <SectionTitle title={title} subTitle={subTitle} />
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
    </SectionLayout>
  );
}

const SectionLayout = styled(motion.section)`
  background-color: ${({ theme }) => theme.palette.black};
  width: auto;
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const GridContainer = styled.div`
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

export default GridSection;
