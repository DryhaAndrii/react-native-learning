import { useEffect } from "react";
import "react-native-reanimated";
import { Stack, useRouter, usePathname } from "expo-router";

import { useCheckToken } from "@/hooks/useCheckToken";
import "../global.css";

export default function Layout() {
  const router = useRouter();
  const { isAuthenticated, checkToken } = useCheckToken();

  checkToken();

  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    if (isAuthenticated === null || isAuthenticated === undefined) return;
    if (!isAuthenticated && isHome) {
      return router.replace("/auth/login");
    }
    if (isAuthenticated && !isHome) {
      return router.replace("/");
    }
  }, [isAuthenticated, isHome, router]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="auth"
        options={{
          title: "Auth",
        }}
      />
    </Stack>
  );
}
