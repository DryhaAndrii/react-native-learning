import classNames from "classnames";
import { ScrollView, View } from "react-native";

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 size-full items-center bg-white gap-2">
      {children}
    </View>
  );
}

interface ScrollContainerProps {
  children: React.ReactNode;
  verticalCenter?: boolean;
}

export function ScrollContainer({
  children,
  verticalCenter: verticalCenter = false,
}: ScrollContainerProps) {
  const contentContainerClass = classNames(
    "p-4 ",
    verticalCenter && "justify-center size-full"
  );
  return (
    <ScrollView
      contentContainerClassName={contentContainerClass}
      className="w-full relative over overflow-x-hidden  md:w-96 h-full bg-[#cbd4e1]  flex overflow-scroll border-2 border-[#cbd4e1]"
    >
      {children}
    </ScrollView>
  );
}
