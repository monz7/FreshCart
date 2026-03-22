<template>
    <div class="min-h-screen bg-gray-50/50">
        <div class="bg-gradient-to-br from-green-600 via-green-500 to-green-300 text-white">
            <div class="container mx-auto px-4 py-10 sm:py-14">
                <nav class="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                    <router-link to="/" class="hover:text-white hover:underline">Home</router-link>
                    <span class="text-white/40">/</span>
                    <span class="text-white font-medium">All Products</span>
                </nav>
                <div class="flex items-center gap-5">
                    <div
                        class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                        <i class="fa-solid fa-box-open text-3xl"></i>
                    </div>
                    <div>
                        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">All Products</h1>
                        <p class="text-white/80 mt-1">Browse our collection of amazing products.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-10 py-8">
            <div class="mb-6 text-sm text-gray-500">
                Showing 40 products
            </div>
            <proudects-cards/>
        </div>
    </div>
</template>

<script setup>
import ProudectsCards from '@/Components/ProudectsCards.vue';
</script>

<style scoped></style>