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
  const { ref, controls, containerVariants, itemVariants } =
    useScrollAnimation();

  return (
    <SponsorSectionContainer
      as={motion.section}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <SectionInner>
        <motion.div variants={itemVariants}>
          <SectionTitle
            fontColor="black_100"
            subFontColor="black_60"
            align="flex-start"
            title={title}
            subTitle={subTitle}
          />
        </motion.div>

        <SponsorList as={motion.ul} variants={containerVariants}>
          {SPONSOR_DATA.map(({ image, alt, width, height }, index) => (
            <Sponsor as={motion.li} key={index} variants={itemVariants}>
              {/* 바탕색까지 그림에 들어 있어 색이 바뀌면 안 된다. 다시 압축하지 않고 그대로 내보낸다 */}
              <Image
                src={image}
                alt={alt}
                width={width}
                height={height}
                unoptimized
              />
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
      </SectionInner>
    </SponsorSectionContainer>
  );
}

const SponsorSectionContainer = styled(SectionTemplate)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  padding: 160px 80px;
  background-color: ${({ theme }) => theme.palette.white_100};

  ${media.mobile} {
    padding: 100px 20px;
  }
`;

const SectionInner = styled.div`
  max-width: 1040px;
  width: 100%;
`;

const SponsorList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 48px 0;
  width: 100%;

  /* 한 줄에 세 장, 남는 두 장은 가운데로 */
  ${media.mobile} {
    flex-wrap: wrap;
  }

  /* 시안: 360 화면에서는 135px 카드를 두 장씩 가운데에 */
  ${media.small} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 135px));
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;

  /* 시안: 버튼 136x53 (360 화면은 121x42) */
  button {
    padding: 12px 20px;
  }

  ${media.small} {
    button {
      padding: 8px 18px;
    }
  }
`;

const Sponsor = styled.li`
  position: relative;
  /* 시안: 196x196. 화면이 좁아지면 같은 비율로 줄어든다 */
  flex: 1 1 0;
  max-width: 196px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.palette.black_5};
  border-radius: 16px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  /*
   * 시안: 로고 좌우 여백 24px.
   * 그림은 로고 폭의 3배 크기(카드 색 바탕 포함)라서, 로고 폭(100% - 48px)의 3배로 놓고
   * 카드 밖으로 넘치는 바탕은 잘라 낸다.
   */
  & img {
    flex: none;
    width: calc((100% - 48px) * 3);
    max-width: none;
    height: auto;
  }

  ${media.mobile} {
    flex: 0 0 calc((100% - 32px) / 3);
    max-width: none;
  }
`;

const ButtonLinked = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.white_100};
`;

export default SponsorSection;
