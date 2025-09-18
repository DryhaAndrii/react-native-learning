import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text } from "react-native";

type FontAwesomeIconName = React.ComponentProps<typeof FontAwesome>["name"];

interface Props {
  onPress: () => void;
  title: string;
  iconName?: FontAwesomeIconName | null;
}

export function Button({ onPress, title, iconName = null }: Props) {
  const buttonClass = `text-2xl p-4 size-full bg-cyan-700 rounded-2xl justify-center flex-row items-center gap-4
  transition-all duration-100 hover:scale-105 active:scale-95`;
  return (
    <Pressable className={buttonClass} onPress={onPress}>
      <Text selectable={false} className="text-xl text-cyan-100 text-center">
        {title}
      </Text>
      {iconName && <FontAwesome name={iconName} size={24} color="white" />}
    </Pressable>
  );
}
