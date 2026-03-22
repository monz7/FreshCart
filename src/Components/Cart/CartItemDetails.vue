<template>
    <div class="lg:col-span-2">
        <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
        <div class="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
            <RouterLink :to="{ name: 'home' }"
                class="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2">
                <i class="fa-solid fa-arrow-left"></i>
                Continue Shopping
            </RouterLink>
            <button @click="ClearAllItemCard"
                class="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors">
                <i class="fa-solid fa-trash"></i>
                <span>Clear all items</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore';
import { UseApi } from '../Composbles/UseApi';
import CartItem from './CartItem.vue';
import Swal from 'sweetalert2';

const props = defineProps({
    cartItems: {
        type: Array,
        default: () => [],
    }
});
const { fetchData } = UseApi()

const cartStore = useCartStore()
async function ClearAllItemCard() {
    const data = await fetchData({
        method: 'delete',
        url: '/v2/cart',
    });
    if (data) {
        cartStore.cartDate = data || [];
        cartStore.numOfCartItems = data.numOfCartItems || 0;
        cartStore.cartId = data.id || [];
    }


    // cartStore.cartDate = data || [];
    // cartStore.numOfCartItems = data.numOfCartItems || 0;
    // cartStore.cartId = data.id || [];
    // Swal.fire({
    //     title: 'Clear Your Cart? ',
    //     text: 'All items will be removed from your cart. This action cannot be undone.',
    //     iconHtml: `<div class="flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
    //         <i class="fa-solid fa-cart-shopping text-red-500 text-2xl"></i>
    //     </div>`,
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes, Clear All',
    //     cancelButtonText: 'Keep Shopping',
    //     buttonsStyling: false,
    //     customClass: {
    //         popup: 'rounded-xl p-10',
    //         title: 'text-lg font-semibold',
    //         confirmButton: 'mx-3 bg-red-500  hover:bg-red-600 text-white font-semibold py-3 px-6  rounded-xl transition-all shadow-lg shadow-red-500/20',
    //         cancelButton: 'bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all'
    //     },
    //     reverseButtons: true
    // }).then(async (result) => {
    //     if (result.isConfirmed) {
    //         try {
    //             await fetchData({
    //                 method: 'delete',
    //                 url: '/v2/cart'
    //             })
    //             localStorage.removeItem('cartItems');
    //             emit('getUserCart');
    //         } catch (error) {
    //             Swal.fire('Error!', 'Something went wrong while clearing your cart.', 'error');
    //             console.error('Error clearing cart:', error);
    //         }
    //     }

    // });


}

</script>

<style scoped></style>