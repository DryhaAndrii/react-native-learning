import axios from "axios";

import { auth } from "@/firebaseConfig";
import { urls } from "@/constants/apiConstants";
import { handleError } from "./handleError";
import { showToast } from "./showToast";

export const privateFetch = async () => {
  const { privateEndPoint } = urls;

  const token = await auth.currentUser?.getIdToken();

  try {
    const response = await axios.get(privateEndPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.message) {
      showToast(response.data.message, "info");
    }
  } catch (e: any) {
    handleError(e);
  }
};
