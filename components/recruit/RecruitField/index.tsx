import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Path from 'constants/path';
import { RECRUITING_STATUS, RecruitStatus } from '../../../constants/status';
import { RECRUIT_FIELD_NAMES, RECRUIT_TITLE } from 'database/recruit';
import SectionTitle from 'components/common/SectionTitle';
import styled from 'styled-components';
import media from 'styles/media';
import theme, { PaletteKeyTypes } from 'styles/theme';
import RecruitCard from '../RecuitCard';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function RecruitField(): ReactElement {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<RecruitStatus>(RecruitStatus.PRE);
  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();
  const router = useRouter();

  useEffect(() => {
    setStatus(RECRUITING_STATUS());
    const timer = setInterval(() => setStatus(RECRUITING_STATUS()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isRecruiting =
    status === RecruitStatus.ACTIVE || status === RecruitStatus.EXTRA;

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
              /*
               * 모집 중: 지원 페이지로 이동
               * 모집 전: 직군별 인재상 & JD 페이지로 이동 (모집 전에만 공개하는 페이지)
               * 모집 후: 카드를 뒤집어 상세를 보여 준다
               */
              if (isRecruiting) {
                window.open(field.url, '_blank');
                return;
              }
              if (status === RecruitStatus.PRE) {
                router.push(`${Path.Recruit}/${field.slug}`);
                return;
              }
              setFlippedIndex(flippedIndex === index ? null : index);
            }}
          >
            <RecruitCard
              name={field.name}
              description={field.description}
              backInfo={field.backInfo}
              backgroundColor={field.backgroundColor as PaletteKeyTypes}
              fontColor={field.fontColor as PaletteKeyTypes}
              actionLabel={isRecruiting ? '지원하기' : '자세히 보기'}
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
  background-color: ${theme.palette.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 80px 120px;

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
  /* 카드가 커질 때(hover) 잘리지 않을 만큼의 여백 */
  margin: 4px 0 0;
  padding: 32px;
  max-width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(3, auto);

  ${media.tablet} {
    grid-template-columns: repeat(2, auto);
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, auto);
    padding: 32px 0;
  }
`;
