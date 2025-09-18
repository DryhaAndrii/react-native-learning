import * as Location from "expo-location";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function LocationExample() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("No access to location");
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Button title="Get location" onPress={getLocation} />
      {location && (
        <Text>
          Latitude: {location.coords.latitude.toFixed(4)}
          {"\n"}
          Longitude: {location.coords.longitude.toFixed(4)}
        </Text>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}
