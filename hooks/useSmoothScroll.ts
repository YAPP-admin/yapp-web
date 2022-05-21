import { useRef } from 'react';

interface useSmoothScrollParams {
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

function useSmoothScroll<T extends HTMLElement>({
  block,
  inline,
}: useSmoothScrollParams) {
  const ref = useRef<T>(null);

  const trigger = () =>
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block,
      inline,
    });

  return { ref, trigger };
}

export default useSmoothScroll;
