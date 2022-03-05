import React, { useMemo, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Slider, { Settings } from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import media from 'styles/media';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Breakpoints from 'constants/breakpoints';
import { ArrowRight, ArrowLeft } from 'public/assets/icons';

type CarouselDataType = {
  title: string;
  link: string;
  image: string;
};

export interface CarouselProps {
  data: CarouselDataType[];
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
      speed: 800, // 슬라이더 속도
      pauseOnHover: true, // Hover시 멈춤
      draggable: true, // 드래그 가능
      // 반응형, 현재는 임시 구현
      responsive: [
        {
          breakpoint: Breakpoints.small,
          settings: {
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
        {data.map(({ title, link, image }: any, index: number) => (
          <Link href={link} key={index}>
            <ProjectCard className="project-card">
              <Image src={image} layout="fill" loading="eager" />
              <ProjectBlurCard>{title}</ProjectBlurCard>
            </ProjectCard>
          </Link>
        ))}
      </Slider>
      <>
        <Arrow left onClick={handlePrevious}>
          <ArrowLeft />
        </Arrow>
        <Arrow onClick={handleNext}>
          <ArrowRight />
        </Arrow>
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
    transition: transform 1.5s;
  }

  // Carousel 중앙 요소
  .slick-center.slick-active {
    transform: scale(1.2);

    ${media.small} {
      transform: none;
    }
  }

  // Dots
  .slick-dots {
    padding-bottom: 20px;
    button::before {
      color: ${({ theme }) => theme.palette.grey_900};
    }

    .slick-active {
      button::before {
        color: ${({ theme }) => theme.palette.black};
      }
    }

    ${media.small} {
      padding-bottom: 60px;
    }
  }
`;

const ProjectCard = styled.div`
  position: relative;
  display: block;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  filter: drop-shadow(
    0px 10px 20px ${({ theme }) => theme.palette.grey_850 + '40'}
  );

  width: 409px !important;
  height: 229px !important;

  ${media.mobile} {
    width: 335px !important;
    height: 189px !important;
  }

  :hover {
    > span {
      visibility: visible;
    }
  }
`;

const ProjectBlurCard = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  visibility: hidden;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.black + '50'};
  ${({ theme }) => theme.textStyle.web.Button}
`;

const Arrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  ${({ left }) =>
    left
      ? css`
          left: 38.5%;
        `
      : css`
          right: 38.5%;
        `};

  ${media.mobile} {
    ${({ left }) =>
      left
        ? css`
            left: 40%;
          `
        : css`
            right: 40%;
          `};
  }

  ${media.small} {
    ${({ left }) =>
      left
        ? css`
            left: 42%;
          `
        : css`
            right: 42%;
          `};
  }
`;

export default Carousel;
