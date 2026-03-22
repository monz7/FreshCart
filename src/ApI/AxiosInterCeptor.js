import router from "@/router";
import axios from "axios";
import { toast } from "vue3-toastify";

const ApIHead = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

ApIHead.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

ApIHead.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    let toastMessage =
      error.response?.data?.message ||
      error.response?.data?.msg ||
      error.message ||
      "An error occurred";
    if (typeof toastMessage === "object") {
      toastMessage = JSON.stringify(toastMessage);
    }
    toast(toastMessage.toString(), {
      type: "error",
      transition: "zoom",
      dangerouslyHTMLString: true,
    });
    if (status === 401 && router.currentRoute.value.path !== "/login") {
      localStorage.removeItem("token");
      router.push("/login");
    }
    return Promise.reject(error);
  },
);
export default ApIHead;
