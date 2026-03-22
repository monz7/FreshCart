<template>
    <Navbar />
    <div class="min-h-screen  flex flex-col items-center justify-center bg-gray-100 text-center px-4 pb-10">
        <div class="relative bg-white rounded-2xl shadow-lg p-10 mb-6">
            <i class="fa-solid fa-cart-shopping text-6xl text-green-400"></i>
            <div
                class="absolute -top-6 -right-6 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg">
                404
            </div>
        </div>
        <h1 class="text-4xl font-extrabold text-gray-900 mb-3">
            Oops! Nothing Here
        </h1>
        <p class="text-gray-500 max-w-md mb-8">
            Looks like this page went out of stock! Don't worry,
            there's plenty more fresh content to explore.
        </p>
        <div class="flex gap-4 ">
            <button @click="goHome"
                class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2">
                <i class="fa-solid fa-house"></i>
                Go to Homepage
            </button>
            <button @click="goBack"
                class="bg-white border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl shadow-md flex items-center gap-2">
                <i class="fa-solid fa-arrow-left"></i>
                Go Back
            </button>
        </div>
      
    </div>
      <TopFooter />
        <Footer />

</template>

<script>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import TopFooter from './TopFooter.vue';

export default {
    methods: {
        goHome() {
            this.$router.push("/");
        },
        goBack() {
            this.$router.back();
        }
    },
    components: {
        Footer,
        TopFooter
    }
};
</script>
<style scoped></style>