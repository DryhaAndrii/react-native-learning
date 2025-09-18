import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.API_URL;

export const urls = {
  publicEndPoint: `${API_URL}/public`,
  privateEndPoint: `${API_URL}/private`,
  uploadEndPoint: `${API_URL}/upload`,
};
