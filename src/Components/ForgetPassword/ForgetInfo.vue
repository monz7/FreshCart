<template>
    <div class="hidden lg:block">
        <div class="text-center space-y-6">
            <div
                class="w-full h-96 bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                <div class="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50"></div>
                <div class="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50"></div>
                <div class="relative flex flex-col items-center gap-6 z-10">
                    <div
                        class="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div class="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                            <i class="fa-solid fa-lock text-4xl text-green-600"></i>
                        </div>
                    </div>
                    <div
                        class="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                        <i class="fa-solid fa-envelope text-green-500 text-xl"></i>
                    </div>
                    <div
                        class="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                        <i class="fa-solid fa-shield-halved text-green-500 text-xl"></i>
                    </div>
                    <div class="flex gap-3">
                        <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]"></div>
                        <div class="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]"></div>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <h2 class="text-3xl font-bold text-gray-800">Reset Your Password</h2>
                <p class="text-lg text-gray-600">Don't worry, it happens to the best of us. We'll help you get back into
                    your account in no time.</p>
                <div class="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <div class="flex items-center">
                        <i class="fa-solid fa-envelope text-green-600 mr-2"></i>Email Verification
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-shield-halved text-green-600 mr-2"></i>Secure Reset
                    </div>
                    <div class="flex items-center">
                        <i class="fa-solid fa-lock  text-green-600 mr-2"></i>Encrypted
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>