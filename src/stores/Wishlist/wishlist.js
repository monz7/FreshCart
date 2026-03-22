import {defineStore} from "pinia"
import { UseApi } from "@/Components/Composbles/UseApi";
import { ref } from "vue";

export const useWishlistStore = defineStore("wishlistStore", () => {
  const { fetchData } = UseApi();
  const wishlistItem = ref([]);
  const wishlistCount = ref(0);

  async function getWishlist() {
    const data = await fetchData({
      method: "get",
      url: "/v1/wishlist",
    });
    wishlistItem.value = data?.data || [];
    wishlistCount.value = data?.data?.length  || 0;
  }
  async function addToWishlist(productId) {
    await fetchData({
      method: "post",
      url: "/v1/wishlist",
      data: { productId },
    });
    await getWishlist();
  }
  async function removeFromWishlist(productId) {
    await fetchData({
      method: "delete",
      url: `/v1/wishlist/${productId}`,
    });

    await getWishlist();
  }

  return{
    wishlistItem,
    wishlistCount,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
  };
});
