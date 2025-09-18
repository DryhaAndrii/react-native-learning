import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { urls } from "@/constants/apiConstants";

export function useCheckToken() {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);
  const { protectedUrl } = urls;

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false);
      return false;
    }

    try {
      const response = await axios.get(protectedUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsAuthenticated(true);
      return true;
    } catch (e: any) {
      if (e.response?.data?.message === "Token is not valid") {
        await AsyncStorage.removeItem("token");
        alert("Authentication expired, you need to log in again");
      }
      setIsAuthenticated(false);
      return false;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return { isAuthenticated, checkToken };
}
