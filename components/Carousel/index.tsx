import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import Slider, { Settings } from 'react-slick';
import media from 'styles/media';

interface CarouselProps {
  data: any;
}

function Carousel({ data }: CarouselProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: true, // 캐러셀 하단부 점으로 한번에 이동
      arrows: true, // 캐러셀을 움직이는 화살표 추가
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3, // 한번에 보여줄 슬라이드 수
      infinite: true, // 무한 캐러셀 여부
      arrow: true,
      autoplay: true, // 자동재생 여부
      speed: 400, // 슬라이더 속도
      pauseOnHover: true,
      draggable: true,
      nextArrow: <Arrow></Arrow>,
      prevArrow: <Arrow></Arrow>,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '50px',
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            centerPadding: '200px',
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    [],
  );

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {data.map(({ img }: any, idx: any) => (
          <ProjectCard className="project-card" key={idx}>
            {img}
          </ProjectCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  margin: 64px 0;
  overflow: hidden;

  .slick-track {
    height: 331px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1s;
  }

  // 슬라이더 중앙 요소
  .slick-center.slick-active .project-card {
    transform: scale(1.3);

    background-color: #c4c4c4;
  }

  // 좌 우 버튼
  .slick-arrow {
    position: absolute;
    top: 50%;
    border: none;
    z-index: 300;
  }

  .slick-prev {
    left: 40%;
  }

  .slick-next {
    right: 40%;
  }

  // Dots
  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

const ProjectCard = styled.div`
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

const Arrow = styled.div`
  background: 'red';
  width: 32px;
  height: 32px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Dot = styled.button<{ active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 16px;
  background: ${({ active }) => (active ? '#000' : '#e8e8e8')};
  cursor: pointer;
`;

export default Carousel;
