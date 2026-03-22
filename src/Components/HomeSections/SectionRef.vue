<template>
    <section ref="sectionRef" class="py-10">
        <div class="container mx-auto">
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Left Card -->
                <div :class="['relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white transition-all duration-1000 ease-out',
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0 transform:none']"
                    class="bg-green-600 text-white p-10 rounded-2xl">
                    <div
                        class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2">
                    </div>
                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2">
                    </div>
                    <div class="relative z-10">
                        <div class="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                            <span>🔥</span>
                            <span>Deal of the Day</span>
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold mb-2">Fresh Organic Fruits</h2>
                        <p class="text-white/80 mb-4">Get up to 40% off on selected organic fruits</p>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="text-3xl font-bold">40% OFF</div>
                            <div class="text-sm text-white/70">
                                Use code: <span class="font-bold text-white">ORGANIC40</span>
                            </div>
                        </div>
                        <div>
                            <RouterLink to="/shop"
                                class="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Shop Now
                                <ArrowRight class="w-4 h-4" />
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <!-- Right Card -->
                <div :class="['relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white transition-all duration-1000 ease-out',
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0']"
                    class="bg-green-600 text-white p-10 rounded-2xl">
                    <div
                        class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2">
                    </div>
                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2">
                    </div>
                    <div class="relative z-10">
                        <div class="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                            <span>
                                <Sparkles class="w-4 h-4 text-amber-200" />
                            </span>
                            <span>New Arrivals</span>
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold mb-2">Exotic Vegetables</h2>
                        <p class="text-white/80 mb-4">Discover our latest collection of premium vegetables</p>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="text-3xl font-bold">25% OFF</div>
                            <div class="text-sm text-white/70">
                                Use code: <span class="font-bold text-white">FRESH25</span>
                            </div>
                        </div>
                        <div>
                            <RouterLink to="/shop"
                                class="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Explore Now
                                <ArrowRight class="w-4 h-4" />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true
            }
        },
        {
            threshold: 0.3
        }
    )
    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})
</script>