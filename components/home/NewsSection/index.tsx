import { Button, NewsCard } from 'components/common';
import { SectionTemplate } from 'components/home';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { PaletteKeyTypes } from 'styles/theme';
import { Medium } from 'types/medium';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from 'components/common/SectionTitle';
import { useRouter } from 'next/router';
import Path from 'constants/path';
import { NEWS_SECTION } from 'database/home';

const colors = [
  'circus_red',
  'circus_gray',
  'circus_blue',
] as PaletteKeyTypes[];
const fontColors = ['white_100', 'black_100', 'white_100'] as PaletteKeyTypes[];

function MainContainer({ data }: { data: Medium[] }): ReactElement {
  const { title, subTitle } = NEWS_SECTION;
  const router = useRouter();
  const loopData = [...data, ...data];
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  const speed = 50;
  const duration = trackWidth / speed;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
    }
  }, [inView, controls]);

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
    <SocialContainer
      as={motion.section}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <PaddingSection>
        <SectionTitle
          fontColor="black_100"
          subFontColor="black_60"
          title={title}
          subTitle={subTitle}
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

      <Button variant="black" onClick={() => router.push(Path.Story)}>
        이야기 더보기
      </Button>
    </SocialContainer>
  );
}

const SocialContainer = styled(SectionTemplate)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0;

  ${media.mobile} {
    padding: 120px 0;
  }
`;

const PaddingSection = styled.section`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;

  ${media.mobile} {
    padding: 0 20px;
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 48px 0;
  position: relative;

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
