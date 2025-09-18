import { Platform, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ScrollContainer } from "./container";
import { AnimatedContainer } from "./animatedContainer";

interface Props {
  children: React.ReactNode;
  hide?: boolean;
  direction?: "left" | "right";
}

export function KeyboardAwareContainer({
  children,
  hide = false,
  direction = "right",
}: Props) {
  const isWeb = Platform.OS === "web";

  if (isWeb) {
    return (
      <ScrollContainer hide={hide} direction={direction}>
        {children}
      </ScrollContainer>
    );
  }

  return (
    <AnimatedContainer hide={hide} direction={direction}>
      <KeyboardAwareScrollView
        contentContainerClassName="flex min-h-full justify-center items-center p-4 gap-4 items-center"
        className="size-full"
        enableOnAndroid
        enableAutomaticScroll
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full sm:w-96 p-4 min-h-48 bg-slate-300 flex justify-center items-center rounded-[20px] gap-4">
          {children}
        </View>
      </KeyboardAwareScrollView>
    </AnimatedContainer>
  );
}
