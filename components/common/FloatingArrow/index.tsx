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
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 3V45M24 45L42 28.3266M24 45L6 28.3266"
              stroke="white"
              strokeWidth="3.75"
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
    width: 64px;
    height: 64px;
  }

  ${media.custom(743)} {
    & > svg {
      width: 48px;
      height: 48px;
    }
  }
`;
