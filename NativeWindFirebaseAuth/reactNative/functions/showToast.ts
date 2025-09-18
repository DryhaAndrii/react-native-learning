import Toast from "react-native-toast-message";

export function showToast(
  toastText: string,
  type: "error" | "success" | "info"
) {
  Toast.show({
    type,
    text1: toastText,
    position: "bottom",
    bottomOffset: 400,
  });
}
