<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-4">
          <RouterLink :to="{name:'home'}"  class="inline-block mb-6" >
            <div class="bg-white rounded-lg px-4 py-2 inline-block">
              <img src="/public/images/freshcart-logo.49f1b44d.svg" alt="FreshCart Logo" class="h-8 w-auto"
                style="color: transparent;">
            </div>
          </RouterLink >
          <p class="text-gray-400 mb-6 text-sm leading-relaxed">
            FreshCart is your one-stop destination for quality products.
            From fashion to electronics, we bring you the best brands at
            competitive prices with a seamless shopping experience.
          </p>

          <div class="space-y-3 mb-6">
            <a
              class="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm cursor-pointer"><i
                class="fa-solid fa-phone" style="color: #1ee62b;"></i>
              +1 (800) 123-4567</a>
            <a
              class="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm cursor-pointer"><i
                class="fa-solid fa-envelope" style="color: #0cdf24;"></i> support@freshcart.com</a>
            <div class="flex items-start gap-3 text-gray-400 text-sm">
              <i class="fa-solid fa-location-dot" style="color: #03e207;"></i>
              123 Commerce Street, New York, NY 10001
            </div>
          </div>
          <div class="flex items-center gap-3">
            <a href="https://www.facebook.com" target="blank"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"><i
                class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" target="blank"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-colors"><i
                class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com" target="blank"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors"><i
                class="fa-brands fa-instagram"></i></a>
            <a href="https://www.youtube.com" target="blank"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors"><i
                class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="font-semibold text-lg mb-5">Shop</h3>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/shop" class="text-gray-400 hover:text-green-400 transition-colors text-sm">All Products
              </RouterLink to="">
            </li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Categories</a></li>
            <li>
              <RouterLink to="/brands" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Brands
              </RouterLink to="">
            </li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Electronics</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Men's Fashion</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Women's Fashion</a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-white mb-5 font-semibold text-lg">Account</h3>
          <ul class="space-y-3 ">
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">My Account</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Order History</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Wishlist</a></li>
            <li>
              <RouterLink to="#"
                class="text-gray-400 hover:text-green-400 transition-colors text-sm">Shopping Cart</RouterLink>
            </li>
            <li>
              <RouterLink to="/login" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Sign In
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/register" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Create
                Account</RouterLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-white mb-5 font-semibold text-lg">Support</h3>
          <ul class="space-y-3">
            <li>
              <RouterLink to="/contact" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Contact Us
              </RouterLink>
            </li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Help Center</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Shipping Info</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Returns & Refunds</a>
            </li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Track Order</a></li>
          </ul>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-white mb-5 text-lg font-semibold">Legal</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Terms of Service</a>
            </li>
            <li><a href="#" class="text-gray-400 hover:text-green-400 transition-colors text-sm">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <!-- Bottom -->
      <div class="border-t border-slate-800 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm">
        <p class="text-gray-500 text-sm text-center md:text-left">© 2026 FreshCart. All rights reserved.</p>

        <div class="flex items-center gap-4 text-sm">
          <span class="text-gray-500"><i class="fa-solid fa-credit-card text-gray-500 mx-1"></i>Visa</span>
          <span class="text-gray-500"><i class="fa-solid fa-credit-card text-gray-500 mx-1"></i> Mastercard</span>
          <span class="text-gray-500"><i class="fa-solid fa-credit-card text-gray-500 mx-1"></i> PayPal</span>
        </div>
      </div>

    </div>

  </footer>
</template>
