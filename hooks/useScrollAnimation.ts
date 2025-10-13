import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  containerVariants?: any;
  itemVariants?: any;
}

export function useScrollAnimation({
  threshold = 0.2,
  triggerOnce = false,
  containerVariants,
  itemVariants,
}: ScrollAnimationOptions = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  return {
    ref,
    controls,
    containerVariants: containerVariants ?? {
      hidden: {},
      visible: { transition: { staggerChildren: 0.2 } },
    },
    itemVariants: itemVariants ?? {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeInOut' },
      },
    },
  };
}
