import { ScrollView, View } from "react-native";

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView
      contentContainerClassName="flex min-h-full justify-center items-center p-4 gap-4 items-center"
      className="size-full"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full sm:w-96 p-4 min-h-48 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4">
        {children}
      </View>
    </ScrollView>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <View className="size-full items-center justify-center p-4">
      <View className="w-full sm:w-96 p-4 h-48 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4">
        {children}
      </View>
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
