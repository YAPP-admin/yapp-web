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
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.white};
  /* 시안: 1920 화면에서 섹션 높이 1200px, 내용은 가운데 */
  min-height: 1200px;
  padding: 160px 80px;

  ${media.tablet} {
    min-height: auto;
    padding: 100px 80px;
  }

  ${media.mobile} {
    padding: 100px 12px;
  }
`;

const SectionInner = styled.div`
  max-width: 1040px;
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
  /* 시안의 반짝이(왼쪽 위 기준)와 구름(오른쪽 아래 기준) 레이어 */
  background-image: url('/assets/images/29th/ai_native_sparkle.webp'),
    url('/assets/images/29th/ai_native_cloud.webp');
  background-repeat: no-repeat;
  background-size: 838px 172px, 1040px 227px;
  background-position: 94px 56px, right bottom;

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
  word-break: keep-all;
`;

const InfoDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.grey_700};
  ${({ theme }) => theme.textStyleV2.fix.font_16};
  word-break: keep-all;
`;

export default AINativeSection;
