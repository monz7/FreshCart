<template>
    <div class="bg-gradient-to-br from-green-600 via-green-500 to-green-300 text-white">
        <div class="container mx-auto px-20 py-10 sm:py-14">
            <nav class="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                <router-link to="/" class="hover:text-white hover:underline">Home</router-link>
                <span class="text-white/40">/</span>
                <span class="text-white font-medium">
                    Contact Us</span>
            </nav>
            <div class="flex items-center gap-5">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                    <i class="fa-solid fa-headset text-3xl"></i>
                </div>
                <div>
                    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
                    <p class="text-white/80 mt-1">We'd love to hear from you. Get in touch with our team. </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-20 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <contact-info />
            <contact-input />
        </div>
    </div>
</template>

<script setup>
import ContactInfo from '@/Components/Contact/ContactInfo.vue';
import ContactInput from '@/Components/Contact/ContactInput.vue';


</script>

<style scoped></style>