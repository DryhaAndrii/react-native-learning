import { Counter } from "@/components/counter";
import { store } from "@/redux/store";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
      <View className="flex-1 items-center justify-center">
        <View className="w-96 bg-slate-300 flex justify-center items-center rounded-[20px] p-4">
          <Text className="font-bold font-mono text-2xl ">Hello world!</Text>
          <Counter />
        </View>
      </View>
    </Provider>
  );
}
