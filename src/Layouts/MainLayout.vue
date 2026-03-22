<template>
    <TopNavBar />
  <div class="sticky top-0 z-40 bg-white shadow-sm">
    <Navbar />
  </div>
      <div class="min-h-screen flex flex-col">
    <main class="flex-1">
      <router-view />
    </main>
  </div>
  <TopFooter />
    <Footer />
</template>

<script setup>

import Footer from '@/Components/Footer.vue';
import Navbar from '@/Components/Navbar.vue';
import TopFooter from '@/Components/TopFooter.vue';
import TopNavBar from '@/Components/TopNavBar.vue';



</script>

<style  scoped>

</style>