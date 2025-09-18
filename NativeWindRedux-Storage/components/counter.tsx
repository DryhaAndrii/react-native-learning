import {
  decrement,
  increment,
  loadCounterFromStorage,
  saveCounterToStorage,
} from "@/redux/ducks/counter";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./button";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const isHydrated = useSelector(
    (state: RootState) => state.counter.isHydrated
  );

  useEffect(() => {
    loadCounterFromStorage()(dispatch);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      saveCounterToStorage(count)();
    }
  }, [count]);

  if (!isHydrated) {
    return (
      <View style={{ padding: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="flex gap-4">
      <Text className="text-2xl">Counter: {count}</Text>
      <Button onPress={() => dispatch(increment())} title={"Increment"} />
      <Button onPress={() => dispatch(decrement())} title={"Decrement"} />
    </View>
  );
};
