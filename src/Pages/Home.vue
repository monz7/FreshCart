<template>
    <HomeCarousel />
    <section class="py-8 px-8 bg-gray-50">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                    class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                        class="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-truck  text-xl"></i>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 text-sm">Free Shipping</h3>
                        <p class="text-xs text-gray-500">On orders over 500 EGP</p>
                    </div>
                </div>
                <div
                    class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                        class="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-shield-halved text-lg"></i>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 text-sm">Secure Payment</h3>
                        <p class="text-xs text-gray-500">100% secure transactions</p>
                    </div>
                </div>
                <div
                    class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                        class="bg-orange-50 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-arrow-rotate-left text-xl"></i>

                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 text-sm">Easy Returns</h3>
                        <p class="text-xs text-gray-500">14-day return policy</p>
                    </div>
                </div>
                <div
                    class="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div
                        class="bg-purple-50 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-headset text-lg"></i>

                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 text-sm">24/7 Support</h3>
                        <p class="text-xs text-gray-500">Dedicated support team</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <section class="py-10 px-4">
            <ShopCategores/>
    </section>
    <section class="py-5 px-10">
        <SectionRef />
    </section>
    <section class="py-10 mx-10">
        <div class="container mx-auto">
            <div class="flex items-center gap-3 my-8">
                <div class="text-3xl font-bold text-gray-800">
                    <div class="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
                </div>
                <h2 class="text-3xl font-bold text-gray-800">
                    Featured <span class="text-emerald-600"> Products</span>
                </h2>
            </div>
            <ProudectsCards />
        </div>
    </section>
    <TecSection />

</template>

<script setup>
import HomeCarousel from '@/Components/HomeSections/HomeCarousel.vue';
import SectionRef from '@/Components/HomeSections/SectionRef.vue';
import ShopCategores from '@/Components/HomeSections/ShopCategores.vue';
import TecSection from '@/Components/HomeSections/TecSection.vue';
import ProudectsCards from '@/Components/ProudectsCards.vue';

</script>

<style scoped></style>
