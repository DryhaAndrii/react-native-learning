import { showToast } from "./showToast";

export function handleError(e: any) {
  if (e.response && e.response.data && e.response.data.message) {
    console.log("Server error:", e.response.data.message);
    showToast(e.response.data.message, "error");
  } else {
    console.log("Unexpected error:", e);
    alert("Unexpected error");
  }
}
