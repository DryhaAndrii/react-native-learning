import { Stack } from "expo-router";

import "../global.css";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Orders" }}
      />
      <Stack.Screen
        name="orders/[id]"
        options={{ title: "Order details" }}
      />
    </Stack>
  );
}