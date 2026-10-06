import React, { useMemo, useRef, useCallback } from 'react';
import styled from 'styled-components';
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
      centerPadding: '169.5px', // 중앙 585px 카드와 양옆 카드 사이 간격 30px
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
              <Image
                src={image}
                alt={`${title} 대표 이미지`}
                layout="fill"
                sizes="(max-width: 833px) 335px, 585px"
                quality={90}
              />
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
  /* 카드 그림자가 잘리지 않게 슬라이드 위아래에 두는 여유 */
  --card-room: 35px;
  /* 시안: 제목과 카드 사이, 카드와 점 사이 80px (좁은 화면은 32px) */
  --carousel-gap: 80px;
  --card-height: 331px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 1920px;
  margin: calc(var(--carousel-gap) - var(--card-room)) 0 0;
  overflow: hidden;

  ${media.mobile} {
    --carousel-gap: 32px;
    --card-height: 189px;
  }

  // Carousel Container
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(var(--card-height) + 2 * var(--card-room));
    transition: transform 1.5s;
  }

  /* 링크가 글자 줄로 놓이면 아래에 빈틈이 생겨 카드가 가운데에서 밀린다 */
  .slick-slide > div {
    display: flex;
  }

  // Carousel 중앙 요소
  .slick-center.slick-active {
    .project-card {
      width: 585px !important;
      height: 331px !important;
    }

    ${media.mobile} {
      .project-card {
        width: 335px !important;
        height: 189px !important;
      }
    }
  }

  &&& .slick-dotted.slick-slider {
    margin-bottom: 0;
  }

  // Dots — 시안: 12px 점, 사이 16px
  .slick-dots {
    position: static;
    display: flex !important;
    justify-content: center;
    gap: 16px;
    height: 12px;
    margin: calc(var(--carousel-gap) - var(--card-room)) 0 0;
    padding: 0;

    li {
      width: 12px;
      height: 12px;
      margin: 0;
    }

    li button {
      position: relative;
      box-sizing: border-box;
      width: 12px;
      height: 12px;
      padding: 0;
    }

    /* 누르기 쉽게 점 둘레로 영역을 넓힌다 */
    li button::after {
      content: '';
      position: absolute;
      inset: -8px;
    }

    li button::before {
      content: '';
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.palette.grey_200};
      opacity: 1;
    }

    li.slick-active button::before {
      background-color: ${({ theme }) => theme.palette.grey_400};
      opacity: 1;
    }

    li button:focus-visible {
      outline: 2px solid ${({ theme }) => theme.palette.grey_850};
      outline-offset: 2px;
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
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
  );

  width: 409px !important;
  height: 229px !important;

  /* 시안: 360 화면의 카드 모서리 16px */
  ${media.mobile} {
    width: 335px !important;
    height: 189px !important;
    border-radius: 16px;
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
  border-radius: inherit;
  visibility: hidden;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.black + '50'};
  ${({ theme }) => theme.textStyle.web.Button}
`;

/* 시안: 가운데 카드 좌우 끝에서 16px 안쪽에 48px 버튼 (좁은 화면은 20px 안쪽에 32px) */
const Arrow = styled.button<{ left?: boolean }>`
  --card-width: 585px;
  --arrow-inset: 16px;
  position: absolute;
  /* 점을 뺀 카드 영역의 가운데 */
  top: calc(var(--card-room) + var(--card-height) / 2);
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  ${({ left }) => (left ? 'left' : 'right')}: calc(
    50% - var(--card-width) / 2 + var(--arrow-inset)
  );

  svg {
    width: 48px;
    height: 48px;
  }

  ${media.mobile} {
    --card-width: 335px;
    --arrow-inset: 20px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export default Carousel;
