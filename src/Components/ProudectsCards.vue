<template>
    <div class="flex items-center justify-center">
        <loading v-model:active="isLoading" :is-full-page="true" loader='bars' color="green" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div v-for="product in apiData" :key="product.id"
            class="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-xl">
            <div class="relative">
                <img :src="product.imageCover" :alt="product.title" class="w-full h-60 object-contain bg-white">
                <div class="absolute top-3 left-3 ">
                    <span v-if="product.priceAfterDiscount" class="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{{ getDiscountPercentage(product) }}%
                    </span>
                </div>
                <div class="absolute top-3 right-3 flex flex-col space-y-2">
                    <button @click="handleWishlist(product.id)"
                        class="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500">
                        <i
                            :class="isInWishlist(product.id) ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart text-gray-600'"></i>
                    </button>
                    <button class=" bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600
                            hover:text-green-600 shadow-sm">
                        <i class="fa-solid fa-arrows-rotate fa-sm"></i>
                    </button>
                    <RouterLink :to="{ name: 'itemProuduct', params: { id: product.id } }"
                        class="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm">
                        <i class="fa-regular fa-eye fa-sm"></i>
                    </RouterLink>
                </div>
                <div class="p-4">
                    <div class="text-xs text-gray-500 mb-1">{{ product.category.name }}</div>
                    <h3 class="font-medium mb-1 cursor-pointer line-clamp-2">{{ product.title }}</h3>
                    <div class="flex items-center mb-2">
                        <div class="flex text-amber-400 mr-2">
                            <div>
                                <RatingStar :rating="product.ratingsAverage" />
                            </div>
                        </div>
                        <span class="text-xs text-gray-500">{{ product.ratingsAverage }}</span>
                        <span class="text-xs text-gray-500 p-1">({{ product.ratingsQuantity }})</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex justify-center items-center">
                            <span class="text-lg font-bold  block" :class="{
                                'text-green-600': product.priceAfterDiscount,
                                'text-gray-700': product.price
                            }">
                                {{ product.priceAfterDiscount ? product.priceAfterDiscount : product.price }} EGP
                            </span>
                            <span v-if="product.priceAfterDiscount" class="text-sm line-through text-gray-500 ml-2">{{
                                product.price }} EGP</span>
                        </div>
                        <button @click="addProductCart(product)"
                            class="h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70">
                            <i :class="AddCart[product.id] ? 'fa-solid fa-check' : 'fa-solid fa-plus'"
                                class="text-sm scale-100 opacity-700 transition-all ease-in-out duration-300"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApIHead from '@/ApI/AxiosInterCeptor';
import { onMounted, ref } from 'vue';
import Loading from 'vue-loading-overlay';
import { UseApi } from './Composbles/UseApi';
import { useAuthStore } from '@/stores/authStore';
import { toast } from "vue3-toastify";
import { useCartStore } from '@/stores/CartStore';
import RatingStar from './RatingStar.vue';
import { useWishlistStore } from '@/stores/Wishlist/wishlist';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const apiData = ref([]);
const AddCart = ref({});
const router = useRouter();
function getApiData() {
    isLoading.value = true;
    ApIHead({
        method: "get",
        url: "/v1/products",
    }).then((response) => {
        apiData.value = response.data.data;
    }).catch((error) => {
        console.error("API Error:", error.message);
    }).finally(() => {
        isLoading.value = false
    });
}
const authstore = useAuthStore()
const cartStore = useCartStore()
const wishlist = useWishlistStore()
const { fetchData, error, data } = UseApi();
// async function addProductCart(product) {
//     if (authstore.isLoggedIn) {
//         const res = await fetchData({
//             method: "post",
//             url: "/v2/cart",
//             data: {
//                 productId: product.id,
//                 quantity: 1,
//             },
//         });
//         console.log("From res:", res);

//     } else {
//         const existingCart = localStorage.getItem("guest-item");
//         if (existingCart) {
//             const cartItem = [...JSON.parse(existingCart), product];
//             localStorage.setItem("guest-item", JSON.stringify(cartItem));
//         } else {
//             localStorage.setItem("guest-item", JSON.stringify([product]));
//         }
//         console.log("From ProudectsCards:", JSON.parse(localStorage.getItem("guest-item")));
//     };
//     AddCart.value[product.id] = true;
//     setTimeout(() => {
//         AddCart.value[product.id] = false;
//     }, 2000);

//     const toastMaessageSucces = authstore.isLoggedIn ? data.value?.message : "Product added to cart successfully Guest!";

//     if (error.value) {
//         toast(error.value, {
//             theme: "auto",
//             type: "error",
//             transition: "zoom",
//             dangerouslyHTMLString: true
//         });

//     } else {
//         toast(toastMaessageSucces, {
//             type: "success",
//             transition: "zoom",
//             dangerouslyHTMLString: true
//         })
//     }

// }
async function addProductCart(product) {
    AddCart.value[product.id] = true;
    try {
        if (authstore.isLoggedIn) {
            const res = await fetchData({
                method: "post",
                url: "/v2/cart",
                data: {
                    productId: product.id,
                    quantity: 1,
                },
            });
            cartStore.cartDate = res || [];
            cartStore.numOfCartItems = res?.numOfCartItems || 0;
            cartStore.cartId = res?.id || [];

            toast(res?.data?.message || "Product added successfully!", {
                type: "success",
                transition: "zoom",
            });
        } else {
            const existingCart = localStorage.getItem("guestCart");
            const cartItem = existingCart
                ? [...JSON.parse(existingCart), product]
                : [product];

            localStorage.setItem("guestCart", JSON.stringify(cartItem));
            toast("Product added successfully (Guest) !", {
                type: "success",
                transition: "zoom",
            });
        }
    } catch (err) {
        AddCart.value[product.id] = false;
        const message =
            err.response?.data?.message ||
            "Something went wrong";

        toast(message, {
            type: "error",
            transition: "zoom",
        });
    }
    setTimeout(() => {
        AddCart.value[product.id] = false;
    }, 2000);
}

function getDiscountPercentage(product) {
    if (!product.priceAfterDiscount) return 0;
    return Math.round(((product.price - product.priceAfterDiscount) / product.price) * 100);
}
async function handleWishlist(productId) {
    try {
        if (isInWishlist(productId)) {
            await wishlist.removeFromWishlist(productId);
            toast("Remove from Wishlist", { type: "info" })
        } else {
            await wishlist.addToWishlist(productId);
            toast("Added to Wishlist", { type: "success" });
        }
    } catch (err) {
        toast(err?.message || "Something went wrong", { type: "error" })
    }
}
function isInWishlist(productId) {
    return wishlist.wishlistItem?.some(item => item.id === productId || item._id === productId);
}
onMounted(() => {
    getApiData();
});
</script>