import { urls } from "@/constants/apiConstants";
import axios from "axios";
import { handleError } from "./handleError";
import { auth } from "@/firebaseConfig";
import { Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";

export async function uploadImage(imageUri: string) {
  if (!imageUri) return;

  const { uploadEndPoint } = urls;
  const formData = new FormData();

  formData.append("file", {
    uri: imageUri,
    name: "photo.jpg",
    type: "image/jpeg",
  } as any);

  const token = await auth.currentUser?.getIdToken();

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    Toast.show({
      type: "success",
      text1: "Copied to clipboard",
      position: "bottom",
      bottomOffset: 500,
    });
  };

  try {
    const response = await axios.post(uploadEndPoint, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    Alert.alert("Success", `Here is your link ${response.data.url}`, [
      {
        text: "Copy to clipboard",
        onPress: () => copyToClipboard(response.data.url),
      },
      {
        text: "I dont need that link >:|",
      },
    ]);
  } catch (e: any) {
    handleError(e);
  }
}
