import axios from "axios";

export const formatter = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function textSlice(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

export const getCsrfCookie = async () => {
  return await axios.get("http://localhost:8000/sanctum/csrf-cookie");
}
