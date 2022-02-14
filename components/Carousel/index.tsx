import React, { useMemo, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Slider, { Settings } from 'react-slick';
import media from 'styles/media';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface CarouselProps {
  data: any; // 데이터 확정 전, any 타입
}

function Carousel({ data }: CarouselProps) {
  const slickRef = useRef<Slider>(null);
  const settings = useMemo<Settings>(
    () => ({
      dots: true, // 캐러셀 하단부 점으로 한번에 이동
      arrows: true, // 캐러셀을 움직이는 화살표 추가
      centerMode: true, // 중앙 정렬
      centerPadding: '220px', // 좌 우 카드가 padding 만큼 삐져나오게 함
      slidesToShow: 3, // 한번에 보여줄 슬라이드 수
      infinite: true, // 무한 루프
      arrow: false, // 좌 우 화살표
      autoplay: true, // 자동재생
      speed: 400, // 슬라이더 속도
      pauseOnHover: true, // Hover시 멈춤
      draggable: true, // 드래그 가능
      // 반응형, 현재는 임시 구현
      responsive: [
        {
          breakpoint: 375, // 추후 breakpoint 상수로 대체
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
          },
        },
      ],
    }),
    [],
  );

  const handlePrevious = useCallback(() => slickRef.current!.slickPrev(), []);
  const handleNext = useCallback(() => slickRef.current!.slickNext(), []);

  return (
    <CarouselContainer>
      <Slider ref={slickRef} {...settings}>
        {data.map(({ img }: any, idx: any) => (
          <ProjectCard className="project-card" key={idx}>
            {img}
          </ProjectCard>
        ))}
      </Slider>
      <>
        <Arrow left onClick={handlePrevious}></Arrow>
        <Arrow onClick={handleNext}></Arrow>
      </>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 1920px;
  margin: 10px 0 64px;
  overflow: hidden;

  // Carousel Container

  .slick-slide {
    height: 400px;
  }

  .slick-list .slick-track {
    height: 331px;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1s;
  }

  // 중앙 요소
  .slick-center.slick-active {
    transform: scale(1.3);

    .project-card {
      background-color: #c4c4c4;
    }
  }

  // Dots
  .slick-dots {
    padding-bottom: 30px;
    button::before {
      color: #111111;
    }

    .slick-active {
      button::before {
        color: #000000;
      }
    }
  }
`;

const ProjectCard = styled.div`
  display: block;
  border-radius: 20px;
  background-color: #e8e8e8;
  cursor: pointer;

  width: 409px !important;
  height: 229px !important;

  ${media.mobile} {
    width: 335px !important;
    height: 189px !important;
  }
`;

const Arrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #e8e8e8;

  ${({ left }) =>
    left
      ? css`
          left: 40%;
        `
      : css`
          right: 40%;
        `};
`;

export default Carousel;
