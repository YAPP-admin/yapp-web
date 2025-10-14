import Yapp from 'constants/yapp';
import { SPONSOR_DATA, SPONSOR_SECTION } from 'database/home';
import type { ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import SectionTemplate from '../SectionTemplate';
import Image from 'next/image';
import SectionTitle from 'components/common/SectionTitle';
import { Button } from 'components/common';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';

function SponsorSection(): ReactElement {
  const { title, subTitle } = SPONSOR_SECTION;
  const { ref, controls, containerVariants, itemVariants } = useScrollAnimation(
    {
      threshold: 0.2,
      triggerOnce: false,
    },
  );

  return (
    <SponsorSectionContainer
      as={motion.section}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionTitle
          fontColor="black_100"
          subFontColor="black_60"
          align="left"
          title={title}
          subTitle={subTitle}
        />
      </motion.div>

      <SponsorList as={motion.ul} variants={containerVariants}>
        {SPONSOR_DATA.map(({ image, alt }, index) => (
          <Sponsor as={motion.li} key={index} variants={itemVariants}>
            <Image src={image} alt={alt} width={137} height={50} />
          </Sponsor>
        ))}
      </SponsorList>

      <ButtonContainer variants={itemVariants}>
        <Button variant="black">
          <ButtonLinked
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${Yapp.YAPP_OFFICIAL_EMAIL}&su=후원문의&body=안녕하세요, 후원 관련 문의드립니다.`}
            target="_blank"
          >
            후원 문의하기
          </ButtonLinked>
        </Button>
      </ButtonContainer>
    </SponsorSectionContainer>
  );
}

const SponsorSectionContainer = styled(SectionTemplate)`
  width: auto;
  padding: 160px 80px;
  background-color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const SponsorList = styled.ul`
  display: flex;
  gap: 1.6rem;
  margin: 48px 0;
  width: 100%;

  ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Sponsor = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.palette.black_5};
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    object-fit: contain;
    width: 200px;
    height: 80px;

    ${media.tablet} {
      width: 100px;
      height: 50px;
    }

    ${media.mobile} {
      width: 180px;
      height: 80px;
    }

    ${media.small} {
      width: 120px;
      height: 80px;
    }
  }
`;

const ButtonLinked = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.white_100};
`;

export default SponsorSection;
