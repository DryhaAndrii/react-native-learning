import classNames from "classnames";
import { ScrollView, View } from "react-native";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 size-full items-center bg-white gap-2 p-2">
      {children}
    </View>
  );
}

interface ScrollContainerProps {
  children: React.ReactNode;
  vertialCenter?: boolean;
}

export function ScrollContainer({
  children,
  vertialCenter = false,
}: ScrollContainerProps) {
  const contentContainerClass = classNames(
    "p-4 ",
    vertialCenter && "justify-center size-full"
  );
  return (
    <ScrollView
      contentContainerClassName={contentContainerClass}
      className="w-[95%] md:w-96 h-full bg-[#cbd4e1]  flex rounded-[20px] overflow-scroll border-2 border-[#cbd4e1]"
    >
      {children}
    </ScrollView>
  );
}
