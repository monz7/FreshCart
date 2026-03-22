<template>
    <div>
        <Carousel class="carousel" v-bind="config">
            <Slide v-for="image in images" :key="image.id" class="ImgURL overlay py-15 text-white p-4 w-full h-full">
                <div class="container h-full content-between px-3">
                    <h2 class="text-white text-3xl font-bold mb-4 max-w-96" style="opacity: 1; transform: none;">{{
                        image.title }}</h2>
                    <p style="opacity: 1; transform: none;">{{ image.desc }}</p>
                    <div class="mt-4" style="opacity: 1; transform: none;">
                        <RouterLink to="shop"
                            class="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Shop Now</RouterLink>
                        <RouterLink to="#"
                            class="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                            View
                            Deals</RouterLink>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <div class="px-7">
                    <Navigation />
                    <Pagination />
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const images = [
    {
        id: 1,
        title: "Fresh Products Delivered to your Door",
        desc: "Get 20% off your first order"
    },
    {
        id: 2,
        title: "Premium Quality Guaranteed",
        desc: "Fresh from farm to your table"
    },
    {
        id: 3,
        title: "Fast & Free Delivery",
        desc: "Same day delivery availabler"
    },
]
const config = {
    height: 400,
    itemsToShow: 1,
    gap: 5,
}
</script>
<style scoped>
.carousel {
    --vc-pgn-background-color: rgba(255, 255, 255, 0.993);
    --vc-pgn-width: 12px;
    --vc-pgn-height: 12px;
    --vc-pgn-border-radius: 50%;
    --vc-pgn-active-color: rgba(255, 255, 255, 1);
    --vc-nav-background: rgb(255, 255, 255);
    --vc-nav-border-radius: 100%;
}

img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ImgURL {
    background-image:
        linear-gradient(to right, rgba(34, 197, 94, 0.9), rgba(34, 197, 94, 0.5)),
        url("/images/home-slider-1.d79601a8.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
