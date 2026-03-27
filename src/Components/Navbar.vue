<template>
  <div class="bg-white">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16  gap-4 lg:gap-8">
        <a href="#" class="shrink-0">
          <img src="/public/images/freshcart-logo.49f1b44d.svg" alt="FreshCart Logo" class="h-6 lg:h-8 w-auto">
        </a>
        <form class="hidden lg:flex flex-1 max-w-2xl">
          <div class="relative w-full">
            <input type="text" placeholder="Search for products, brands and more"
              class="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm">
            <button
              class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors">
              <i class="fa-solid fa-magnifying-glass text-sm"></i>
            </button>
          </div>
        </form>
        <nav class="hidden xl:flex items-center gap-6">
          <div class=" items-center justify-between">
            <ul class="flex gap-6 font-medium">
              <RouterLink to="/" exact-active-class="text-green-600 border-b-2 border-green-600"
                class="text-gray-700 hover:text-green-600 transition-colors font-medium">Home
              </RouterLink>
              <RouterLink to="/shop" exact-active-class="text-green-600 border-b-2 border-green-600"
                class="text-gray-700 hover:text-green-600 transition-colors font-medium">Shop
              </RouterLink>
              <!-- CATEGORIES -->
              <div class="relative group">
                <RouterLink to="" class="text-gray-700 hover:text-green-600 transition-colors font-medium py-2">
                  Categories<i class="fa-solid fa-chevron-down transition-transform group-hover:rotate-180"></i>
                </RouterLink>
                <div
                  class="absolute top-full left-0 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div class="bg-white border border-gray-100 shadow-lg rounded-lg  py-2 mt-1 min-w-50">
                    <RouterLink to="/categories"
                      class="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                      All Categories
                    </RouterLink>
                    <RouterLink to="#"
                      class="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                      Electronics
                    </RouterLink>
                    <RouterLink to="#"
                      class="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                      Women's Fashion
                    </RouterLink>
                    <RouterLink to="#"
                      class="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                      Men's Fashion
                    </RouterLink>
                    <RouterLink to="#"
                      class="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                      Beauty & Health
                    </RouterLink>
                  </div>
                </div>
              </div>
              <RouterLink to="/brands" exact-active-class="text-green-600 border-b-2 border-green-600"
                class="text-gray-700 hover:text-green-600 transition-colors font-medium">Brands
              </RouterLink>
            </ul>
          </div>
        </nav>
        <div class="flex items-center gap-1 lg:gap-2">
          <RouterLink to="contact"
            class="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity">
            <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <i class="fa-solid fa-headset text-green-600"></i>
            </div>
            <div class="text-xs">
              <p class="text-gray-500">Support</p>
              <p class="font-medium text-gray-700">24/7 Help</p>
            </div>
          </RouterLink>
          <RouterLink to="/wishlist" class="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group">
            <span v-if="wishlist.wishlistCount > 0"
              class="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
              {{ wishlist.wishlistCount }}
            </span>
            <i class="fa-regular fa-heart text-lg text-gray-500 group-hover:text-green-600 transition-colors"></i>
          </RouterLink>
          <RouterLink to="/CartShop" class="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group">
            <span v-if="cartStore.numOfCartItems > 0"
              class="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
              {{ cartStore.numOfCartItems }}
            </span>
            <i class="fa-solid fa-cart-shopping text-lg text-gray-500 group-hover:text-green-600 transition-colors"></i>
          </RouterLink>
          <!-- Dropdown -->
          <div class="hidden lg:block relative" ref="dropdownRef">
            <button @click="toggleMenu" v-if="authStore.isLoggedIn" to="/"
              class="rounded-full p-2.5 hover:bg-gray-100 transition-colors group">
              <i
                class="fa-regular fa-circle-user text-lg text-gray-500 group-hover:text-green-600 transition-colors"></i>
            </button>
            <RouterLink v-else to="/Login" class="hidden lg:flex items-center gap-2">
              <button
                class="bg-green-600 text-white px-5 py-2 rounded-4xl font-semibold text-sm hover:bg-green-700 transition-colors cursor-pointer">
                <i class="fa-regular fa-user"></i>
                Sign In
              </button>
            </RouterLink>
            <div v-if="isOpen"
              class="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl transition-all duration-200 origin-top-right opacity-100 scale-100 ">
              <div class="p-4 border-b border-gray-100">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <i class="fa-regular fa-user  text-green-600 text-xl"></i>
                  </div>
                  <div class="min-w-0">
                    <p class="text-sm font-semibold text-gray-800 truncate">{{ authStore.user?.name }}</p>
                    <p class="text-xs text-gray-400 truncate">{{ authStore.user?.email }}</p>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <ul>
                  <RouterLink to="/account"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                    <i class="fa-regular fa-user w-4 text-gray-400 "></i>My Profile
                  </RouterLink>
                  <RouterLink to="/myorder"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                    <i class="fa-solid fa-box-open w-4 text-gray-400"></i>My Orders
                  </RouterLink>
                  <RouterLink to="/"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                    <i class="fa-regular fa-heart w-4 text-gray-400"></i>My Wishlist
                  </RouterLink>
                  <RouterLink :to="{ name: 'address' }"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                    <i class="fa-solid fa-address-book w-4 text-gray-400"></i>Addresses
                  </RouterLink>
                  <RouterLink :to="{ name: 'setting' }"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                    <i class="fa-solid fa-gear w-4 text-gray-400"></i>Settings
                  </RouterLink>
                </ul>
              </div>
              <div class="border-t border-gray-100 py-2">
                <button @click="authStore.loggout"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left">
                  <i class="fa-solid fa-right-from-bracket text-xs"></i>Sign Out</button>
              </div>
            </div>
          </div>
          <button @click="isMobileMenuOpen = true"
            class="lg:hidden ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Phone VIEW -->
  <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false"
    class="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 opacity-100">
    <div @click.stop
      class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto translate-x-0">
      <div class="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
        <img alt="FreshCart" loading="lazy" width="160" height="31" decoding="async" data-nimg="1" class="h-8 w-auto"
          style="color:transparent" src="/public/images/freshcart-logo.49f1b44d.svg">
        <button @click="isMobileMenuOpen = false"
          class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <i class="fa-solid fa-xmark text-gray-600"></i>
        </button>
      </div>
      <form class="p-4 border-b border-gray-100">
        <div class="relative">
          <input type="text" placeholder="Search products..."
            class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"
            value="">
          <button type="submit"
            class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center">
            <i class="fa-solid fa-magnifying-glass text-sm"></i>
          </button>
        </div>
      </form>
      <nav class="p-4">
        <div class="space-y-1">
          <RouterLink to="/" @click="isMobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors">
            Home</RouterLink>
          <RouterLink to="/shop" @click="isMobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors">
            Shop
          </RouterLink>
          <RouterLink to="/categories" @click="isMobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors">
            Categories</RouterLink>
          <RouterLink to="/brands" @click="isMobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors">
            Brands
          </RouterLink>
        </div>
      </nav>
      <div class="mx-4 border-t border-gray-100"></div>
      <div class="p-4 space-y-1">
        <RouterLink to="/wishlist" @click="isMobileMenuOpen = false"
          class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
              <i class="fa-regular fa-heart text-red-500"></i>
            </div>
            <span class="font-medium text-gray-700">Wishlist</span>
          </div>
          <span v-if="wishlist.wishlistCount > 0"
            class="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{{ wishlist.wishlistCount }}</span>
        </RouterLink>
        <RouterLink @click="isMobileMenuOpen = false"
          class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
          to="/CartShop">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
              <i class="fa-solid fa-cart-shopping text-green-600"></i>
            </div>
            <span class="font-medium text-gray-700">Cart</span>
          </div>
          <span v-if="cartStore.numOfCartItems > 0"
            class="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{{ cartStore.numOfCartItems
            }}</span>
        </RouterLink>
      </div>
      <div class="mx-4 border-t border-gray-100"></div>
      <div class="p-4 space-y-1">
        <RouterLink to="account" v-if="authStore.isLoggedIn"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors">
          <div class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
            <i class="fa-regular fa-user text-gray-500"></i>
          </div>
          <span class="font-medium text-gray-700">{{ authStore.user?.name }}</span>
        </RouterLink>
        <button v-if="authStore.isLoggedIn" @click="authStore.loggout"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors w-full text-left">
          <div class="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
            <i class="fa-solid fa-right-from-bracket  text-red-500"></i>
          </div>
          <span class="font-medium text-red-600">Sign Out</span>
        </button>
        <div v-else class="p-4 space-y-1">
          <div  class="grid grid-cols-2 gap-3 pt-2">
            <RouterLink to="/login"
              class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
              Sign In</RouterLink>
            <RouterLink to="/register"
              class="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors">
              Sign Up</RouterLink>
          </div>
        </div>
      </div>
      <RouterLink to="contact" @click="isMobileMenuOpen = false"
        class="mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors">
        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <i class="fa-solid fa-headset text-green-600"></i>
        </div>
        <div>
          <div class="text-sm font-semibold text-gray-700">Need Help?</div>
          <div class="text-sm text-green-600">Contact Support</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useCartStore } from '@/stores/CartStore';
import { useWishlistStore } from '@/stores/Wishlist/wishlist';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const authStore = useAuthStore()
const cartStore = useCartStore()
const wishlist = useWishlistStore()
const isMobileMenuOpen = ref(false)
const isOpen = ref(false)
const dropdownRef = ref(null)
function handelClickUser(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}
onMounted(() => {
  document.addEventListener('click', handelClickUser);
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handelClickUser)
})
</script>
<style scoped></style>