<template>
        <div class="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 mt-10 mb-14">
            <LoginInfo />
            <LoginInput />
        </div>
</template>

<script setup>
import LoginInfo from '@/Components/Login/LoginInfo.vue';
import LoginInput from '@/Components/Login/LoginInput.vue';
</script>

<style scoped></style>