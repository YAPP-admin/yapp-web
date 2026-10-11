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
          {SPONSOR_DATA.map(({ image, alt, url, width, height }) => (
            <SponsorItem as={motion.li} key={image} variants={itemVariants}>
              {/* 협력사 쪽에서 유입 경로를 볼 수 있게 noreferrer는 붙이지 않는다 */}
              <Sponsor href={url} target="_blank" rel="noopener">
                {/* 바탕색까지 그림에 들어 있어 색이 바뀌면 안 된다. 다시 압축하지 않고 그대로 내보낸다 */}
                <Image
                  src={image}
                  alt={alt}
                  width={width}
                  height={height}
                  unoptimized
                />
              </Sponsor>
            </SponsorItem>
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

/*
 * 시안: 한 줄에 다섯 장(196px, 간격 16px)을 왼쪽부터 채운다. 834 화면도 다섯 장(122px)이다.
 * 본문 폭(1040px)이 다섯 장(1044px)보다 4px 좁아 실제로는 195.2px가 된다.
 */
const SponsorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 196px));
  gap: 16px;
  margin: 48px 0;
  width: 100%;

  /* 한 줄에 세 장 */
  ${media.mobile} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  /* 시안: 360 화면에서는 135px 카드를 두 장씩 가운데에. 마지막 한 장은 왼쪽 칸에 놓인다 */
  ${media.small} {
    grid-template-columns: repeat(2, minmax(0, 135px));
    justify-content: center;
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

/* 시안: 196x196. 화면이 좁아지면 같은 비율로 줄어든다 */
const SponsorItem = styled.li`
  aspect-ratio: 1 / 1;
`;

const Sponsor = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.black_5};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* 마우스를 올리면 살짝 떠오른다. 터치 화면에서는 눌린 뒤에도 남지 않게 뺀다 */
  @media (hover: hover) {
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 8px 20px ${({ theme }) => theme.palette.grey_850 + '1F'};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.grey_850};
    outline-offset: 2px;
  }

  /*
   * 시안: 196px 카드에 로고 폭 140px (834 화면 122px에 87px, 360 화면 135px에 96px로 같은 비율).
   * 그림은 로고 둘레에 카드 색 바탕을 붙여 시안의 420px 정사각형을 담고 있다.
   * 카드 폭의 420/196배로 놓고, 카드 밖으로 넘치는 바탕은 잘라 낸다.
   */
  & img {
    flex: none;
    width: calc(100% * 420 / 196);
    max-width: none;
    height: auto;
  }
`;

const ButtonLinked = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.white_100};
`;

export default SponsorSection;
