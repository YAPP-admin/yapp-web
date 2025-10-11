import type { ReactElement } from 'react';
import styled from 'styled-components';
import { SectionTitle, SectionTemplate } from 'components/home';
import { AnimatedBox } from 'components/common';
import { CURRENT_INFO_DATA } from 'database/home';
import media from 'styles/media';
import Image from 'next/image';
import { PaletteKeyTypes } from 'styles/theme';
import CircusCard from 'components/common/CircusCard';

function GridSection(): ReactElement {
  return (
    <GridSectionContainer>
      <SectionTitle
        title="지금 YAPP은 이렇게 움직여요"
        subTitle="실무 기반 협업 시스템으로 운영되는 연합 기업형 IT 동아리"
      />
      <GridContainer>
        {CURRENT_INFO_DATA.map(
          ({ title, content, icon, color, fontColor }, index) => (
            <CircusCard
              key={index}
              title={title}
              content={content}
              icon={icon}
              color={color as PaletteKeyTypes}
              fontColor={fontColor as PaletteKeyTypes}
            />
          ),
        )}
      </GridContainer>
    </GridSectionContainer>
  );
}
const GridSectionContainer = styled(SectionTemplate)`
  width: auto;
  background-color: ${({ theme }) => theme.palette.black};
  padding: 188px 80px;

  ${media.mobile} {
    padding: 120px 20px;
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
    grid-template-columns: repeat(1, 1fr);
    align-items: stretch;
  }
`;

export default GridSection;
