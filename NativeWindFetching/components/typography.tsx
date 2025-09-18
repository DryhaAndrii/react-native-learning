import classNames from "classnames";
import { Text } from "react-native";

interface Props {
  onPress?: () => void;
  children: React.ReactNode;
  type?: "default" | "error";
}

export function Typography({ onPress, children, type = "default" }: Props) {
  const textClass = classNames(
    "w-full font-bold font-mono text-lg text-center gap bg-white p-1 mt-2 rounded",
    type === "default" && "text-black",
    type === "error" && "text-red-800"
  );
  return (
    <Text className={textClass} onPress={onPress}>
      {children}
    </Text>
  );
}
