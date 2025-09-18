import "react-native-reanimated";
import { Stack } from "expo-router";

import "../global.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Loading from "@/components/loading";

export default function Layout() {
  return (
    <Provider store={store}>
      <Loading />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
