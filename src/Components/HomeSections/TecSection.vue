<template>
    <section class="py-16 bg-linear-to-b from-white to-gray-50">
        <div class="container mx-auto">
            <div class="relative">
                <div class="bg-linear-to-br from-emerald-50 via-white to-teal-50 rounded-3xl border border-emerald-100/50 shadow-2xl shadow-emerald-500/10 overflow-hidden"
                    style="opacity: 1; transform: none;">
                    <div class="relative grid lg:grid-cols-5 gap-8 p-8 lg:p-14">
                        <div class="lg:col-span-3 space-y-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                    <i class="fa-solid fa-envelope text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                                        Newsletter</h3>
                                    <p class="text-xs text-gray-500">50,000+ subscribers</p>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                                    Get the Freshest Updates <span class="text-emerald-600"> Delivered Free</span>
                                </h2>
                                <p class="text-gray-500 mt-3 text-lg">Weekly recipes, seasonal offers & exclusive member
                                    perks.</p>
                            </div>
                            <div class="flex flex-wrap gap-3">
                                <div
                                    class="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                                    <div class="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <i class="fa-solid fa-leaf text-emerald-600 text-sm"></i>
                                    </div>
                                    <span class="text-xm font-medium text-gray-700">Fresh Picks Weekly</span>
                                </div>
                                <div
                                    class="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                                    <div class="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <i class="fa-solid fa-truck text-emerald-600 text-sm"></i>
                                    </div><span class="text-xm font-medium text-gray-700">Free Delivery
                                        Codes</span>
                                </div>
                                <div
                                    class="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2.5 rounded-full shadow-sm">
                                    <div class="w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <i class="fa-solid fa-tag text-emerald-600 text-sm"></i>
                                    </div>
                                    <span class="text-xm font-medium text-gray-700">Members-Only Deals</span>
                                </div>
                            </div>
                            <form class="pt-2">
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <div class="relative flex-1">
                                        <input placeholder="you@example.com" v-model="email"
                                            class="w-full pl-5 pr-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-base shadow-sm"
                                            required="" type="email" value="">
                                    </div>
                                    <button type="button" v-if="!subscribed" @click="handleSubscribe"
                                        class="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]">
                                        <span>Subscribe</span>
                                        <i
                                            class="fa-solid fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                                    </button>
                                    <button type="button" v-else
                                        class="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-lg bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02]">
                                        <i class="fa-solid fa-check"></i>
                                        <span>You're In!</span>
                                    </button>

                                </div>
                                <p class="text-xs text-gray-400 mt-3 pl-1">
                                    ✨ Unsubscribe anytime. No spam, ever.
                                </p>
                            </form>
                        </div>
                        <div class="lg:col-span-2 lg:border-l lg:border-emerald-100 lg:pl-8">
                            <div class="h-full flex flex-col justify-center">
                                <div
                                    class="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
                                    <div
                                        class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl">
                                    </div>
                                    <div
                                        class="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl">
                                    </div>
                                    <div class="relative space-y-5">
                                        <div
                                            class="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                                            <i class="fa-solid fa-mobile text-gray-500"></i> MOBILE APP
                                        </div>
                                        <h3 class="text-2xl font-bold leading-tight">Shop Faster on Our App</h3>
                                        <p class="text-gray-400 text-sm leading-relaxed">Get app-exclusive deals & 15%
                                            off your first order.</p>
                                        <div class="flex flex-col gap-3 pt-2">
                                            <a href="#"
                                                class="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                                                <i class="fa-brands fa-apple"></i>
                                                <div class="text-left">
                                                    <div class="text-[10px] text-gray-400 uppercase tracking-wide">
                                                        Download on
                                                    </div>
                                                    <div class="text-sm font-semibold -mt-0.5">App Store</div>
                                                </div>
                                            </a>
                                            <a href="#"
                                                class="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                                                <i class="fa-brands fa-google-play"></i>
                                                <div class="text-left">
                                                    <div class="text-[10px] text-gray-400 uppercase tracking-wide">Get
                                                        it on</div>
                                                    <div class="text-sm font-semibold -mt-0.5">Google Play</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="flex items-center gap-2 pt-2 text-sm"><span
                                                class="text-yellow-400">★★★★★</span><span class="text-gray-400">4.9 •
                                                100K+ downloads</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref("");
const subscribed = ref(false);

function handleSubscribe() {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  if (!isValidEmail) return;
  subscribed.value = true;

  setTimeout(() => {
    subscribed.value = false;
    email.value = "";
  }, 1500);

}
</script>

<style scoped></style>