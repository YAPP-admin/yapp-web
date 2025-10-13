import type { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTemplate } from 'components/home';
import { CURRENT_INFO_DATA } from 'database/home';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import CircusCard from 'components/common/CircusCard';
import SectionTitle from 'components/common/SectionTitle';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function GridSection(): ReactElement {
  const { ref, controls, containerVariants, itemVariants } = useScrollAnimation(
    {
      containerVariants: {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeInOut' },
        },
      },
    },
  );

  return (
    <SectionLayout>
      <motion.section
        ref={ref}
        as={motion.section}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        style={{ width: '100%' }}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="지금 YAPP은 이렇게 움직여요"
            subTitle="실무 기반 협업 시스템으로 운영되는 연합 기업형 IT 동아리"
          />
        </motion.div>

        <GridContainer
          as={motion.div}
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
      </motion.section>
    </SectionLayout>
  );
}

const SectionLayout = styled(SectionTemplate)`
  width: auto;
  background-color: ${({ theme }) => theme.palette.black};
  padding: 188px 80px;

  ${media.mobile} {
    padding: 120px 20px;
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
