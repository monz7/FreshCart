<template>
    <div class="container py-16 mx-auto px-30">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <ForgetInfo/>
            <ForgetInput/>
        </div>

    </div>
</template>

<script setup>
import ForgetInfo from '@/Components/ForgetPassword/ForgetInfo.vue';
import ForgetInput from '@/Components/ForgetPassword/ForgetInput.vue';



</script>

<style lang="scss" scoped></style>