<template>

    <div class="space-y-6">
        <div class="mb-6">
            <h2 class="text-xl font-bold text-gray-900">Account Settings</h2>
            <p class="text-gray-500 text-sm mt-1">Update your profile information and change your password
            </p>
        </div>
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="p-6 sm:p-8 border-b border-gray-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                        <i class="fa-solid fa-user text-2xl text-green-600"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-900">Profile Information</h3>
                        <p class="text-sm text-gray-500">Update your personal details</p>
                    </div>
                </div>
                <form class="space-y-5" @submit.prevent="updateProfile">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input placeholder="Enter your name" v-model="form.name"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                            required="" type="text" value="">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input placeholder="Enter your email" v-model="form.email"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                            required="" type="email" value="">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input placeholder="01xxxxxxxxx" v-model="form.phone"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                            required="" type="tel" value="">
                    </div>
                    <div class="pt-4">
                        <button type="submit" :disabled="isLoading"
                            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25">
                            <span v-if="!isLoading"><i class="fa-solid fa-floppy-disk"></i> Save Changes</span>
                            <span v-if="isLoading"><i class="fa-solid fa-spinner fa-spin mx-1"></i>Saving...</span>
                        </button>
                    </div>
                </form>
            </div>
            <div class="p-6 sm:p-8 bg-gray-50">
                <h3 class="font-bold text-gray-900 mb-4">Account Information</h3>
                <div class="space-y-3 text-sm">
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500">User ID</span>
                        <span class="font-mono text-gray-700">{{ authstore.userId }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-gray-500">Role</span>
                        <span class="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">{{
                            authstore.user.role }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="p-6 sm:p-8">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                        <i class="fa-solid fa-lock text-2xl text-amber-600"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-900">Change Password</h3>
                        <p class="text-sm text-gray-500">Update your account password</p>
                    </div>
                </div>
                <form class="space-y-5" @submit.prevent="changePassword">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <div class="relative">
                            <input placeholder="Enter your current password" v-model="currentPassword"
                                class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                required="" type="password" value="">
                            <button type="button"
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            </button>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">New
                            Password</label>
                        <div class="relative">
                            <input placeholder="Enter your new password" v-model="password"
                                class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                required="" minlength="6" type="password" value="">
                            <button type="button"
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            </button>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                        <div class="relative">
                            <input placeholder="Confirm your new password" v-model="rePassword"
                                class="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                required="" type="password" value="">
                            <button type="button"
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            </button>
                        </div>
                    </div>
                    <div class="pt-4">
                        <button type="submit" :disabled="isLoading"
                            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25">
                            <span v-if="!isLoading"> <i class="fa-solid fa-lock"></i>Change Password</span>
                            <span v-else><i class="fa-solid fa-spinner fa-spin mx-1"></i>Changed...</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { UseApi } from '../Composbles/UseApi';
import { toast } from "vue3-toastify";
import { useAuthStore } from '@/stores/authStore';

const authstore = useAuthStore()
const { fetchData, isLoading } = UseApi()
const currentPassword = ref('')
const password = ref('');
const rePassword = ref('')

const form = ref({
    name: authstore.user?.name || "",
    email: authstore.user?.email || "",
    phone: authstore.user?.phone || "",
})

async function updateProfile() {
    try {
        const data = await fetchData({
            method: 'put',
            url: "/v1/users/updateMe",
            data: form.value,
        });
        console.log("API RESPONSE:", data);
        if (data?.message === 'success') {
            toast.success("Profile updated successfully");
            authstore.user = {
                ...authstore.user,
                ...form.value,
            };
            localStorage.setItem("user", JSON.stringify(authstore.user));
        } else {
            toast.error(data?.message || "Failed to update profile");
        }
    } catch (error) {
        console.log("ERROR FULL:", error);
        toast.error(error?.response?.data?.message || "Error occurred");
    }
}
async function changePassword() {
    if (password.value !== rePassword.value) {
        toast.error("Passwords do not match")
        return;
    }
    try {
        const data = await fetchData({
            method: "put",
            url: "/v1/users/changeMyPassword",
            data: {
                currentPassword: currentPassword.value,
                password: password.value,
                rePassword: rePassword.value,
            }
        });
        if (data?.message === "success") {
            toast.success('Password change successfully');
            localStorage.setItem("token", data.token)
            currentPassword.value = "";
            password.value = "";
            rePassword.value = "";
        } else {
            toast.error(data.message || 'Fild to Change Password');
        }
    } catch (error) {
        toast.error(error?.response?.data?.message || error?.message || 'Error occurred')
        console.log(error?.response?.data)
    }
}
</script>

<style lang="scss" scoped></style>