import { MotiView } from "moti";

interface Props {
  delay?: number;
  exitTransition?: number;
  children: React.ReactNode;
}

export default function AnimatedContainer({
  delay = 0,
  exitTransition = 0,
  children,
}: Props) {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      exit={{
        opacity: 0,
        translateX: 100,
      }}
      transition={{
        type: "spring",
        delay: delay,
      }}
      exitTransition={{
        type: "timing",
        delay: exitTransition,
      }}
    >
      {children}
    </MotiView>
  );
}
