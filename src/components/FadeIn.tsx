import { HTMLMotionProps, motion } from 'framer-motion';

export type Props = {
  delay?: number;
  side?: 'left' | 'right' | 'bottom' | 'top';
} & HTMLMotionProps<'div'>;

export function FadeIn({ delay = 0.25, side = 'left', children, ...props }: Props) {
  let initial = {};

  switch (side) {
    case 'right':
      initial = { opacity: 0, x: 50 };
      break;
    case 'bottom':
      initial = { opacity: 0, y: 50 };
      break;
    case 'top':
      initial = { opacity: 0, y: -50 };
      break;
    default:
      initial = { opacity: 0, x: -50 };
      break;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, stiffness: 1000, velocity: -100 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
