import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  containerVariants?: any;
  itemVariants?: any;
}

export function useScrollAnimation({
  /*
   * 섹션이 화면 가운데 70% 구간에 걸치면 보이게 한다.
   * "섹션의 몇 %가 보이면"으로 정하면 화면보다 훨씬 긴 섹션은 낮은 화면에서 영영 나타나지 않는다.
   */
  threshold = 0,
  rootMargin = '-15% 0px',
  /* 한 번 나타난 섹션은 다시 숨기지 않는다 (위아래로 오갈 때마다 다시 기다리지 않도록) */
  triggerOnce = true,
  containerVariants,
  itemVariants,
}: ScrollAnimationOptions = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, rootMargin, triggerOnce });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  return {
    ref,
    controls,
    containerVariants: containerVariants ?? {
      hidden: {},
      visible: { transition: { staggerChildren: 0.1 } },
    },
    itemVariants: itemVariants ?? {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    },
  };
}
