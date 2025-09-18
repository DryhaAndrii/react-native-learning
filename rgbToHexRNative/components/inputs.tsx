import { View } from "react-native";
import { Input } from "./input";

interface Props {
  setInputsValue: React.Dispatch<
    React.SetStateAction<{ r: number; g: number; b: number }>
  >;
}

export function Inputs({ setInputsValue }: Props) {
  const colorChangeHandler = (colorType: string, colorValue: number) => {
    setInputsValue((prev) => {
      return {
        ...prev,
        [colorType]: colorValue,
      };
    });
  };

  return (
    <View className="flex-row justify-between gap-2">
      <Input colorChangeHandler={colorChangeHandler} colorType="r" />
      <Input colorChangeHandler={colorChangeHandler} colorType="g" />
      <Input colorChangeHandler={colorChangeHandler} colorType="b" />
    </View>
  );
}
