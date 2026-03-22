<template>
    <div class="flex items-center justify-center">
        <loading v-model:active="isLoading" :is-full-page="true" loader='bars' color="green" />
    </div>
    <div>
        <div class="flex items-center justify-between mb-6">
            <div>
                <h2 class="text-xl font-bold text-gray-900">My Addresses</h2>
                <p class="text-gray-500 text-sm mt-1">Manage your saved delivery addresses</p>
            </div>
            <button @click="showModel = true"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">
                <i class="fa-solid fa-plus text-sm"></i>Add Address
            </button>
        </div>
        <div v-if="ExistingAddress.length === 0" class="bg-white rounded-3xl border border-gray-100 p-12 text-center">
            <div class="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                <i class="fa-solid fa-location-dot text-3xl text-gray-400"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">No Addresses Yet</h3>
            <p class="text-gray-500 mb-6 max-w-sm mx-auto">Add your first delivery address to make checkout
                faster and easier.</p>
            <button @click="showModel = true"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">
                <i class="fa-solid fa-plus"></i>Add Your First Address</button>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="address in ExistingAddress" :key="address._id"
                class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 group">
                <div class="flex items-start justify-between gap-4">
                    <div class="flex items-start gap-4 flex-1">
                        <div
                            class="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                            <i class="fa-solid fa-location-dot text-lg text-green-600"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-bold text-gray-900 mb-1">{{ address.name }}</h3>
                            <p class="text-sm text-gray-600 mb-3 line-clamp-2">{{ address.details }}</p>
                            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <span class="flex items-center gap-1.5">
                                    <i class="fa-solid fa-phone text-sm"></i>{{ address.phone }}
                                </span>
                                <span class="flex items-center gap-1.5">
                                    <i class="fa-solid fa-city text-sm"></i> {{ address.city }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button
                            class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition-colors">
                            <i class="fa-solid fa-pen text-sm"></i>
                        </button>
                        <button @click="deleteAddress(address._id)" :disabled="deleteItem === address._id"
                            class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors disabled:opacity-50">
                            <span v-if="deleteItem !== address._id"> <i class="fa-solid fa-trash text-sm"></i></span>
                            <span v-else><i class="fa-solid fa-spinner fa-spin mx-1"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4" v-if="showModel">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div
            class="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-gray-900">Add New Address</h2>
                <button @click="showModel = false"
                    class="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors">
                    <i class="fa-solid fa-xmark"></i></button>
            </div>
            <form class="space-y-5" @submit.prevent="addAddress">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Address Name</label>
                    <input placeholder="e.g. Home, Office" v-model="form.name"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                        required type="text" value="">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                    <textarea v-model="form.details"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all resize-none"
                        placeholder="Street, building, apartment..." required></textarea>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input placeholder="01xxxxxxxxx" v-model="form.phone"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                            required type="tel" value="">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input placeholder="Cairo" v-model="form.city"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                            required type="text" value="">
                    </div>
                </div>
                <div class="flex items-center gap-3 pt-4">
                    <button type="button" @click="showModel = false"
                        class="flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors">Cancel
                    </button>
                    <button type="submit" :disabled="!form.name || !form.details || !form.phone || !form.city || isLoading"
                        class="flex-1 py-3 px-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25">
                        <span v-if="!isLoading">Add Address</span>
                        <span v-if="isLoading"><i class="fa-solid fa-spinner fa-spin mx-1"></i>Saving...</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { UseApi } from '../Composbles/UseApi';
import Loading from 'vue-loading-overlay';
import { toast } from "vue3-toastify";
const { fetchData, isLoading } = UseApi()
const ExistingAddress = ref([])
const showModel = ref(false)
const deleteItem = ref(null)
const form = ref({
    name: "",
    details: "",
    phone: "",
    city: "",
})
async function addAddress() {
    console.log(form.value, "FORM DATA")
    try {
        const data = await fetchData({
            method: 'post',
            url: "/v1/addresses",
            data: { ...form.value },
        });
        if (data?.status === "success") {
            toast.success("Address added successfully");
            ExistingAddress.value = data?.data || [];
            showModel.value = false;
            form.value = {
                name: "",
                details: "",
                phone: "",
                city: "",
            };
        } else {
            toast.error(data?.message || "Failed");
        }
    } catch (error) {
        toast.error(error?.response?.data?.message || "Error")
    }
}
async function deleteAddress(id) {
    deleteItem.value = id;
    try {
        const data = await fetchData({
            method: "delete",
            url: `/v1/addresses/${id}`,
        });
        if (data?.status === 'success') {
            toast.success("Address Delete successfully");
            ExistingAddress.value = ExistingAddress.value.filter((item) => item._id !== id);
        } else {
            toast.error(data?.message || "Delete failed");
        }
    } catch (error) {
        toast.error(error?.response.data?.message || "ERROR")
    } finally {
        deleteItem.value = null
    }
}
onMounted(async () => {
    try {
        const data = await fetchData({
            method: "get",
            url: "/v1/addresses",
        });
        if (data?.status === 'success') {
            ExistingAddress.value = data?.data || [];
        }
    } catch (error) {
        console.log(error)
    }

})
</script>

<style lang="scss" scoped></style>