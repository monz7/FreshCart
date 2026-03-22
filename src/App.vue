<script setup>
import { RouterView } from 'vue-router';
import { useAuthStore } from './stores/authStore';
import { onMounted } from 'vue';
import { useCartStore } from './stores/CartStore';
import { useWishlistStore } from './stores/Wishlist/wishlist';


const authStore = useAuthStore();
const cartStore = useCartStore();
const wishlist =useWishlistStore();

authStore.setToken();
onMounted(() => {
  authStore.setToken();
  cartStore.getUserCart();
  wishlist.getWishlist();
})

</script>

<template>
  <RouterView />
</template>
<style scoped></style>
