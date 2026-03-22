<template>
    <div>
        <h1 class="text-4xl font-bold">Welcome to <span class="text-green-600">FreshCart</span></h1>
        <p class="text-xl mt-2 mb-4">Join thousands of happy customers who enjoy fresh groceries delivered right to
            their doorstep.</p>
        <ul class="*:flex items-start *:gap-4 space-y-6 my-8">
            <li v-for="(item, index) in liValues" :key="index" class="flex items-start gap-4">
                <div class=" size-12 text-lg bg-green-100 rounded-full flex justify-center items-center">
                    <i :class="item.icon" style="color: green;"></i>
                </div>
                <div class="content">
                    <h2 class="text-lg font-semibold">{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                </div>
            </li>
        </ul>
        <div class="review bg-white shadow-sm p-4 rounded-md my-8">
            <div class="flex items-center gap-4 mb-3">
                <img src="/images/review-author.webp" class="size-12 rounded-full object-cover">
                <div>
                    <h3 class="font-semibold">Sarah Johnson</h3>
                    <div class="text-yellow-300 mt-3 fa-xl">★★★★★</div>
                </div>
            </div>
            <p class="italic text-gray-600 ">
                "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
            </p>
        </div>
    </div>
</template>

<script setup>
const liValues = [
    {
        icon: 'fa-solid fa-star',
        title: 'Premium Quality',
        description: 'Premium quality products sourced from trusted suppliers'
    },
    {
        icon: 'fa-solid fa-truck',
        title: 'Fast Delivery',
        description: 'Same-day delivery available in most areas'
    },
    {
        icon: 'fa-solid fa-shield-halved',
        title: 'Secure Shopping',
        description: 'Your data and payments are completely secure'
    }
]
</script>

<style scoped></style>