<template>
    <div class="w-full">
        <div class="bg-white rounded-2xl shadow-xl px-10 lg:p-12">
            <div class="text-center p-8 mb-8">
                <div class="flex items-center justify-center mb-4">
                    <span class="text-3xl font-bold text-green-600">
                        Fresh<span class="text-gray-800">Cart</span>
                    </span>
                </div>
                <h1 v-if="step === 1" class="text-2xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
                <h1 v-if="step === 2" class="text-2xl font-bold text-gray-800 mb-2">Check Your Email</h1>
                <p v-if="step === 1" class="text-gray-600">No worries, we'll send you RouterLink reset code</p>
                <p v-if="step === 2" class="text-gray-600">Enter the 6-digit code sent to {{ email }}</p>
                <h1 v-if="step === 3" class="text-2xl font-bold text-gray-800 mb-2">Create New Password</h1>
                <p v-if="step === 3" class="text-gray-600">Your new password must be different from previous passwords
                </p>
            </div>
            <div v-if="step !== 4" class="flex items-center justify-center mb-8">
                <div class="flex items-center">
                    <div :class="step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'"
                        class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300  text-white ring-4 ring-green-100">
                        <i v-if="step > 1" class="fa-solid fa-check"></i>
                        <i v-else class="fa-solid fa-envelope"></i>

                    </div>
                    <div :class="step >= 2 ? 'bg-green-600' : 'bg-gray-200'"
                        class="w-16 h-0.5 mx-2 transition-all duration-300">
                    </div>
                </div>
                <div class="flex items-center">
                    <div :class="step >= 2 ? ' bg-green-600 text-white' : 'bg-gray-100 text-gray-400'" class=" w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                        transition-all duration-300">
                        <i v-if="step > 2" class="fa-solid fa-check"></i>
                        <i v-else class="fa-solid fa-key"></i>

                    </div>
                    <div :class="step >= 2 ? 'bg-green-600' : 'bg-gray-200'"
                        class="w-16 h-0.5 mx-2 transition-all duration-300">
                    </div>
                </div>
                <div class="flex items-center">
                    <div :class="step >= 3 ? ' bg-green-600 text-white' : 'bg-gray-100 text-gray-400'"
                        class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300">
                        <i v-if="step > 3" class="fa-solid fa-check"></i>
                        <i v-else class="fa-solid fa-lock"></i>

                    </div>
                </div>
            </div>
            <form class="space-y-6" v-if="step === 1" @submit.prevent="sendEmail">
                <div>
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>

                    <div class="relative">
                        <input id="email" v-model="email"
                            class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="Enter your email address" type="email" name="email">
                        <i class="fa-solid fa-envelope absolute left-4 top-5 -translate-y-0.5 text-gray-400"></i>
                    </div>
                </div>
                <button type="submit" :disabled="isLoading"
                    class="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold  shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="!isLoading">Send Reset Code</span>
                    <span v-else><i class="fa-solid fa-spinner fa-spin mx-1"></i>Sending...</span>
                </button>
                <div class="text-center">
                    <RouterLink
                        class="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                        href="/login">
                        <i class="fa-solid fa-arrow-left"></i>Back to Sign In
                    </RouterLink>
                </div>
            </form>
            <form class="space-y-6" v-if="step === 2" @submit.prevent="verifyCode">
                <div>
                    <label for="resetCode" class="block text-sm font-semibold text-gray-700 mb-2">
                        Verification Code</label>
                    <div class="relative">
                        <input id="resetCode" v-model="code" maxlength="6"
                            class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all text-center text-2xl tracking-[0.5em] font-mono"
                            placeholder="••••••" type="text" name="resetCode">
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-sm text-gray-500">Didn't receive the code?
                        <button type="button" @click="resendCode"
                            class="text-green-600 hover:text-green-700 font-semibold transition-colors">Resend Code
                        </button>
                    </p>
                </div>
                <button type="submit"
                    class="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="!isLoading">Verify Code</span>
                    <span v-else><i class="fa-solid fa-spinner fa-spin mx-1"></i>Verifing...</span>
                </button>
                <div class="text-center">
                    <button type="button" @click="step = 1"
                        class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 font-medium transition-colors">
                        <i class="fa-solid fa-arrow-left"></i>
                        Change email address
                    </button>
                </div>
            </form>
            <form class="space-y-6" v-if="step === 3" @submit.prevent="resetPassword">
                <div>
                    <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                    <div class="relative">
                        <input id="password" autocomplete="new-password" v-model="newPassword"
                            class="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="Enter new password" type="password" name="password">
                        <i class="fa-solid fa-lock  absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <button type="button"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        </button>
                    </div>
                </div>
                <div>
                    <label for="confirmPassword" class="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                    </label>
                    <div class="relative">
                        <input id="confirmPassword"
                            class="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="Confirm new password" type="password" name="confirmPassword">
                        <i class="fa-solid fa-lock  absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <button type="button"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        </button>
                    </div>
                </div>
                <button type="submit"
                    class="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="!isLoading">Reset Password</span>
                    <span v-else><i class="fa-solid fa-spinner fa-spin mx-1"></i>Resetting Password...</span>
                </button>
            </form>

            <div class="text-center mt-8 pt-6 border-t border-gray-100" v-if="step === 1">
                <p class="text-gray-600">
                    Remember your password?
                    <RouterLink
                        class="text-green-600 hover:text-green-700 hover:underline font-semibold transition-colors"
                        to="/login">Sign In
                    </RouterLink>
                </p>
            </div>
            <!-- SUBMIT -->
            <div v-if="step === 4" class="text-center space-y-6">
                <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <i class="fa-solid fa-check text-green-600 text-3xl"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">Password Reset!</h2>
                    <p class="text-gray-600">Your password has been successfully reset. You can now sign in with your
                        new password.</p>
                </div>
                <RouterLink to="/login"
                    class="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl">
                    Back
                    to Sign In
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { UseApi } from '../Composbles/UseApi';
import { toast } from "vue3-toastify";
const { fetchData, isLoading } = UseApi();

const step = ref(1);
const email = ref("");
const code = ref("")
const newPassword = ref("")


async function sendEmail() {
    try {
        const data = await fetchData({
            method: "post",
            url: "/v1/auth/forgotPasswords",
            data: {
                email: email.value
            }
        })
        if (data?.statusMsg === "success") {
            toast.success(data.massage || 'Reset code sent to your email')
            step.value = 2
        } else {
            toast.error(data.massage || 'Somthing went Successfully')
        }
    } catch (error) {
        toast.error(data.response?.data?.massage || 'Error occurred')
    }
}
async function verifyCode() {
    try {
        const data = await fetchData({
            method: "post",
            url: "/v1/auth/verifyResetCode",
            data: {
                resetCode: code.value
            }
        })

        if (data?.status === "Success") {
            toast.success(data.message || "Code verified!")
            step.value = 3
        } else {
            toast.error(data.message || "Invalid code")
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Verification failed")
    }
}
async function resendCode() {
    try {
        const data = await fetchData({
            method: "post",
            url: "/v1/auth/forgotPasswords",
            data: {
                email: email.value
            }
        });
        if (data?.statusMsg === "success") {
            toast.success(data.message || "Code resent successfully")
        } else {
            toast.error(data.message || "Failed to resend code")
        }
    } catch (error) {
        toast.error(error.response?.data?.message || "Error occurred")
    }
}
async function resetPassword() {
    try {
        const data = await fetchData({
            method: "put",
            url: "/v1/auth/resetPassword",
            data: {
                email: email.value,
                newPassword: newPassword.value,
            }
        })
        console.log(data, "password") 
        if (data?.token) {
            toast.success("Password reset successfully")
            step.value = 4
        } else {
            toast.error(data.message || "Failed to reset password")
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Error occurred")
    }
}
</script>

<style lang="scss" scoped></style>