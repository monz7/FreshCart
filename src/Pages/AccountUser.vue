<template>
    <AccountHeader />
    <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside class="w-full lg:w-72 shrink-0">
                <nav class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div class="p-4 border-b border-gray-100">
                        <h2 class="font-bold text-gray-900">My Account</h2>
                    </div>
                    <ul class="p-2 ">
                        <li>
                            <RouterLink to="/account/address" v-slot="{ isActive }"
                                class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group  hover:text-gray-900">
                                <div :class="isActive ? 'bg-green-500 text-green-700 text-white' : 'bg-gray-100 text-gray-500'"
                                    class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors">
                                    <i class="fa-solid fa-location-dot text-sm"></i>
                                </div>
                                <span class="font-medium flex-1">My Addresses</span>
                                <i class="fa-solid fa-chevron-right text-xs transition-transform"></i>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/account/setting" v-slot="{isActive}"
                                class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group">
                                <div :class="isActive ? 'bg-green-500 text-green-700 text-white' : 'bg-gray-100 text-gray-500'"
                                 class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors ">
                                    <i class="fa-solid fa-gear text-sm"></i>
                                </div>
                                <span class="font-medium flex-1">Settings</span>
                                <i class="fa-solid fa-chevron-right text-xs transition-transform text-gray-400"></i>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main class="flex-1 min-w-0">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup>
import AccountHeader from '@/Components/Account/AccountHeader.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>