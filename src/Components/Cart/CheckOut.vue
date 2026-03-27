<template>
    <div class="bg-gradient-to-b from-gray-50 to-white min-h-screen py-8">
        <div class="container mx-auto px-4">
            <div class="mb-8 mx-4">
                <nav class="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <RouterLink :to="{ name: 'home' }" class="hover:text-green-600 transition">Home
                    </RouterLink>
                    <span class="text-gray-300">/</span>
                    <RouterLink :to="{ name: 'CartShop' }" class="hover:text-green-600 transition-colors">Cart
                    </RouterLink>
                    <span class="text-gray-300">/</span>
                    <span class="text-gray-900 font-medium">Checkout</span>
                </nav>
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <span
                                class="bg-gradient-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                                <i class="fa-solid fa-receipt"></i>
                            </span>
                            Complete Your Order
                        </h1>
                        <p class="text-gray-500 mt-2">Review your items and complete your purchase</p>
                    </div>
                    <RouterLink :to="{ name: 'CartShop' }"
                        class="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-100 transition-allpx-4 py-2 bg-gray-50 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                        <i class="fa-solid fa-arrow-left"></i>
                        Back to Cart
                    </RouterLink>

                </div>
            </div>
            <Form :validation-schema="shippingSchema" @submit="onShippingSumbit">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-9">
                    <div class="lg:col-span-2 space-y-6">
                        <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                                <h2 class="text-lg font-bold text-white flex items-center gap-2">
                                    <i class="fa-solid fa-house"></i>
                                    Shipping Address
                                </h2>
                                <p class="text-green-100 text-sm mt-1">Where should we deliver your order?</p>
                            </div>
                            <div class="p-6 space-y-5">
                                <div class="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div
                                        class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        <i class="fa-solid fa-circle-info text-blue-600 text-sm"></i>
                                    </div>
                                    <div>
                                        <p class="text-sm text-blue-800 font-medium">Delivery Information</p>
                                        <p class="text-xs text-blue-600 mt-0.5">Please ensure your address is accurate
                                            for smooth delivery</p>
                                    </div>
                                </div>
                                <div>
                                    <label for="city" class="block text-sm font-semibold text-gray-700 mb-2">City<span
                                            class="text-red-500">*</span>
                                    </label>
                                    <div class="relative">
                                        <div
                                            class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <i class="fa-solid fa-city text-gray-500 text-sm"></i>
                                        </div>
                                        <Field type="text" id="city" name="city"
                                            placeholder="e.g. Cairo, Alexandria, Giza"
                                            class="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                            as="input" />
                                    </div>
                                    <ErrorMessage name="city" class="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <label for="details" class="block text-sm font-semibold text-gray-700 mb-2">
                                        Street Address
                                        <span class="text-red-500">*</span>
                                    </label>
                                    <div class="relative">
                                        <div
                                            class="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <i class="fa-solid fa-location-dot text-gray-500 text-sm"></i>
                                        </div>
                                        <Field as="textarea" id="details" rows="3"
                                            class="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                                            placeholder="Street name, building number, floor, apartment..."
                                            name="details" />
                                    </div>
                                    <ErrorMessage name="details" class="text-red-500 text-sm mt-1" />
                                </div>
                                <div>
                                    <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                        <span class="text-red-500">*</span>
                                    </label>
                                    <div class="relative">
                                        <div
                                            class="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <i class="fa-solid fa-phone text-gray-500 text-sm"></i>
                                        </div>
                                        <Field id="phone" name="phone" placeholder="01xxxxxxxxx"
                                            class="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100" />
                                        <span
                                            class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">Egyptian
                                            numbers only
                                        </span>
                                    </div>
                                    <ErrorMessage name="phone" class="text-red-500 text-sm mt-3" />
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                            <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                                <h2 class="text-lg font-bold text-white flex items-center gap-2">
                                    <i class="fa-solid fa-wallet"></i>Payment Method
                                </h2>
                                <p class="text-green-100 text-sm mt-1">Choose how you'd like to pay</p>
                            </div>
                            <div class="p-6 space-y-4">
                                <button type="button" @click="selectPaymentMethod('cash')"
                                    :class="selectMethod === 'cash' ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm' : 'border-gray-200 bg-white'"
                                    class="w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4">
                                    <div :class="selectMethod === 'cash' ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30' : 'bg-gray-100 text-gray-500'"
                                        class="w-14 h-14 rounded-xl flex items-center justify-center transition-all ">
                                        <i class="fa-solid fa-money-bill text-lg"></i>
                                    </div>
                                    <div class="flex-1 text-left">
                                        <h3 class="font-bold"
                                            :class="selectMethod === 'cash' ? 'text-green-700' : 'text-gray-700'">Cash
                                            on Delivery</h3>
                                        <p class="text-sm text-gray-500 mt-0.5">Pay when your order arrives at your
                                            doorstep</p>
                                    </div>
                                    <div class="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                                        :class="selectMethod ? 'border-2 border-gray-200' : ' bg-green-600 text-white'">
                                        <i v-if="selectMethod === 'cash'"
                                            class="fa-solid fa-check text-sm text-green-600"></i>
                                    </div>
                                </button>
                                <button type="button" @click="selectPaymentMethod('online')"
                                    :class="selectMethod === 'online' ? 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm' : 'border-gray-200 bg-white'"
                                    class="w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 ">
                                    <div :class="selectMethod === 'online' ? 'bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30' : 'bg-gray-100 text-gray-500'"
                                        class="w-14 h-14 rounded-xl flex items-center justify-center transition-all">
                                        <i class="fa-solid fa-credit-card text-lg"></i>
                                    </div>
                                    <div class="flex-1 text-left">
                                        <h3 class="font-bold"
                                            :class="selectMethod === 'online' ? 'text-green-700' : 'text-gray-700'">Pay
                                            Online</h3>
                                        <p class="text-sm text-gray-500 mt-0.5">Secure payment with Credit/Debit Card
                                            via Stripe</p>
                                        <div class="flex items-center gap-2 mt-2">
                                            <img src="/images/visa.png" alt="Visa" class="h-6">
                                            <img src="/images/mastercard.png" alt="MasterCard" class="h-6">
                                            <img src="/images/amex.png" alt="Amex" class="h-6">
                                        </div>
                                    </div>
                                    <div class="w-7 h-7 rounded-full  flex items-center justify-center transition-all"
                                        :class="selectMethod ? 'border-2 border-red-200' : 'bg-green-600 text-white'">
                                        <i v-if="selectMethod === 'online'"
                                            class="fa-solid fa-check text-sm text-green-700"></i>
                                    </div>
                                </button>
                                <div
                                    class="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                                    <div
                                        class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <i class="fa-solid fa-shield-halved text-green-600"></i>
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-green-800">Secure & Encrypted</p>
                                        <p class="text-xs text-green-600 mt-0.5">Your payment info is protected with
                                            256-bit SSL encryption </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ORDER SUMMARY -->
                    <div class="lg:col-span-1">
                        <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                            <OrderSummary :numOfCartItems="numOfCartItems" :totalCartPrice="totalCartPrice"
                                :isCheckout="true" />
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </div>
</template>

<script setup>
import * as yup from "yup"
import { ErrorMessage, Field, Form } from 'vee-validate';
import OrderSummary from './OrderSummary.vue';
import { computed, ref } from 'vue';
import { UseApi } from "../Composbles/UseApi";
import { useCartStore } from "@/stores/CartStore";

const cartstore = useCartStore();
const { fetchData } = UseApi();


async function onShippingSumbit(value) {
    const appurl = window.location.origin;
    const data = await fetchData({
        url: `/v1/orders/checkout-session/${cartstore?.cartId}?url=${appurl}`,
        method: "POST",
        data: value,
    });
    if (data) {
        const url = data.session.url;
        window.location.href = url;
    }
}

const shippingSchema = yup.object({
    city: yup.string().required('City name must be at least 2 characters'),
    details: yup.string().required('Address details must be at least 10 characters'),
    phone: yup.string().required('Please enter a valid Egyptian phone number').matches(/^01[0125][0-9]{8}$/, 'Enter a valid Egyption phone number'),
})


// Payment method
const selectMethod = ref('cash');
function selectPaymentMethod(method) {
    selectMethod.value = method;
}
const numOfCartItems = computed(() => {
    return cartstore.numOfCartItems || 0
})
const totalCartPrice = computed(() => {
    return cartstore.cartDate?.data?.totalCartPrice || 0
})

</script>

<style lang="scss" scoped></style>