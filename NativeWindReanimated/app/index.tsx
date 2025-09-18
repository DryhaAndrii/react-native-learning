import { Button } from "@/components/ui/button";
import { ScrollContainer } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";

export default function Index() {
  const width = useSharedValue(200);
  const height = useSharedValue(80);
  const radius = useSharedValue(10);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      borderRadius: radius.value,
    };
  });

  const widthButton = () => {
    const originalWidth = width.value;
    const originalHeight = height.value;
    const config = {
      mass: 1,
      damping: 0.1,
      stiffness: 10,
    };
  };
  const radiusButton = () => {
    const random = Math.random() + 0.5;
    radius.value = withSpring(radius.value * random, {
      mass: 1,
      damping: 1,
      stiffness: 500,
    });
  };
  return (
    <ScrollContainer>
      <Animated.View
        className=" bg-slate-400 rounded-lg p-4 items-center justify-center"
        style={animatedStyles}
      >
        <Typography>Hello world!</Typography>
      </Animated.View>
      <View className="flex-row gap-4 w-full">
        <View className="flex-1">
          <Button title="Width" onPress={widthButton} />
        </View>
        <View className="flex-1">
          <Button title="Radius" onPress={radiusButton} />
        </View>
      </View>
    </ScrollContainer>
  );
}
