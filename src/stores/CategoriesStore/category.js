
import { UseApi } from '@/Components/Composbles/UseApi';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoryStore = defineStore('categoryStore', () => {
  const categories = ref([]);
  const { fetchData } = UseApi();

  async function fetchCategories() {
    if (categories.value.length) return;
    try {
      const data = await fetchData({ method: "get", url: "/v1/categories" });
      categories.value = data?.data || [];
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  }
  return { categories, fetchCategories };
});
