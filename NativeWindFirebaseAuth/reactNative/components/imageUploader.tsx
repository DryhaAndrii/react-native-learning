import { useEffect, useState } from "react";
import { View, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { uploadImage } from "@/functions/uploadImage";
import { Button } from "./ui/button";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStoreImageUri } from "@/redux/ducks/image";
import { useRouter } from "expo-router";
import { useUser } from "@/hooks/useUser";
import { showToast } from "@/functions/showToast";
import { hideLoading, showLoading } from "@/redux/ducks/loading";

export default function ImageUploader() {
  const storeImage = useSelector((state: RootState) => state.image.imageUri);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    setImageUri(storeImage);
  }, [storeImage]);

  const pickImage = async () => {
    if (!user) return showToast("You are not logged in", "error");
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access media library is required!"
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      base64: false,
    });

    if (!pickerResult.canceled) {
      setImageUri(pickerResult.assets[0].uri);
    }
  };

  const uploadButton = async () => {
    if (!user) return showToast("You are not logged in", "error");

    dispatch(showLoading());

    await uploadImage(imageUri);
    setImageUri(null);

    dispatch(setStoreImageUri(null));

    dispatch(hideLoading());
  };

  const photoButton = () => {
    if (!user) return showToast("You are not logged in", "error");
    router.push("/Camera");
  };

  return (
    <View className="flex-1 w-full justify-center items-center bg-gray-100 p-4 rounded-xl gap-4">
      <View className="h-16 w-full">
        <Button title="Pick an image" onPress={pickImage} />
      </View>
      <View className="h-16 w-full">
        <Button title="Make a photo" onPress={photoButton} />
      </View>

      {imageUri && (
        <>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 200, height: 200, marginVertical: 10 }}
          />
          <View className="h-16 w-full">
            <Button title="Upload image" onPress={uploadButton} />
          </View>
        </>
      )}
      <Toast />
    </View>
  );
}
