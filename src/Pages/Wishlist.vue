<template>
    <div v-if="isCartEmpty" class="min-h-screen bg-gray-50/50">
        <div class="container mx-auto px-4 py-20">
            <div class="max-w-sm mx-auto text-center">
                <div class="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                    <i class="fa-regular fa-heart text-3xl text-gray-400"></i>
                </div>
                <h2 class="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
                <p v-if="authstore.isLoggedIn" class="text-gray-500 text-sm mb-6">Browse products and save your
                    favorites here.</p>
                <p v-else class="text-gray-500 text-sm mb-6">Browse products and save your favorites here. Sign in to
                    sync your wishlist across devices.</p>
                <div class="flex flex-col gap-3">
                    <RouterLink to="/shop" 
                        class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                        Browse Products <i class="fa-solid fa-arrow-right text-sm"></i>
                    </RouterLink>
                    <RouterLink to="/login"v-if="!authstore.isLoggedIn"
                        class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                        Sign In
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="min-h-screen bg-gray-50/50">
        <!-- Header -->
        <Header />
        <!-- Product list -->
        <ProductList />
    </div>
</template>

<script setup>
import Header from '@/Components/WishList/header.vue';
import ProductList from '@/Components/WishList/ProductList.vue';
import { useAuthStore } from '@/stores/authStore';
import { useWishlistStore } from '@/stores/Wishlist/wishlist';
import { computed } from 'vue';
const wishlist = useWishlistStore()
const authstore = useAuthStore()

const isCartEmpty = computed(() => {
    return wishlist.wishlistItem?.length === 0
})

</script>

<style lang="scss" scoped></style>