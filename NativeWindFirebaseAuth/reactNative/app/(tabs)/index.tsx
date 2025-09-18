import { View } from "react-native";

import { ScrollContainer } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { publicFetch } from "@/functions/publicFetch";
import { privateFetch } from "@/functions/privateFetch";
import { useUser } from "@/hooks/useUser";
import ImageUploader from "@/components/imageUploader";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "@/redux/ducks/loading";
import { useFocusEffect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [hide, setHide] = useState(false);

  useFocusEffect(() => {
    setHide(false);
    return () => {
      setHide(true);
    };
  });

  const user = useUser();
  const dispatch = useDispatch();
  const onPublicFetch = async () => {
    dispatch(showLoading());
    await publicFetch();
    dispatch(hideLoading());
  };
  const onPrivateFetch = async () => {
    dispatch(showLoading());
    await privateFetch();
    dispatch(hideLoading());
  };
  return (
    <ScrollContainer hide={hide} direction="right">
      {user && <Typography size="lg">Hello {user.email}</Typography>}
      {!user && <Typography size="lg">You are not logged in</Typography>}
      <View className="flex h-16 flex-row gap-4 w-full">
        <View className="flex-1">
          <Button title="Public fetch" onPress={onPublicFetch} />
        </View>
        <View className="flex-1">
          <Button title="Private fetch" onPress={onPrivateFetch} />
        </View>
      </View>
      <ImageUploader />
    </ScrollContainer>
  );
}
