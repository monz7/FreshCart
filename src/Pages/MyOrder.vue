<template>
    <div class="container mx-auto px-24 py-8">
        <!-- Header -->
        <div class="mb-8">
            <nav class="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <RouterLink class="hover:text-green-600 transition" to="/home">Home</RouterLink>
                <span class="text-gray-300">/</span>
                <span class="text-gray-900 font-medium">My Orders</span>
            </nav>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div
                        class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25">
                        <i class="fa-solid fa-box text-2xl text-white"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">My Orders</h1>
                        <p class="text-gray-500 text-sm mt-0.5">Track and manage your 2 orders</p>
                    </div>
                </div>
                <RouterLink to="/shop"
                    class="self-start sm:self-auto text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm">
                    <i class="fa-solid fa-bag-shopping text-sm"></i>Continue Shopping
                </RouterLink>
            </div>
        </div>
        <div class="space-y-4">
            <div
                class="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200">
                <div class="p-5 sm:p-6">
                    <div class="flex gap-5">
                        <div class="relative shrink-0">
                            <div
                                class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden">
                                <img alt="" class="w-full h-full object-contain"
                                    src="https://ecommerce.routemisr.com/Route-Academy-products/1678301723274-cover.jpeg">
                            </div>
                            <div
                                class="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                                +1</div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <div
                                        class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-lg mb-2">
                                        <span class="text-xs font-semibold text-amber-600">Processing</span>
                                    </div>
                                    <h3 class="font-bold text-gray-900 text-lg flex items-center gap-2"><i class="fa-solid fa-hashtag text-sm text-gray-400"></i>80843</h3>
                                </div>
                                <div class="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                                    <i class="fa-solid fa-money-bill text-gray-600"></i>
                                </div>
                            </div>
                            <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                                <span class="flex items-center gap-1.5"> <i class="fa-solid fa-calendar-day text-xs text-gray-400"></i>Mar 17, 2026</span>
                                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span class="flex items-center gap-1.5"><i class="fa-solid fa-box text-xs text-gray-400"></i> 2 items</span>
                                <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span class="flex items-center gap-1.5"> <i class="fa-solid fa-location-dot text-xs text-gray-400"></i>الساحل</span>
                            </div>
                            <div class="flex items-center justify-between gap-4">
                                <div>
                                    <span class="text-2xl font-bold text-gray-900">44,909</span>
                                    <span class="text-sm font-medium text-gray-400 ml-1">EGP</span>
                                </div>
                                <button
                                    class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200">
                                   Details<i class="fa-solid fa-chevron-down text-xs transition-transform duration-300 "></i>
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

</script>

<style lang="scss" scoped></style>