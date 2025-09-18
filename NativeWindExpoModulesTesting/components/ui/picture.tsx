import { useState } from "react";
import { Image, Modal, TouchableOpacity, View } from "react-native";

interface Props {
  uri: string;
}

export default function Picture({ uri }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsOpened(true)}
        className="size-full"
      >
        <Image
          source={{ uri }}
          className="w-full h-full rounded"
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Modal visible={isOpened} transparent animationType="fade">
        <View className="flex-1 bg-black/90 justify-center items-center">
          <TouchableOpacity
            onPress={() => setIsOpened(false)}
            className="size-full"
          >
            <Image
              source={{ uri }}
              className="w-full h-full"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
