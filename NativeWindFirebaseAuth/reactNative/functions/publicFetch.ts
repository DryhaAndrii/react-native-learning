import axios from "axios";

import { urls } from "@/constants/apiConstants";
import { handleError } from "./handleError";
import { showToast } from "./showToast";

export const publicFetch = async () => {
  const { publicEndPoint } = urls;
  try {
    const response = await axios.get(publicEndPoint);
    if (response.data.message) {
      showToast(response.data.message, "info");
    }
  } catch (e: any) {
    handleError(e);
  }
};
