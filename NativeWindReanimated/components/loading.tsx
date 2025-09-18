import { RootState } from "@/redux/store";
import { View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Typography } from "./ui/typography";
import { useEffect, useState } from "react";

export default function Loading() {
  const loading = useSelector((state: RootState) => state.loading.loading);
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 300);

    return () => clearInterval(interval);
  }, [loading]);

  if (!loading) return null;

  return (
    <View className="flex items-center justify-center absolute size-full z-10 bg-slate-900 opacity-90">
      <Typography size="lg" type="loader">
        Loading{".".repeat(dots)}
      </Typography>
      <ActivityIndicator size={80} color="#00ff00" />
    </View>
  );
}
