<template>
    <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div class="flex  items-center gap-3 my-8">
                <div class="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Shop By
                    <span class="text-emerald-600">Category</span>
                </h2>
            </div>
            <RouterLink to="/categories"
                class="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer">
                View All Categories<i class="fa-solid fa-arrow-right ml-2"></i>
            </RouterLink>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <RouterLink v-for="category in categories" :key="category.id" :to="`/categories/${category.slug}`"
                class="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer">
                <div
                    class="h-20 w-20 overflow-hidden bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition">
                    <img :src="category.image" :alt="category.name" class="w-full h-full object-cover">
                </div>
                <h3 class="font-medium">{{ category.name }}</h3>
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { UseApi } from '../Composbles/UseApi';

const { fetchData, isLoading } = UseApi()
const categories = ref([]);
async function getCategories() {
    isLoading.value = true;
    try {
        const data = await fetchData({
            method: "get",
            url: "/v1/categories",
        });
        categories.value = data?.data || [];
    } catch (err) {
        console.error("Failed to fetch categories:", err);
    } finally {
        isLoading.value = false;
    }
}

onMounted(getCategories);



</script>

<style lang="scss" scoped></style>