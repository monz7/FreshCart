<template>
    <div class="min-h-screen bg-gray-50/50">
        <div class="bg-gradient-to-br from-green-600 via-green-500 to-green-300 text-white">
            <div class="container mx-auto px-4 py-10 sm:py-14">
                <nav class="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                    <router-link to="/" class="hover:text-white hover:underline">Home</router-link>
                    <span class="text-white/40">/</span>
                    <span class="text-white font-medium">Categories</span>
                </nav>
                <div class="flex items-center gap-5">
                    <div
                        class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                        <i class="fa-solid fa-layer-group text-3xl"></i>
                    </div>
                    <div>
                        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">All Categories</h1>
                        <p class="text-white/80 mt-1">Browse our wide range of product categories</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 py-10">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                <RouterLink :to="`/categories/${category.slug}`" v-for="category in store.categories"
                    :key="category.id"
                    class="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-200 hover:-translate-y-1">
                    <div class="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                        <img :src="category.image" :alt="category.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <h3 class="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">
                    {{category.name }}</h3>
                    <div class="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span class="text-xs text-green-600 flex items-center gap-1">View Subcategories</span>
                        <i class="fa-solid fa-arrow-right text-sm"></i>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCategoryStore } from '@/stores/CategoriesStore/category';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const store = useCategoryStore();
onMounted(async () => {
    await store.fetchCategories();
});

</script>

<style lang="scss" scoped></style>