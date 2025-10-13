import { Button, NewsCard } from 'components/common';
import { SectionTemplate } from 'components/home';
import Yapp from 'constants/yapp';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import { Medium } from 'types/medium';
import { motion } from 'framer-motion';
import SectionTitle from 'components/common/SectionTitle';

const colors = [
  'circus_red',
  'circus_gray',
  'circus_blue',
] as PaletteKeyTypes[];
const fontColors = ['white_100', 'black_100', 'white_100'] as PaletteKeyTypes[];

function MainContainer({ data }: { data: Medium[] }): ReactElement {
  const loopData = [...data, ...data];
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  const speed = 50;
  const duration = trackWidth / speed;

  useEffect(() => {
    function updateWidth() {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth / 2);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return (
    <SocialContainer>
      <PaddingSection>
        <SectionTitle
          fontColor="black_100"
          subFontColor="black_60"
          title="YAPP 안의 사람들, 그리고 이야기"
          subTitle="야뿌들의 성장 과정, 활동 후기, 밋업 현장과 다양한 이야기를 담고 있어요."
        />
      </PaddingSection>
      <CarouselContainer>
        <CarouselTrack
          ref={trackRef}
          animate={{ x: [0, -trackWidth] }}
          transition={{ repeat: Infinity, duration, ease: 'linear' }}
        >
          {loopData.map((item, index) => (
            <NewsCard
              key={index}
              data={item}
              color={colors[index % colors.length]}
              fontColor={fontColors[index % fontColors.length]}
            />
          ))}
        </CarouselTrack>
      </CarouselContainer>

      <Button
        variant="black"
        onClick={() => window.open(Yapp.YAPP_FACEBOOK, '_blank')}
      >
        이야기 더보기
      </Button>
    </SocialContainer>
  );
}

const SocialContainer = styled(SectionTemplate)`
  padding: 200px 0;

  ${media.mobile} {
    padding: 120px 0;
  }
`;

const PaddingSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 0 80px;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 48px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 10;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      white 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, white 0%, rgba(255, 255, 255, 0) 100%);
  }

  ${media.mobile} {
    &::before,
    &::after {
      width: 40px;
    }
  }
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-shrink: 0;
  will-change: transform;
  backface-visibility: hidden;
`;

export default MainContainer;
