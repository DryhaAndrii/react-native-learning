import classNames from "classnames";
import { ScrollView, View } from "react-native";
import { AnimatedContainer } from "./animatedContainer";

interface ScrollContainerProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  hide?: boolean;
  direction?: "left" | "right";
}

export function ScrollContainer({
  children,
  fullHeight = false,
  hide = false,
  direction = "right",
}: ScrollContainerProps) {
  const containerClass = classNames(
    "w-full sm:w-96 p-4 min-h-48 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4",

    fullHeight ? "h-[95vh]" : "min-h-48"
  );
  return (
    <AnimatedContainer hide={hide} direction={direction}>
      <ScrollView
        contentContainerClassName="flex min-h-full justify-center items-center p-4 gap-4 items-center"
        className="size-full"
        showsVerticalScrollIndicator={false}
      >
        <View className={containerClass}>{children}</View>
      </ScrollView>
    </AnimatedContainer>
  );
}

export function ComponentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View className="w-full h-16">{children}</View>;
}
