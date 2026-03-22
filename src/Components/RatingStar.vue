<template>
    <div class="flex items-center gap-1">
        <span v-for="(star, index) in stars" :key="index">
            <!-- full star -->
            <i v-if="star === 'full'" class="fa-solid fa-star text-yellow-400 w-4 h-4"></i>
            <!-- half star -->
            <i v-else-if="star === 'half'" class="fa-solid fa-star-half-stroke w-4 h-4 text-yellow-400"></i>
            <!-- empty star -->
            <i v-else class="fa-regular fa-star text-yellow-400 w-4 h-4"></i>
        </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    rating: {
         type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    }
})
const stars = computed(() => {
    const result = []
    const fullStars = Math.floor(props.rating)
    const hasHalfStar = props.rating % 1 >= 0.5
    for (let i = 0; i < fullStars; i++) {
        result.push("full")
    }

    if (hasHalfStar) {
        result.push("half")
    }

    while (result.length < 5) {
        result.push("empty")
    }

    return result
})
</script>
<style lang="scss" scoped></style>