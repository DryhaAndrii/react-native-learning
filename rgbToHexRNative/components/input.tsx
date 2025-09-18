import { useState } from "react";
import { TextInput } from "react-native";

interface Props {
  colorType: string;
  colorChangeHandler: (colorType: string, colorValue: number) => void;
}

export function Input({ colorType, colorChangeHandler }: Props) {
  const [inputValue, setInputValue] = useState("0");
  const handleInputChange = (text: string) => {
    if (
      String(Number(text)) === "NaN" ||
      Number(text) > 255 ||
      Number(text) < 0
    ) {
      setInputValue("0");

      return;
    }
    setInputValue(text);
    colorChangeHandler(colorType, Number(text));
  };

  return (
    <TextInput
      value={inputValue}
      onChangeText={handleInputChange}
      keyboardType="numeric"
      className="w-20 h-16 bg-slate-700 rounded color-slate-200 border-none  text-center"
    />
  );
}
