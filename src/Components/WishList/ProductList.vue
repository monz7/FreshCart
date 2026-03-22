<template>
    <div class="container mx-auto px-24 py-8">
        <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div
                class="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                <div class="col-span-6">Product</div>
                <div class="col-span-2 text-center">Price</div>
                <div class="col-span-2 text-center">Status</div>
                <div class="col-span-2 text-center">Actions</div>
            </div>
            <div class="divide-y divide-gray-100">
                <div v-for="product in wishlist.wishlistItem" :key="product.id"
                    class="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
                    <div class="md:col-span-6 flex items-center gap-4">
                        <RouterLink to=""
                            class="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0">
                            <img :src="product.imageCover" alt="" class="w-full h-full object-contain p-2">
                        </RouterLink>
                        <div class="min-w-0">
                            <RouterLink to=""
                                class="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2">
                                {{ product.title }}
                            </RouterLink>
                            <p class="text-sm text-gray-400 mt-1"> {{ product.category.name }}</p>
                        </div>
                    </div>
                    <div class="md:col-span-2 flex md:justify-center items-center gap-2">
                        <span class="md:hidden text-sm text-gray-500">Price:</span>
                        <div class="text-right md:text-center">
                            <span class="text-lg font-bold block"
                                :class="product.priceAfterDiscount ? 'text-gray-900' : 'text-gray-900'">
                                {{ product.priceAfterDiscount || product.price }} EGP
                            </span>
                            <span v-if="product.priceAfterDiscount" class="text-sm line-through text-gray-400">
                                {{ product.price }} EGP
                            </span>
                        </div>
                    </div>
                    <div class="md:col-span-2 flex md:justify-center">
                        <span class="md:hidden text-sm text-gray-500 mr-2">Status:</span>
                        <span
                            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            In Stock
                        </span>
                    </div>
                    <div class="md:col-span-2 flex items-center gap-2 md:justify-center">
                        <button @click="AddToCart(product)"
                            :class="isInCart(product.id) ? 'text-gray-700 bg-gray-100 hover:bg-gray-200' : 'bg-green-600 text-white hover:bg-green-700'"
                            class="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ">
                            <i v-if="!isInCart(product.id)" class="fa-solid fa-cart-shopping text-sm"></i>
                            <span v-if="!isInCart(product.id)" class="md:hidden lg:inline">Add to Cart</span>
                            <span v-else class="md:hidden lg:inline">View Cart</span>
                            <i v-if="isInCart(product.id)" class="fa-solid fa-check text-sm text-green-600"></i>
                        </button>
                        <button @click="removeFromWishlist(product.id)"
                            class="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50">
                            <i v-if="!isLoading" class="fa-solid fa-trash text-sm"></i>
                            <i v-else class="fa-solid fa-spinner fa-spin"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8 flex items-center justify-between">
            <RouterLink to="/shop" class="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors">
                <i class="fa-solid fa-arrow-left text-sm"></i>
                Continue Shopping
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/Wishlist/wishlist';
import { onMounted, ref } from 'vue';
import { UseApi } from '../Composbles/UseApi';
import { useAuthStore } from '@/stores/authStore';
import { useCartStore } from '@/stores/CartStore';
import { toast } from "vue3-toastify";

const authstore = useAuthStore()
const cartstore = useCartStore()
const { isLoading, fetchData } = UseApi()
const AddCart = ref({});

function removeFromWishlist(productId) {
    wishlist.removeFromWishlist(productId)
}
const wishlist = useWishlistStore();


async function AddToCart(product) {
    try {
        if (authstore.isLoggedIn) {
            const res = await fetchData({
                method: "post",
                url: "/v2/cart",
                data: {
                    productId: product.id,
                    quantity: 1,
                }
            });
            cartstore.cartDate = res || [];
            cartstore.numOfCartItems = res?.numOfCartItems || 0;
            cartstore.cartId = res?.id || [];
            cartstore.getUserCart();
            AddCart.value[product.id] = true;

            toast(res?.data?.message || "Product added successfully!", {
                type: "success",
                transition: "zoom",
            });
        } else {
            const existingCart = localStorage.getItem("guest-item");
            const cartItem = existingCart
                ? [...JSON.parse(existingCart), product]
                : [product];

            localStorage.setItem("guest-item", JSON.stringify(cartItem));
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
function isInCart(productId) {
    if (authstore.isLoggedIn) {
        return cartstore.cartDate?.data?.products?.some(p => (p.product?.id || p.id) === productId);
    } else {
        const cart = JSON.parse(localStorage.getItem("guestCart") || "[]");
        return cart.some(p => (p.product?.id || p.id) === productId);
    }

}

onMounted(() => {
    wishlist.getWishlist()
})
</script>

<style lang="scss" scoped></style>