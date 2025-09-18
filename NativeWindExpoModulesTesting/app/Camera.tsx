import { ScrollContainer } from "@/components/ui/container";
import { setImagesUri } from "@/redux/ducks/images";
import { RootState } from "@/redux/store";
import { Camera, CameraType, CameraView } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CameraExample() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState<CameraType>("back");
  const cameraRef = useRef<CameraView | null>(null);

  const dispatch = useDispatch();
  const imagesUri = useSelector((state: RootState) => state.images.imagesUri);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      dispatch(setImagesUri([...imagesUri, data.uri]));
    }
  };

  if (hasPermission === null) {
    return <Text>Asking for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>Camera permission is not granted</Text>;
  }

  return (
    <ScrollContainer>
      <View className="flex-1 size-full bg-slate-50 rounded-2xl overflow-hidden">
        <CameraView facing={type} ref={cameraRef}>
          <View className="size-full flex-row justify-center items-end p-4 gap-4">
            <TouchableOpacity
              className="bg-blue-600 h-10 px-4 py-2 rounded"
              onPress={() => {
                setType(type === "back" ? "front" : "back");
              }}
            >
              <Text className="text-white">Swap camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue-600 h-10 px-4 py-2 rounded"
              onPress={takePicture}
            >
              <Text className="text-white">Take picture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    </ScrollContainer>
  );
}
