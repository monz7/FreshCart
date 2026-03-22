<template>
    <div class="bg-gradient-to-br from-green-600 via-green-500 to-green-300 text-white">
        <div class="container mx-auto px-4 py-1 sm:py-14">
            <nav class="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                <RouterLink to="/" class="hover:text-white hover:underline">Home</RouterLink>
                <span class="text-white/40">/</span>
                <span class="text-white font-medium">My Account</span>
            </nav>
            <div class="flex items-center gap-5">
                <div
                    class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                    <i class="fa-solid fa-user text-3xl"></i>
                </div>
                <div>
                    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">My Account</h1>
                    <p class="text-white/80 mt-1">
                        Manage your addresses and account settings</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>