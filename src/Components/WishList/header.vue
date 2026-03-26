<template>
     <div class="bg-white border-b border-gray-100">
            <div class="container mx-auto px-4 py-8">
                <nav class="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <RouterLink to="/" class="hover:text-green-600 transition-colors">Home</RouterLink>
                    <span>/</span>
                    <span class="text-gray-900 font-medium">Wishlist</span>
                </nav>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                            <i class="fa-solid fa-heart text-xl text-red-500"></i>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">My Wishlist</h1>
                            <p class="text-gray-500 text-sm">{{ wishlist.wishlistCount }} item saved</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/Wishlist/wishlist';

const wishlist =useWishlistStore();

</script>

<style lang="scss" scoped>

</style> 