import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
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
  /* 마우스·초점으로 뒤집힌 카드와, 모집 후에 눌러서 뒤집은 카드를 따로 기억한다 */
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<RecruitStatus>(RecruitStatus.PRE);
  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

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
        {RECRUIT_FIELD_NAMES.map((field, index) => {
          const card = (
            <RecruitCard
              name={field.name}
              description={field.description}
              backInfo={field.backInfo}
              backgroundColor={field.backgroundColor as PaletteKeyTypes}
              fontColor={field.fontColor as PaletteKeyTypes}
              actionLabel={isRecruiting ? '지원하기' : '자세히 보기'}
              isFlipped={flippedIndex === index || pressedIndex === index}
              onHoverStart={() => setFlippedIndex(index)}
              onHoverEnd={() => setFlippedIndex(null)}
            />
          );
          /* 키보드로 초점이 들어와도 마우스를 올렸을 때처럼 상세를 보여 준다 */
          const focusProps = {
            onFocus: () => setFlippedIndex(index),
            onBlur: () => setFlippedIndex(null),
          };

          /*
           * 모집 중: 지원 페이지로 가는 링크
           * 모집 전: 직군별 인재상 & JD 페이지로 가는 링크 (모집 전에만 공개하는 페이지)
           * 모집 후: 카드를 뒤집어 상세를 보여 주는 버튼
           */
          return (
            <motion.li key={field.name} variants={itemVariants}>
              {isRecruiting && (
                <CardAction
                  as="a"
                  href={field.url}
                  target="_blank"
                  rel="noreferrer"
                  {...focusProps}
                >
                  {card}
                </CardAction>
              )}
              {status === RecruitStatus.PRE && (
                <Link
                  href={`${Path.Recruit}/${field.slug}`}
                  passHref
                  legacyBehavior
                >
                  <CardAction as="a" {...focusProps}>
                    {card}
                  </CardAction>
                </Link>
              )}
              {status === RecruitStatus.POST && (
                <CardAction
                  type="button"
                  aria-pressed={pressedIndex === index}
                  onClick={() =>
                    setPressedIndex(pressedIndex === index ? null : index)
                  }
                  onBlur={() => setPressedIndex(null)}
                >
                  {card}
                </CardAction>
              )}
            </motion.li>
          );
        })}
      </CardGrid>
    </SectionLayout>
  );
}

export default RecruitField;

/* 카드 전체를 감싸는 링크 또는 버튼 */
const CardAction = styled.button`
  display: block;
  max-width: 100%;
  border-radius: 12px;
  color: inherit;
  text-align: left;

  &:focus-visible {
    outline: 3px solid ${theme.palette.grey_850};
    outline-offset: 4px;
  }
`;

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
  /*
   * 카드가 커질 때(hover) 잘리지 않을 만큼의 여백.
   * 시안: 제목 아래 36px에서 카드가 시작하고, 카드 아래는 섹션 여백만 남는다.
   * 그래서 이 여백(32px)과 제목 아래 빈 줄(8px)만큼 위아래로 당긴다.
   */
  margin: -4px 0 -32px;
  padding: 32px;
  max-width: 100%;
  overflow: hidden;
  grid-template-columns: repeat(3, auto);

  ${media.tablet} {
    grid-template-columns: repeat(2, auto);
  }

  /* 좁은 화면에서도 커진 카드와 초점 테두리가 잘리지 않게 섹션 여백만큼 바깥으로 넓힌다 */
  ${media.mobile} {
    margin: -4px -20px -32px;
    padding: 32px 20px;
    max-width: calc(100% + 40px);
  }

  /* 카드 두 장(320px)이 들어가지 않는 폭부터 한 줄에 한 장 */
  ${media.custom(719)} {
    grid-template-columns: minmax(0, auto);
  }
`;
