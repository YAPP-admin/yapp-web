import { RECRUIT_FIELD_NAMES, RECRUIT_TITLE } from 'database/recruit';
import { ReactElement, useState } from 'react';
import SectionTitle from 'components/common/SectionTitle';
import styled from 'styled-components';
import media from 'styles/media';
import theme from 'styles/theme';
import RecruitCard from '../RecuitCard';

function RecruitField(): ReactElement {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <SectionLayout>
      <SectionTitle title={RECRUIT_TITLE} align="center" />
      <CardGrid>
        {RECRUIT_FIELD_NAMES.map((field, index) => (
          <RecruitCard
            key={field.name}
            name={field.name}
            description={field.description}
            backInfo={field.backInfo}
            backgroundColor={field.backgroundColor as any}
            isFlipped={flippedIndex === index}
            onHoverStart={() => setFlippedIndex(index)}
            onHoverEnd={() => setFlippedIndex(null)}
          />
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
  padding: 191px 80px;

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
