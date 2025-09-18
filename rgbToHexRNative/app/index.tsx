import { ColorBrick } from "@/components/colorBrick";
import { Inputs } from "@/components/inputs";
import { rgbToHex } from "@/helpers/rgbToHex";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const defaultState = {
  r: 0,
  g: 0,
  b: 0,
};

export default function Index() {
  const [inputsValue, setInputsValue] = useState(defaultState);
  const [color, setColor] = useState("#f0f8ff");

  const buttonHandler = () => {
    setColor(rgbToHex(inputsValue.r, inputsValue.g, inputsValue.b));
  };

  return (
    <View className="size-full items-center justify-center">
      <View className="max-w-[300px] min-w-[200px] w-[95%] h-[85%] p-6 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4">
        <ColorBrick color={color} />
        <Inputs setInputsValue={setInputsValue} />
        <Pressable
          onPress={buttonHandler}
          className="bg-indigo-400 p-6 rounded-xl active:opacity-80"
        >
          <Text className="text-white font-semibold text-base">
            Change color
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
