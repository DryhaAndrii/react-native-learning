import { ScrollContainer } from "@/components/ui/container";
import Picture from "@/components/ui/picture";
import { RootState } from "@/redux/store";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Platform, View } from "react-native";
import { useSelector } from "react-redux";

export default function ImagePickerExample() {
  const storeImages = useSelector((state: RootState) => state.images.imagesUri);
  const [imageUris, setImageUris] = useState<string[]>([]);

  const pickImage = async () => {
    // Asking for permissions which is only needed for iOS
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need permissions to make this work!");
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUris((imageUris) => [...imageUris, result.assets[0].uri]);
    }
  };

  return (
    <ScrollContainer>
      <Button title="Choose image" onPress={pickImage} />
      {[...storeImages, ...imageUris].map((uri, index) => {
        return (
          <View className="w-48 h-24" key={index}>
            <Picture uri={uri} />
          </View>
        );
      })}
    </ScrollContainer>
  );
}
