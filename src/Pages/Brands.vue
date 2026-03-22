<template>
    <div class="bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
        <div class="container mx-auto px-20 py-1 sm:py-14">
            <nav class="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                <router-link to="/" class="hover:text-white hover:underline">Home</router-link>
                <span class="text-white/40">/</span>
                <span class="text-white font-medium">Top Brands</span>
            </nav>
            <div class="flex items-center gap-5">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                    <i class="fa-solid fa-tags text-3xl"></i>
                </div>
                <div>
                    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Top Brands</h1>
                    <p class="text-white/80 mt-1">
                        Shop from your favorite brands</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-20 py-10">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            <router-link to="#" v-for="brand in brands" :key="brand.id"
                class="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1">
                <div
                    class="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
                    <img :src="brand.image" :alt="brand.name"
                        class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500">
                </div>
                <h3
                    class="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
                    {{ brand.name }}
                </h3>
                <div class="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs text-violet-600 flex items-center gap-1">
                        View Products<i class="fa-solid fa-arrow-right"></i>
                    </span>

                </div>

            </router-link>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue'
import { UseApi } from '@/Components/Composbles/UseApi';
const { fetchData, isLoading } = UseApi();

const brands = ref([])

async function fetchBrands() {
    isLoading.value=true;
    try {
        const data = await fetchData({
            method: "get",
            url: "/v1/brands",
        });
        brands.value = data?.data;
    } catch (error) {
        console.log(error)
    }finally{
        isLoading.value=false;
    }
}

onMounted(() => {
    fetchBrands()
})


</script>

<style lang="scss" scoped></style>