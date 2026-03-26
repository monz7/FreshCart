<template>
    <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
        <!-- Header -->
        <div v-if="authStore.isLoggedIn" class="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">

            <h2 class="text-lg font-bold text-white flex items-center gap-2">
                <i class="fa-solid fa-bag-shopping"></i>Order Summary
            </h2>
            <p class="text-green-100 text-sm mt-1"> {{ numOfCartItems }} items in your cart</p>
        </div>
        <div v-else class="bg-gray-900 p-5">
            <h2 class="text-white font-bold text-lg">Order Summary</h2>
        </div>
        <div class="p-6 space-y-5">
            <div v-if="isCheckout === true" class="max-h-50 overflow-y-auto">
                <div v-for="item in cartitem" :key="item.product?.id"
                    class="flex items-center gap-3 p-3 m-1 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div class="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                        <img :src="item?.product?.imageCover" :alt="item?.product?.title"
                            class="w-full h-full object-contain">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate"> {{ item?.product?.title }}</p>
                        <p class="text-xs text-gray-500 mt-0.5">{{ item.count }} x {{ item.price }} EGP</p>
                    </div>
                    <p class="text-sm font-bold text-gray-900 shrink-0">{{ item.count * item.price }}</p>
                </div>
            </div>
            <div v-if="showFreeShipping"
                class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <i class="fa-solid fa-truck text-green-600"></i>
                </div>
                <div>
                    <p class="font-semibold text-green-700">Free Shipping</p>
                    <p class="text-sm text-green-600">You qualify for free delivery</p>
                </div>
            </div>
            <div v-else-if="!isCheckout" class="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 ">
                <div class="flex items-center gap-2 mb-2">
                    <i class="fa-solid fa-truck text-orange-500"></i>
                    <span class="text-sm font-medium text-gray-700">
                        Add {{ remainingForFreeShipping }} EGP more to get free shipping</span>
                </div>
                <div class="h-2 bg-orange-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                        :style="{ width: (totalCartPrice / 500 * 100) + '%' }">
                    </div>
                </div>
            </div>
            <div class="p-5 space-y-4">
                <div class="flex justify-between text-gray-600">
                    <span v-if="isCheckout">Subtotal </span>
                    <span v-else>Subtotal ({{ numOfCartItems }} items)</span>
                    <span class="font-semibold">{{ totalCartPrice }} EGP</span>
                </div>
                <div class="flex justify-between text-gray-600">
                    <span class="flex items-center gap-2">
                        <i v-if="isCheckout" class="fa-solid fa-truck text-gray-400"></i>Shipping
                    </span>
                    <span v-if="authStore.isLoggedIn" class="font-medium"
                        :class="totalCartPrice >= 500 ? 'text-green-500' : 'text-gray-500-600'">
                        {{ totalCartPrice >= 500 ? 'FREE' : '50 EGP' }}
                    </span>
                    <span v-else class="text-green-600 font-medium">Calculated at checkout</span>
                </div>
                <hr class="border-gray-200">
                <div class="flex justify-between text-lg font-bold">
                    <span class="text-gray-900 font-semibold">
                        {{ authStore.isLoggedIn ? ' Total' : 'Estimated Total' }}
                    </span>
                    <div class="text-right">
                        <span class="text-2xl font-bold text-green-600">{{ finalTotal }}</span>
                        <span class="text-sm text-gray-500 ml-1"> EGP</span>
                    </div>
                </div>
                <div class="space-y-3">
                    <button v-if="authStore.isLoggedIn && !isCheckout"
                        class="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
                        <i class="fa-solid fa-tag"></i>
                        <span class="text-sm font-medium">Apply Promo Code</span>
                    </button>
                    <button v-if="authStore.isLoggedIn && isCheckout" type="submit"
                        class="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-all">
                        <i class="fa-solid fa-box"></i>Place Order
                    </button>
                    <RouterLink :to="Url" v-else
                        class="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-semibold hover:bg-green-700 transition-all">
                        <i :class="authStore.isLoggedIn ? 'fa-solid fa-lock' : 'fa-solid fa-user'"></i>
                        {{ btnTextOrder }}
                    </RouterLink>
                    <p v-if="!authStore.isLoggedIn" class="text-xs text-gray-400 text-center">Don't have an account?
                        <RouterLink :to="{ name: 'register', query: { redirect: '/cart' } }"
                            class="text-green-600 hover:underline">Sign Up
                        </RouterLink>
                    </p>
                    <div v-else-if="!isCheckout" class="flex items-center justify-center gap-4 py-2">
                        <div class="flex items-center gap-1.5 text-xs text-gray-500">
                            <i class="fa-solid fa-shield-halved text-green-500"></i>
                            <span>Secure Payment</span>
                        </div>
                        <div class="w-px h-4 bg-gray-200"></div>
                        <div class="flex items-center gap-1.5 text-xs text-gray-500">
                            <i class="fa-solid fa-truck text-blue-500"></i>
                            <span>Fast Delivery</span>
                        </div>
                    </div>
                </div>
                <div v-if="isCheckout === true"
                    class="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                        <i class="fa-solid fa-shield-halved text-green-500"></i>
                        <span>Secure</span>
                    </div>
                    <div class="w-px h-4 bg-gray-200"></div>
                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                        <i class="fa-solid fa-truck text-blue-500"></i>
                        <span>Fast Delivery</span>
                    </div>
                    <div class="w-px h-4 bg-gray-200"></div>
                    <div class="flex items-center gap-1.5 text-xs text-gray-500">
                        <i class="fa-solid fa-box text-orange-500"></i>
                        <span>Easy Returns</span>
                    </div>
                </div>
                <div v-if="authStore.isLoggedIn && !isCheckout">
                    <RouterLink to="/"
                        class="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"><i
                            class="fa-solid fa-arrow-left"></i> Continue Shopping</RouterLink>
                </div>
                <div v-else-if="!authStore.isLoggedIn && !isCheckout" class="pt-4 border-t border-gray-100 space-y-2">
                    <p class="text-xs text-gray-500">✓ Your cart items will be saved</p>
                    <p class="text-xs text-gray-500">✓ Track your orders easily</p>
                    <p class="text-xs text-gray-500">✓ Access exclusive member deals</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useCartStore } from '@/stores/CartStore';
import { computed } from 'vue';
const authStore = useAuthStore()
const cartStore = useCartStore()


const { totalCartPrice, numOfCartItems, isCheckout, cartitems } = defineProps({
    totalCartPrice: {
        type: Number,
        default: 0,
    },
    numOfCartItems: {
        type: Number,
        default: 0
    },
    isCheckout: {
        type: Boolean,
        default: false
    },
});
const Url = computed(() => {
    if (authStore.isLoggedIn && isCheckout) {
        return { name: 'checkout', query: { redirect: '/CartShop' } }
    } else {
        return { name: 'checkout' }
    }
})
const remainingForFreeShipping = computed(() => {
    return Math.max(0, 500 - totalCartPrice);
});
const btnTextOrder = computed(() => {
    if (!authStore.isLoggedIn) {
        return 'Login to Checkout';
    }
    else if (authStore.isLoggedIn && !isCheckout) {
        return 'Secure Checkout';
    }
})
const showFreeShipping = computed(() => {
    return !isCheckout && (!authStore.isLoggedIn || totalCartPrice >= 500)
})
const finalTotal = computed(() => {
    if (authStore.isLoggedIn)
        return totalCartPrice >= 500 ? totalCartPrice : totalCartPrice + 50;
})
const cartitem = computed(() => { return cartStore?.cartDate?.data?.products || [] })
</script>

<style scoped></style>