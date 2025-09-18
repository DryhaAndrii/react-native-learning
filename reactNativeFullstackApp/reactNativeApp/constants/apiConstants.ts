import Constants from "expo-constants";

const API_URL = Constants.expoConfig?.extra?.API_URL;

export const urls = {
  registerUrl: `${API_URL}/auth/register`,
  loginUrl: `${API_URL}/auth/login`,
  protectedUrl: `${API_URL}/protected`,
};
