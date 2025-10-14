import { RECRUIT_FIELD_NAMES, RECRUIT_TITLE } from 'database/recruit';
import { ReactElement, useEffect, useState } from 'react';
import SectionTitle from 'components/common/SectionTitle';
import styled from 'styled-components';
import media from 'styles/media';
import theme from 'styles/theme';
import RecruitCard from '../RecuitCard';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function RecruitField(): ReactElement {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
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
        <SectionTitle title={RECRUIT_TITLE} align="center" />
      </motion.div>
      <CardGrid as={motion.ul} variants={containerVariants}>
        {RECRUIT_FIELD_NAMES.map((field, index) => (
          <motion.li
            key={field.name}
            variants={itemVariants}
            onClick={() => {
              if (field.url) {
                window.open(field.url, '_blank');
              }
            }}
          >
            <RecruitCard
              name={field.name}
              description={field.description}
              backInfo={field.backInfo}
              backgroundColor={field.backgroundColor as any}
              isFlipped={flippedIndex === index}
              onHoverStart={() => setFlippedIndex(index)}
              onHoverEnd={() => setFlippedIndex(null)}
            />
          </motion.li>
        ))}
      </CardGrid>
    </SectionLayout>
  );
}

export default RecruitField;

const SectionLayout = styled.section`
  background-color: ${theme.palette.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 200px 80px;

  ${media.tablet} {
    padding: 80px;
  }

  ${media.mobile} {
    padding: 80px 20px;
  }
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 32px;
  justify-content: center;
  padding: 32px;
  overflow: hidden;
  grid-template-columns: repeat(3, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;
