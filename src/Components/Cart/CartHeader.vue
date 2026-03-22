<template>
    <div class="mb-8">
        <nav class="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <RouterLink :to="{ name: 'home' }" class="hover:text-green-600 transition-colors">Home
            </RouterLink>
            <span>/</span>
            <span class="text-gray-900 font-medium">Shopping Cart</span>
        </nav>
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span class="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center"><i
                            class="fa-solid fa-cart-shopping text-xl"></i></span>
                    Shopping Cart
                </h1>
                <p class="text-gray-500 mt-2 ">You have <span class="font-semibold text-green-600"> {{ numOfCartItems }} items</span> in your cart</p>
            </div>

        </div>
    </div>
</template>

<script setup>
const { numOfCartItems } = defineProps({
    numOfCartItems: {
        type: Number,
        default: 0,
    }
});
</script>

<style scoped></style>