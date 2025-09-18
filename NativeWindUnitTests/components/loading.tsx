import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View testID="loading" className="size-full absolute inset-0 items-center justify-center z-10 bg-white/50">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
