import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    opacity.value = withDelay(100, withTiming(1, { duration: 400 }));
    scale.value = withTiming(1, { duration: 400 });
  }, []);
  return (
    <ScrollView
      contentContainerClassName="flex min-h-full justify-center items-center p-4 gap-4 items-center"
      className="size-full"
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={animatedStyle}
        className="w-full sm:w-96 p-4 min-h-48 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4 shadow-md"
      >
        {children}
      </Animated.View>
    </ScrollView>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <View className="w-full sm:w-96 p-4 min-h-48 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4">
      {children}
    </View>
  );
}

export function ComponentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View className="w-full h-16">{children}</View>;
}
