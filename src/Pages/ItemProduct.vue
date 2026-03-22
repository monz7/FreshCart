<template>
  <nav aria-label="Breadcrumb" class="py-4 px-20">
    <div class="container mx-auto px-4">
      <ol class="flex items-center flex-wrap gap-1 text-sm">
        <li class="flex items-center">
          <RouterLink :to="{ name: 'home' }"
            class="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5">
            <i class="fa-solid fa-house text-sm"></i>Home
            <i class="fa-solid fa-angle-right text-gray-400 text-xs mx-2"></i>
          </RouterLink>
        </li>
        <li class="flex items-center">
          <RouterLink to="/home" class="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5">
            {{ productItem.category?.name }}
            <i class="fa-solid fa-angle-right text-gray-400 text-xs mx-2"></i>
          </RouterLink>
        </li>
        <li class="flex items-center">
          <RouterLink to="/" class="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5">
            {{ productItem.subcategory?.[0].name }}
            <i class="fa-solid fa-angle-right text-gray-400 text-xs mx-2"></i>
          </RouterLink>
        </li>
        <li class="flex items-center">
          <RouterLink to="/home" class="text-gray-900 font-medium truncate max-w-xs">
            {{ productItem.title }}
          </RouterLink>
        </li>
      </ol>
    </div>
  </nav>
  <section id="product-detail" class="py-6 px-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row gap-8">
        <div id="product-images" class="lg:w-1/4">
          <div class="bg-white rounded-xl shadow-sm p-4 sticky top-4">
            <div class="image-gallery product-gallery image-gallery-using-mouse" aria-live="polite">
              <div class="image-gallery-content">
                <div class="image-gallery-slide-wrapper">
                  <div class="image-gallery-swipe">
                    <div class="relative">
                      <div>
                        <img v-if="productItem.images?.length" :src="productItem.images[currentIndex]"
                          :alt="productItem.title" class="w-full" />
                      </div>
                    </div>
                    <div class="mt-4 overflow-x-auto no-scrollbar">
                      <div class="flex gap-3 w-max">
                        <img v-for="(img, index) in productItem.images" :key="index" :ref="el => imageRefs[index] = el"
                          :src="img" @click="selectImage(index)"
                          class="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 transition"
                          :class="currentIndex === index ? 'overflow-hidden border-blue-500 border-2 scale-110' : 'border-transparent'" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product-info" class="lg:w-3/4">
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex flex-wrap gap-2 mb-4"><a
                class="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 transition"
                href="# ">{{ productItem.category?.name }}</a><span
                class="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">{{ productItem.brand?.name }}</span>
            </div>
            <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{{ productItem.title }}</h1>
            <div class="flex items-center gap-3 mb-4">
              <div class="text-yellow-400">
              <RatingStar :rating="productItem.ratingsAverage"/>
              </div><span class="text-sm text-gray-600">{{ productItem.ratingsAverage }}
                ({{ productItem.ratingsQuantity }} reviews)</span>
            </div>
            <div class="flex items-center flex-wrap gap-3 mb-6">
             <span class="text-lg font-bold  block" :class="{
              'text-green-600': productItem.priceAfterDiscount,
              'text-gray-700': productItem.price}">
                {{ productItem.priceAfterDiscount ? productItem.priceAfterDiscount : productItem.price }} EGP</span>
              <span v-if="productItem.priceAfterDiscount" class="text-sm line-through text-gray-500 ml-2">
              {{ productItem.price }} EGP</span>
              <span v-if="productItem.priceAfterDiscount" class="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">Save {{ getDiscountPercentage(productItem) }}%</span>
            </div>
            <div class="flex items-center gap-2 mb-6"><span
                class="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700"><span
                  class="w-2 h-2 rounded-full bg-green-500"></span>In Stock</span></div>
            <div class="border-t border-gray-300 pt-5 mb-6">
              <p class="text-gray-600 leading-relaxed">{{ productItem.description }}
              </p>
            </div>
            <div class="mb-6"><label class="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div class="flex items-center gap-4">
                <div class="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    class="px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-green-600 transition disabled:opacity-50"
                    :disabled="quantity === 1" @click="decreaseQty">
                    <i class=" fa-solid fa-minus"></i>
                  </button>
                  <input min="1" :max="productItem.quantity" readonly
                    class="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium" id="quantity"
                    type="number" value="1" v-model.number="quantity" />
                  <button :disabled="quantity >= productItem.quantity" @click="increaseQty"
                    class="px-4 py-3 text-gray-600 hover:bg-gray-200 hover:text-green-600 transition disabled:opacity-50">
                    <i class="fa-solid fa-plus"></i></button>
                </div><span class="text-sm text-gray-500">{{ productItem.quantity }} available</span>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <div class="flex justify-between items-center"><span class="text-gray-600">Total Price:</span><span
                  class="text-2xl font-bold text-green-600">{{ productItem.priceAfterDiscount ?
                    productItem.priceAfterDiscount : productItem.price }} EGP</span></div>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 mb-6">
              <button id="add-to-cart"
                class="flex-1 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 bg-green-600">
                <i class="fa-solid fa-cart-shopping"></i>Add to Cart
              </button>
              <button id="buy-now"
                class="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"><i
                  class="fa-solid fa-bolt"></i>Buy Now
              </button>
            </div>
            <div class="flex gap-3 mb-6">
              <button id="wishlist-button"
                class="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600">
                <i class="fa-regular fa-heart"></i> Add to Wishlist</button>
              <button
                class="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition"><i
                  class="fa-solid fa-share-nodes"></i>
              </button>
            </div>
            <div class="border-t border-gray-100 pt-6">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="flex items-center gap-3">
                  <div
                    class="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-truck-fast"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 text-sm">Free Delivery</h4>
                    <p class="text-xs text-gray-500">Orders over $50</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div
                    class="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                  </div>
                  <div>

                    <h4 class="font-medium text-gray-900 text-sm">30 Days Return</h4>
                    <p class="text-xs text-gray-500">Money back</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div
                    class="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 text-sm">Secure Payment</h4>
                    <p class="text-xs text-gray-500">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="product-details-tabs" class="py-8  px-20">
    <div class="container mx-auto px-4">
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="border-b border-gray-200">
          <div class="flex overflow-x-auto scrollbar-hide">
            <button @click="activeTab = 'Product Details'"
              :class="activeTab === 'Product Details' ? 'text-green-600 border-b-2 border-green-600  bg-green-50/50' : 'text-gray-500'"
              class="flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200">
              <i class="fa-solid fa-box text-sm"></i>
              Product Details
            </button>
            <button @click="activeTab = 'Reviews'"
              :class="activeTab === 'Reviews' ? 'text-green-600 border-b-2 border-green-600  bg-green-50/50' : 'text-gray-500'"
              class="flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50">
              <i class="fa-solid fa-star text-sm"></i>
              Reviews ({{ productItem.ratingsQuantity }})
            </button>
            <button @click="activeTab = 'Shipping'"
              :class="activeTab === 'Shipping' ? 'text-green-600 border-b-2 border-green-600  bg-green-50/50' : 'text-gray-500'"
              class="flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 text-gray-600 hover:text-green-600 hover:bg-gray-50">
              <i class="fa-solid fa-truck text-sm"></i>
              Shipping & Returns
            </button>
          </div>
        </div>
        <div class="p-6">
          <div class="space-y-6" v-if="activeTab === 'Product Details'">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">About this Product</h3>
              <p class="text-gray-600 leading-relaxed">Material Polyester Blend
                Colour Name Multicolour Department Women
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-3">Product Information</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between text-sm"><span class="text-gray-500">Category</span><span
                      class="text-gray-900 font-medium">  {{ productItem.category?.name }}</span></li>
                  <li class="flex justify-between text-sm"><span class="text-gray-500">Subcategory</span><span
                      class="text-gray-900 font-medium">{{ productItem.subcategory?.[0].name }}</span></li>
                  <li class="flex justify-between text-sm"><span class="text-gray-500">Brand</span><span
                      class="text-gray-900 font-medium">{{ productItem.brand?.name }}</span></li>
                  <li class="flex justify-between text-sm"><span class="text-gray-500">Items Sold</span><span
                      class="text-gray-900 font-medium">{{ productItem.sold }}+ sold</span></li>
                </ul>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-3">Key Features</h4>
                <ul class="space-y-2">
                  <li class="flex items-center text-sm text-gray-600"><i
                      class="fa-solid fa-check text-green-600 mr-2 w-4"></i>Premium Quality Product</li>
                  <li class="flex items-center text-sm text-gray-600"><i
                      class="fa-solid fa-check text-green-600 mr-2 w-4"></i>100% Authentic Guarantee</li>
                  <li class="flex items-center text-sm text-gray-600"><i
                      class="fa-solid fa-check text-green-600 mr-2 w-4"></i>Fast & Secure Packaging</li>
                  <li class="flex items-center text-sm text-gray-600">
                    <i class="fa-solid fa-check text-green-600 mr-2 w-4"></i>Quality Tested
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="space-y-6" v-if="activeTab === 'Reviews'">
            <div class="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div class="text-center">
                <div class="text-5xl font-bold text-gray-900 mb-2">{{ productItem.ratingsAverage }}</div>
                <div class="text-yellow-400">
                 <RatingStar :rating="productItem.ratingsAverage"/>
                </div>
                <p class="text-sm text-gray-500 mt-2">Based on {{productItem.ratingsQuantity }} reviews</p>
              </div>
              <div class="flex-1 w-full">
                <div class="flex items-center gap-3 mb-2"><span class="text-sm text-gray-600 w-8">5 star</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400 rounded-full transition-all duration-300" style="width: 25%;">
                    </div>
                  </div><span class="text-sm text-gray-500 w-10">25%</span>
                </div>
                <div class="flex items-center gap-3 mb-2"><span class="text-sm text-gray-600 w-8">4 star</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400 rounded-full transition-all duration-300" style="width: 60%;">
                    </div>
                  </div><span class="text-sm text-gray-500 w-10">60%</span>
                </div>
                <div class="flex items-center gap-3 mb-2"><span class="text-sm text-gray-600 w-8">3 star</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400 rounded-full transition-all duration-300" style="width: 25%;">
                    </div>
                  </div><span class="text-sm text-gray-500 w-10">25%</span>
                </div>
                <div class="flex items-center gap-3 mb-2"><span class="text-sm text-gray-600 w-8">2 star</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400 rounded-full transition-all duration-300" style="width: 5%;"></div>
                  </div><span class="text-sm text-gray-500 w-10">5%</span>
                </div>
                <div class="flex items-center gap-3 mb-2"><span class="text-sm text-gray-600 w-8">1 star</span>
                  <div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-400 rounded-full transition-all duration-300" style="width: 5%;"></div>
                  </div><span class="text-sm text-gray-500 w-10">5%</span>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-300 pt-6">
              <div class="text-center py-8">
              <i class="fa-solid fa-star text-gray-400 text-4xl mb-3"></i>
                <p class="text-gray-500">Customer reviews will be displayed here.</p>
                <button class="mt-4 text-green-600 hover:text-green-700 font-medium">Write a Review</button>
              </div>
            </div>
          </div>
          <div class="space-y-6" v-if="activeTab === 'Shipping'">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center"><i
                      class="fa-solid fa-truck text-lg"></i></div>
                  <h4 class="font-semibold text-gray-900">Shipping Information</h4>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Free shipping on orders over $50</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Standard delivery: 3-5 business days</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Express delivery available (1-2 business days)</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Track your order in real-time</span>
                  </li>
                </ul>
              </div>
              <div class="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-rotate-left"></i>
                  </div>
                  <h4 class="font-semibold text-gray-900">Returns & Refunds</h4>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>30-day hassle-free returns</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Full refund or exchange available</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Free return shipping on defective items</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-gray-700">
                    <i class="fa-solid fa-check text-green-600 mt-0.5"></i>
                    <span>Easy online return process</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
              <div class="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0"><i class="fa-solid fa-shield-halved text-2xl"></i></div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Buyer Protection Guarantee</h4>
                <p class="text-sm text-gray-600">Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useLoading } from 'vue-loading-overlay'
import RatingStar from '@/Components/RatingStar.vue';

const currentIndex = ref(0)
const imageRefs = ref([])
const quantity = ref(1);

const activeTab = ref("Product Details")
function selectImage(index) {
  currentIndex.value = index

  imageRefs.value[index]?.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  })
}
// loading-overlay 
const $loading = useLoading({
  canCancel: true,
  color: "green",
  loader: "bars",
  backgroundColor: '#ffffff',
  color: 'green',
  width: 64,
  height: 64,

})
const route = useRoute();
const productItem = ref({})


function getproductItem() {
  const isLoading = $loading.show();
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${route.params.id}`)
    .then((response) => {
      productItem.value = response.data.data;
      console.log(productItem.value);
    })
    .catch((error) => {
      console.log(error.message)
    }).finally(() => {
      isLoading.hide();
    });
}

function increaseQty() {
  if (quantity.value < productItem.value.quantity) {
    quantity.value++;
  }
}
function decreaseQty() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}
function getDiscountPercentage(productItem) {
  if (!productItem.priceAfterDiscount) return 0;
  return Math.round(((productItem.price - productItem.priceAfterDiscount) / productItem.price) * 100);
}
onMounted(() => {
  getproductItem()
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
