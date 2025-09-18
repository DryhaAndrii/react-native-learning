import { Text, View } from "react-native";

interface Props {
  color: string;
}

export function ColorBrick({ color }: Props) {
  return (
    <View className="flex items-center gap-4">
      <Text>{color}</Text>
      <View
        style={{ backgroundColor: color }}
        className={`size-48 rounded shadow-xl`}
      />
    </View>
  );
}
