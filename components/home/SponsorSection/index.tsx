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
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${Yapp.YAPP_OFFICIAL_EMAIL}&su=협력문의&body=안녕하세요, 협력 관련 문의드립니다.`}
              target="_blank"
            >
              협력 문의하기
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
 * 시안: 한 줄에 네 장, 간격 16px. 1920 화면은 248px, 834 화면은 157px.
 * 360 화면에서는 135px 카드를 두 장씩 가운데에 놓는다.
 */
const SponsorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 48px 0;
  width: 100%;

  ${media.small} {
    grid-template-columns: repeat(2, minmax(0, 135px));
    justify-content: center;
  }
`;

const ButtonContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;

  /* 시안: 버튼 136x53 (834 화면은 132x45, 360 화면은 121x42) */
  button {
    padding: 12px 20px;
  }

  ${media.tablet} {
    button {
      padding: 8px 18px;
    }
  }
`;

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
  /*
   * 시안: 모서리 16px. 834·360 화면은 196px 카드를 그대로 줄인 모양이라 모서리도 같이 줄어든다
   * (157px 카드에 12.8px, 135px 카드에 11px).
   */
  border-radius: min(16px, calc(100% * 16 / 196));
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
   * 그림은 로고 둘레에 카드 색 바탕을 붙인 정사각형이고, 그림 폭의 1/3이 로고 폭(140px 기준)이다.
   * 시안: 1920 화면은 248px 카드에 로고 폭 180px이므로 그림을 카드 폭의 540/248배로 놓는다.
   * 카드 밖으로 넘치는 바탕은 잘라 낸다.
   */
  & img {
    flex: none;
    width: calc(100% * 540 / 248);
    max-width: none;
    height: auto;
  }

  /* 시안: 834·360 화면은 196px 카드에 로고 140px인 비율이다 (157px에 112px, 135px에 96px) */
  ${media.tablet} {
    & img {
      width: calc(100% * 420 / 196);
    }
  }
`;

const ButtonLinked = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.white_100};
`;

export default SponsorSection;
