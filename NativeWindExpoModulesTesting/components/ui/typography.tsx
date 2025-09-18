import { Text } from "react-native";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  type?: "default" | "error";
  size?: "sm" | "md" | "lg";
  centered?: boolean;
}

export function Typography({
  children,
  type = "default",
  size = "md",
  centered = false,
}: Props) {
  const textClass = classNames(
    "font-bold font-mono",

    centered && "text-center",

    type === "default" && "text-slate-500",
    type === "error" && "text-red-500",

    size === "sm" && "text-lg",
    size === "md" && "text-xl",
    size === "lg" && "text-2xl"
  );
  return <Text className={textClass}>{children}</Text>;
}
