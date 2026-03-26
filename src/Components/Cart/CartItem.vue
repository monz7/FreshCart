<template>
    <div class="space-y-4">
        <div
            class="relative bg-white rounded-2xl shadow-sm hover:shadow-md border my-2 border-gray-100 transition-all duration-300">
            <div class="p-4 sm:p-5">
                <div class="flex gap-4 sm:gap-6">
                    <RouterLink to="#" class="relative shrink-0 group">
                        <div
                            class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gray-50 p-3 border border-gray-100 overflow-hidden">
                            <img :src="item?.product?.imageCover" :alt="item?.product?.title"
                                class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110">
                        </div>
                        <div
                            class="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <i class="fa-solid fa-check"></i>
                            In Stock
                        </div>
                    </RouterLink>
                    <div class="flex-1 min-w-0 flex flex-col">
                        <div class="mb-3">
                            <RouterLink to="#">
                                <h3
                                    class="font-semibold text-gray-900 hover:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                                    {{ item?.product?.title }}
                                </h3>
                            </RouterLink>
                            <div class="flex items-center gap-2 mt-2">
                                <span
                                    class="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                    {{ item.product?.category?.name }}</span>
                            </div>
                        </div>
                        <div class="mb-4">
                            <span class="text-green-600 font-bold text-lg">{{ item.price }} EGP</span>
                        </div>
                        <div class="mt-auto flex flex-wrap items-center justify-between gap-4">
                            <div class="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                <button @click="UpdateCartProduct(item.count - 1)" :disabled="UpdateLoader"
                                    class="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 disabled:opacity-40 transition-all">
                                    <i v-if="UpdateLoader" class="fa-solid fa-spinner fa-spin"></i>
                                    <i v-else class=" fa-solid fa-minus"></i>
                                </button>
                                <span
                                    class="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium  appearance-none">
                                    {{ item.count }}
                                </span>
                                <button @click="UpdateCartProduct(item.count + 1)" :disabled="UpdateLoader"
                                    class="h-8 w-8 rounded-lg bg-green-600 shadow-sm flex items-center justify-center text-white hover:bg-green-700 transition-all">
                                    <i v-if="UpdateLoader" class="fa-solid fa-spinner fa-spin"></i>
                                    <i v-else class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="text-right">
                                    <p class="text-xs text-gray-400 mb-0.5">Total</p>
                                    <p class="text-xl font-bold text-gray-900">{{ item.price * item.count }}
                                        <span class="text-sm font-medium text-gray-400"> EGP</span>
                                    </p>
                                </div>
                                <button @click="deleteCartItem" :disabled="isLoading"
                                    class="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center transition-all duration-200">
                                    <i v-if="isLoading" class="fa-solid fa-spinner fa-spin"></i>
                                    <i v-else class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { UseApi } from '../Composbles/UseApi';
import { useCartStore } from '@/stores/CartStore';

const { item } = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    }
});
const { fetchData, isLoading } = UseApi();
const cartStore = useCartStore()

const UpdateLoader = ref(false);

async function deleteCartItem() {
    const data = await fetchData({
        method: 'delete',
        url: `/v2/cart/${item.product.id}`
    })
    cartStore.cartDate = data || [];
    cartStore.numOfCartItems = data?.numOfCartItems || 0;
    cartStore.cartId = data?.id || [];
}
async function UpdateCartProduct(count) {
    UpdateLoader.value = true;
    const data = await fetchData({
        method: 'put',
        url: `/v2/cart/${item.product.id}`,
        data: {
            count,
        }
    })
    cartStore.cartId = data?.id || [];
    cartStore.cartDate = data || [];
    cartStore.numOfCartItems = data?.numOfCartItems || 0;
    UpdateLoader.value = false;
}
</script>

<style lang="scss" scoped></style>