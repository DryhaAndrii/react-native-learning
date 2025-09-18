import { MotiView, AnimatePresence } from "moti";

interface AnimatedContainerProps {
  children: React.ReactNode;
  hide: boolean;
  direction?: "left" | "right";
}

export function AnimatedContainer({
  children,
  hide,
  direction = "right",
}: AnimatedContainerProps) {
  const distance = 200;

  const enterTranslate = direction === "right" ? -distance : distance;
  const exitTranslate = direction === "right" ? distance : -distance;

  const duration = 400;

  return (
    <AnimatePresence>
      {!hide && (
        <MotiView
          from={{
            opacity: 0,
            translateX: enterTranslate,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            translateY: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            translateX: exitTranslate,
            scale: 0.95,
          }}
          transition={{
            type: "timing",
            duration,
          }}
          style={{ flex: 1 }}
        >
          {children}
        </MotiView>
      )}
    </AnimatePresence>
  );
}
