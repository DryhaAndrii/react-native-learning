import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type FontAwesomeIconName = React.ComponentProps<typeof FontAwesome>["name"];

interface Props {
  onPress: () => void;
  title: string;
  iconName?: FontAwesomeIconName | null;
}

export function Button({ onPress, title, iconName = null }: Props) {
  const scale = useSharedValue(1);

  const config = {
    damping: 1,
    stiffness: 2000,
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.8, config);
  };

  const onHoverIn = () => {
    scale.value = withSpring(1.1, config);
  };

  const onHoverOut = () => {
    scale.value = withSpring(1, config);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, config);
  };
  const buttonClass = `text-2xl p-4 size-full bg-cyan-700 rounded-2xl justify-center flex-row items-center gap-4`;
  return (
    <Animated.View className={buttonClass} style={animatedStyle}>
      <Pressable
        className={buttonClass}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
      >
        <Text selectable={false} className="text-xl text-cyan-100 text-center">
          {title}
        </Text>
        {iconName && <FontAwesome name={iconName} size={24} color="white" />}
      </Pressable>
    </Animated.View>
  );
}
