<template>
    <loading v-model:active="isLoading" :is-full-page="true" loader='bars' color="green" />
    <div v-if="!isCartEmpty" class="bg-gray-50 min-h-screen py-8 px-20">
        <div class="container mx-auto px-4">
            <CartHeader :numOfCartItems="numOfCartItems" />
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <CartItemDetails :cartItems="existingCartData" />
                <div class="lg:col-span-1">
                    <OrderSummary :numOfCartItems="numOfCartItems" :totalCartPrice="totalCartPrice"
                        :isCheckout="false" />
                </div>
            </div>
        </div>
    </div>
    <div v-else class="min-h-[60vh] flex items-center justify-center px-4">
        <div class="max-w-md text-center">
            <div class="relative mb-8">
                <div
                    class="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                    <i class="fa-solid fa-box-open text-gray-300 text-5xl"></i>
                </div>
                <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md">
                </div>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
            <p class="text-gray-500 mb-8 leading-relaxed">
                Looks like you haven't added anything to your cart yet.
                <br>
                Start exploring our products!
            </p>
            <RouterLink to="/shop"
                class="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]">
                Start Shopping <i class="fa-solid fa-arrow-right text-sm"></i>
            </RouterLink>
            <div class="mt-12 pt-8 border-t border-gray-100">
                <p class="text-sm text-gray-400 mb-4">Popular Categories</p>
                <div class="flex flex-wrap justify-center gap-2">
                    <RouterLink
                        class="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors">
                        Electronics</RouterLink>
                    <RouterLink
                        class="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors">
                        Fashion</RouterLink>
                    <RouterLink to="/"
                        class="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors">
                        Home</RouterLink>
                    <RouterLink
                        class="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors">
                        Beauty</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Loading from 'vue-loading-overlay';
import CartHeader from '@/Components/Cart/CartHeader.vue';
import CartItemDetails from '@/Components/Cart/CartItemDetails.vue';
import OrderSummary from '@/Components/Cart/OrderSummary.vue';
import { UseApi } from '@/Components/Composbles/UseApi';
import { useAuthStore } from '@/stores/authStore';
import { computed, onMounted, ref } from 'vue';
import { useCartStore } from '@/stores/CartStore';

const authStore = useAuthStore()
const cartStore = useCartStore()

const { isLoading, } = UseApi()

const localCartItem = ref([]);



const existingCartData = computed(() => {
    if (authStore.isLoggedIn) {
        return cartStore.cartDate?.data?.products || [];
    } else {
        return saveCartToLocalStorage(localCartItem.value);
    }
})

const isCartEmpty = computed(() => {
    return existingCartData.value.length === 0
})

function saveCartToLocalStorage(cartItems) {
    return cartItems.map((item) => ({
        count: cartItems.filter((i) => i.id === item.id).length,
        price: item.price,
        product: item,
    }));
} const numOfCartItems = computed(() => {
    if (authStore.isLoggedIn) {
        return cartStore.numOfCartItems || 0;
    }
    else {
        return localCartItem.value.length;
    }
})
const totalCartPrice = computed(() => {
    if (authStore.isLoggedIn) {
        return cartStore.cartDate?.data?.totalCartPrice || 0;
    }
    else {
        return localCartItem.value.reduce((total, item) => total + item.price, 0);
    }
})

onMounted(() => {
    if (authStore.isLoggedIn) {
        cartStore.getUserCart();
    } else {
        const existingCart = localStorage.getItem('guestCart');
        if (existingCart) {
            localCartItem.value = JSON.parse(existingCart);
        }
    }
})
</script>
<style scoped></style>