import classNames from "classnames";
import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  type?: "default" | "highlighted";
  title: string;
}

export function Button({ onPress, type = "default", title }: Props) {
  const buttonClass = classNames(
    "size-10 rounded-xl flex items-center justify-center",
    type === "default" && "bg-slate-300",
    type === "highlighted" && "bg-blue-500"
  );

  const textClass = classNames(
    "font-bold",
    type === "default" && "text-black",
    type === "highlighted" && "text-white"
  );

  return (
    <Pressable onPress={onPress} className={buttonClass}>
      <Text className={textClass}>{title}</Text>
    </Pressable>
  );
}
