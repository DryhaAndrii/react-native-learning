import axios from "axios";

import { RegisterFormData } from "@/types/registerForm";
import { urls } from "@/constants/apiConstants";


export const registerUser = async (data: RegisterFormData) => {
  const { registerUrl } = urls;
  try {
    const response = await axios.post(registerUrl, {
      username: data.username,
      password: data.password,
    });
    if (response.data.message) alert(response.data.message);
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
