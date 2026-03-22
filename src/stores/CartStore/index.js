import { UseApi } from "@/Components/Composbles/UseApi";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  const { fetchData } = UseApi();


  const cartDate = ref({});
  const numOfCartItems = ref(0);
  const cartId = ref(null);

  async function getUserCart() {
    const data = await fetchData({
      method: "get",
      url: "/v2/cart",
    });
    cartDate.value = data;
    numOfCartItems.value = data?.numOfCartItems;
    cartId.value = data?.cartId;
  }

  return {
    cartDate,
    numOfCartItems,
    cartId,
    getUserCart,
  };
});
