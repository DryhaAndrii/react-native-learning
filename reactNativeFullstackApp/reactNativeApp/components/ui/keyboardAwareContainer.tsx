import { Platform, ScrollView} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function KeyboardAwareContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const isWeb = Platform.OS === "web";

  if (isWeb) {
    return (
      <ScrollView
        className="size-full"
        contentContainerClassName="flex min-h-full justify-center items-center p-4 gap-4 items-center"
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <KeyboardAwareScrollView
      className="size-full"
      contentContainerClassName="flex min-h-full justify-center items-center p-4 gap-4 items-center"
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
