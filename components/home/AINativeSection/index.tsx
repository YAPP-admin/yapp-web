import { type ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AI_NATIVE_SECTION } from 'database/home';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import media from 'styles/media';

function AINativeSection(): ReactElement {
  const { title, subTitle, team, cards } = AI_NATIVE_SECTION;

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
        <TitleBox variants={itemVariants}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TitleBox>

        <CardList>
          <TeamCard variants={itemVariants}>
            <TeamTitle>{team.title}</TeamTitle>
            <TeamDescription>
              {team.descriptions.map((description) => (
                <span key={description}>{description} </span>
              ))}
            </TeamDescription>
          </TeamCard>

          <InfoCardList>
            {cards.map(({ icon, iconWidth, title, description }) => (
              <InfoCard key={title} variants={itemVariants}>
                <Image
                  src={icon}
                  alt=""
                  width={iconWidth}
                  height={32}
                  unoptimized
                />
                <InfoTitle>{title}</InfoTitle>
                <InfoDescription>{description}</InfoDescription>
              </InfoCard>
            ))}
          </InfoCardList>
        </CardList>
      </SectionInner>
    </SectionLayout>
  );
}

const SectionLayout = styled(motion.section)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.white};
  padding: 160px 80px;

  ${media.mobile} {
    padding: 100px 12px;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const TitleBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2px;

  ${media.mobile} {
    padding: 0 8px;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_100};
  ${({ theme }) => theme.textStyleV2.resp.title1_md};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.title1_sm};
  }
`;

const SubTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.black_50};
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  word-break: keep-all;

  ${media.mobile} {
    ${({ theme }) => theme.textStyleV2.resp.subtitle_sm};
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`;

const TeamCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 54px 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.white_100};
  background-color: ${({ theme }) => theme.palette.chemistry_29th_blue};
  /* 옅은 구름 */
  background-image: radial-gradient(
      ellipse 160px 56px at 0% 62%,
      rgba(255, 255, 255, 0.2),
      transparent
    ),
    radial-gradient(
      ellipse 240px 48px at 56% 100%,
      rgba(255, 255, 255, 0.2),
      transparent
    ),
    radial-gradient(
      ellipse 150px 70px at 100% 52%,
      rgba(255, 255, 255, 0.2),
      transparent
    );

  /* 오른쪽으로 흐르는 선 */
  &::before {
    content: '';
    position: absolute;
    top: 9px;
    right: -30px;
    width: 808px;
    height: 376px;
    background: url('/assets/images/29th/lines.svg') no-repeat center / 100%
      100%;
    opacity: 0.6;
    pointer-events: none;
  }

  /* 반짝이 */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        circle at 322px 72px,
        #fff 0 2px,
        rgba(255, 255, 255, 0.35) 3px,
        transparent 7px
      ),
      radial-gradient(
        circle at 730px 113px,
        #fff 0 2px,
        rgba(255, 255, 255, 0.35) 3px,
        transparent 7px
      ),
      radial-gradient(circle at 742px 124px, #fff 0 1px, transparent 2px),
      radial-gradient(circle at 920px 172px, #fff 0 1px, transparent 2px),
      radial-gradient(circle at 897px 219px, #fff 0 1px, transparent 2px);
    pointer-events: none;
  }

  ${media.tablet} {
    &::before {
      right: -152px;
    }
  }

  ${media.mobile} {
    &::before {
      right: -140px;
    }
  }
`;

const TeamTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.title2_md};
`;

const TeamDescription = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  ${({ theme }) => theme.textStyleV2.resp.subtitle_md};
  word-break: keep-all;

  /* 넓은 화면에서는 문장마다 줄을 바꾼다 */
  span {
    display: block;
  }

  ${media.tablet} {
    span {
      display: inline;
    }
  }
`;

const InfoCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.chemistry_29th_grey};
`;

const InfoTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.palette.chemistry_29th_text};
  ${({ theme }) => theme.textStyleV2.fix.font_24};
`;

const InfoDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_700};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  word-break: keep-all;
`;

export default AINativeSection;
