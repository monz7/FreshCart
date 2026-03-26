<template>
  <div class=" lg:block text-sm border-b border-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-10">
        <div class="flex items-center gap-6 text-gray-500 ">
          <span class="flex items-center gap-2"><i class="fa-solid fa-truck text-green-600 text-sm"></i>
            <span>Free Shipping on Orders 500 EGP</span>
          </span>
          <span class="flex items-center gap-2">
            <i class="fa-solid fa-gift text-green-600 text-xs"></i>
            <span>New Arrivals Daily</span>
          </span>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-4 text-gray-500">
            <RouterLink to="#" class="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <i class="fa-solid fa-phone text-sm"></i>
              <span>+1 (800) 123-4567</span>
            </RouterLink>
            <RouterLink to="#" class="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <i class="fa-regular fa-envelope text-sm"></i>
              <span>support@freshcart.com</span>
            </RouterLink>
          </div>
          <span class="w-px h-4 bg-gray-300"></span>
          <div v-if="authStore.isLoggedIn" class="flex items-center gap-4">
            <RouterLink to="/account"
              class="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors">
              <i class="fa-regular fa-user text-sm"></i>
              <span>{{ authStore.user?.name }}</span>
            </RouterLink>
            <RouterLink to="/login" 
              class="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors">
              <i class="fa-solid fa-right-from-bracket text-xs"></i>
              <span @click="authStore.loggout">Sign Out</span>
            </RouterLink>
          </div>
          <div v-else class="flex items-center gap-4">
            <RouterLink to="/login"
              class="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors">
              <i class="fa-solid fa-user text-sm"></i>
              <span>Sign In</span>
            </RouterLink>
            <RouterLink to="/register"
              class="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors">
              <i class="fa-solid fa-user-plus text-sm"></i>
              <span>Sign Up</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';


const authStore = useAuthStore()
</script>
