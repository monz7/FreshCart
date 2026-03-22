import ApIHead from "@/ApI/AxiosInterCeptor";
import { ref } from "vue";
export function UseApi() {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(null);
  async function fetchData(config = {}) {
    isLoading.value = true;
    try {
      const response = await ApIHead({
        method: "get",
        ...config,
      });
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = {
        msg: err.response?.message || err.message || "An error occured",
        errors: err.response?.data?.errors?.msg,
        status: err.response?.status || null,
        param: err.response?.data?.errors?.param || null,
      };
    } finally {
      isLoading.value = false;
    }
  }

  return {
    data,
    error,
    isLoading,
    fetchData,
  };
}
