import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function FloatingArrow() {
  const [isHideArrow, setisHideArrow] = useState(false);

  const checkScroll = useCallback((e) => {
    const scrollTop = e.target.scrollTop || 0;
    if (scrollTop > 100) {
      setisHideArrow(true);
    } else {
      setisHideArrow(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', checkScroll, { capture: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      {!isHideArrow && (
        <ArrowDownConatiner>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <path
              d="M4 17L26 35L48 17"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowDownConatiner>
      )}
    </>
  );
}
export default FloatingArrow;

const ArrowDownConatiner = styled.div`
  position: fixed;
  bottom: 100px;
  left: 0px;
  transform: translateX(calc(50vw - 50%));
  z-index: 10000;

  svg {
    width: 52px;
    height: 52px;
  }
  ${media.mobile} {
    bottom: 70px;
  }
  ${media.small} {
    bottom: 80px;
  }
  ${media.custom(743)} {
    & > svg {
      width: 48px;
      height: 48px;
    }
  }
`;
