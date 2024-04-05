import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const Banner24th = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div style={{ display: 'none' }}>
        <Image
          src={'/assets/images/24th/banner-pc.webp'}
          alt=""
          width={0}
          height={0}
          priority
        />
        <Image
          src={'/assets/images/24th/banner-tablet.webp'}
          alt=""
          width={0}
          height={0}
          priority
        />
        <Image
          src={'/assets/images/24th/banner-mobile.webp'}
          alt=""
          width={0}
          height={0}
          priority
        />
      </div>

      <Banner24thTextContentBox className={mounted ? 'appear' : ''}>
        <h2>YAPP 24TH RECRUITING</h2>
        <h3>
          세상을 바꿀
          <br />
          24기 야뿌를 찾습니다
        </h3>
      </Banner24thTextContentBox>

      <Banner24thBackgroundInner />
    </>

    // <Banner24thContainer>
    //   <Banner24thTextContentBox>
    //     <h2>YAPP 24TH RECRUITING</h2>
    //     <h3>
    //       세상을 바꿀
    //       <br />
    //       24기 야뿌를 찾습니다
    //     </h3>
    //   </Banner24thTextContentBox>

    //   <Banner24thCardsBox className={mounted ? 'appear' : ''}>
    //     <Image
    //       src={'/assets/images/24th/banner-bg-cards.webp'}
    //       alt="banner-cards"
    //       width={0}
    //       height={0}
    //       layout="responsive"
    //       objectFit="fill"
    //       priority
    //     />
    //   </Banner24thCardsBox>

    //   <Banner24thMaskBox className={mounted ? 'appear' : ''}>
    //     <Image
    //       src={'/assets/images/24th/banner-bg-mask.webp'}
    //       alt="banner-mask"
    //       width={0}
    //       height={0}
    //       layout="responsive"
    //       objectFit="fill"
    //       priority
    //     />
    //   </Banner24thMaskBox>
    // </Banner24thContainer>
  );
};

export default Banner24th;

const Banner24thTextContentBox = styled.div`
  position: absolute;
  top: 14%;
  left: 50%;
  z-index: 20;
  flex: 1;
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 2rem;

  transition: transform 2s ease, opacity 2s ease;
  transform: translate3d(-50%, -2rem, 0);
  opacity: 0;

  &.appear {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }

  & > h2 {
    padding: 1rem 2.6rem;
    margin: 0;
    border: 1px solid rgba(255, 155, 83, 0.77);
    border-radius: 10rem;
    background-color: transparent;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 115%;
    letter-spacing: -0.032rem;
    color: ${({ theme }) => theme.palette.orange_450};
  }

  & > h3 {
    margin: 0;
    text-align: center;
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: -0.07rem;
    color: ${({ theme }) => theme.palette.white};
  }

  ${media.custom(720)} {
    gap: 1.6rem;

    & > h2 {
      font-size: 2.4rem;
      letter-spacing: -0.014rem;
    }

    & > h3 {
      font-size: 4.8rem;
      letter-spacing: -0.032rem;
    }
  }

  ${media.custom(430)} {
    top: 15%;
    gap: 1rem;

    & > h2 {
      font-size: 1.4rem;
      letter-spacing: -0.014rem;
    }

    & > h3 {
      font-size: 2.8rem;
      letter-spacing: -0.032rem;
    }
  }
`;

const Banner24thBackgroundInner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  background-image: url('/assets/images/24th/banner-pc.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;

  ${media.mobile} {
    background-image: url('/assets/images/24th/banner-tablet.webp');
  }

  ${media.small} {
    background-image: url('/assets/images/24th/banner-mobile.webp');
  }
`;

// const Banner24thContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   background-color: ${({ theme }) => theme.palette.black};
// `;

// const Banner24thTextContentBox = styled.div`
//   z-index: 20;
//   flex: 1;
//   display: flex;
//   height: fit-content;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   transform: translate3d(0, -25%, 0);
//   gap: 2rem;

//   & > h2 {
//     padding: 1rem 2.6rem;
//     margin: 0;
//     width: fit-content;
//     border: 1px solid rgba(255, 155, 83, 0.77);
//     border-radius: 10rem;
//     background-color: transparent;
//     font-size: 3.2rem;
//     font-weight: 500;
//     line-height: 115%;
//     letter-spacing: -0.032rem;
//     color: ${({ theme }) => theme.palette.orange_450};
//   }

//   & > h3 {
//     margin: 0;
//     text-align: center;
//     font-size: 6.4rem;
//     font-weight: 700;
//     line-height: 125%;
//     letter-spacing: -0.07rem;
//     color: ${({ theme }) => theme.palette.white};
//   }

//   ${media.custom(720)} {
//     gap: 1.6rem;

//     & > h2 {
//       font-size: 2.4rem;
//       letter-spacing: -0.014rem;
//     }

//     & > h3 {
//       font-size: 4.8rem;
//       letter-spacing: -0.032rem;
//     }
//   }

//   ${media.xSmall} {
//     gap: 1rem;

//     & > h2 {
//       font-size: 1.4rem;
//       letter-spacing: -0.014rem;
//     }

//     & > h3 {
//       font-size: 2.8rem;
//       letter-spacing: -0.032rem;
//     }
//   }
// `;

// const Banner24thMaskBox = styled.div`
//   z-index: 10;
//   position: absolute;
//   top: 50%;
//   left: 50%;

//   max-width: 156rem;
//   width: 80%;
//   height: auto;

//   transition: transform 2s ease;
//   transform: translate3d(-50%, -50%, 0) scale(0.8);
//   ${media.tablet} {
//     width: 100%;
//   }

//   ${media.mobile} {
//     width: 120%;
//   }

//   ${media.small} {
//     width: 120%;
//   }

//   &.appear {
//     transform: translate3d(-50%, -50%, 0) scale(1);
//   }
// `;

// const Banner24thCardsBox = styled.div`
//   flex: 1;
//   z-index: 10;
//   position: absolute;
//   bottom: 50%;
//   left: 50%;

//   width: 60%;
//   height: auto;

//   transition: transform 2s ease, opacity 0.5s ease;
//   transform: translate3d(-50%, calc(52% + 2rem), 0);
//   opacity: 0;

//   ${media.tablet} {
//     width: 55%;
//   }

//   ${media.mobile} {
//     width: 80%;
//   }

//   ${media.small} {
//     width: 100%;
//   }

//   &.appear {
//     transform: translate3d(-50%, 52%, 0);
//     opacity: 1;
//   }
// `;
