import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { LoginFormData } from "@/types/userForm";
import { urls } from "@/constants/apiConstants";

export const loginUser = async (data: LoginFormData) => {
  const { loginUrl } = urls;
  try {
    const response = await axios.post(loginUrl, {
      username: data.username,
      password: data.password,
    });
    if (response.data.token) {
      await AsyncStorage.setItem("token", response.data.token);
      return true;
    }
  } catch (e: any) {
    if (e.response && e.response.data && e.response.data.message) {
      console.log("Server error:", e.response.data.message);
      alert(e.response.data.message);
    } else {
      console.log("Unexpected error:", e);
      alert("Unexpected error");
    }
  }
};
