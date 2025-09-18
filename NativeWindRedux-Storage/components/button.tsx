import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
}

export function Button({ onPress, title }: Props) {
  const buttonClass =
    "text-2xl p-4 bg-cyan-700 rounded-2xl transition-all duration-100 ";
  return (
    <Pressable className={buttonClass} onPress={onPress}>
      <Text selectable={false} className="text-2xl text-cyan-100 text-center">
        {title}
      </Text>
    </Pressable>
  );
}
