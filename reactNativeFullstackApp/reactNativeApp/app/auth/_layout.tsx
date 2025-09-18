import { Tabs } from "expo-router";

export default function AuthLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="register" />
      <Tabs.Screen name="login" />
    </Tabs>
  );
}
