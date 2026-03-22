<template>
    <div class="bg-white rounded-2xl shadow-lg px-6 py-10">
        <p v-if="error?.msg" class="text-red-600 text-xl text-center mb-4">
            {{ error?.param }}{{ error?.msg }}
        </p>
        <p class="text-green-600 text-xl text-center mb-4">
            {{ successMsg }}
        </p>
        <h2 class="text-center text-3xl font-semibold mb-2">Create Your Account</h2>
        <p class="text-center">Start your fresh journey with us today</p>
        <div class="register-options flex gap-2 *:grow my-7">
            <button @click="OpenGoogle"
                class="bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center py-2 items-center rounded-md disabled:opacity-50 cursor-pointer">
                <i class="fa-brands fa-google me-2 text-red-600"></i>Google
            </button>
            <button @click="OpenFacebook"
                class="bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center rounded-md disabled:opacity-50 cursor-pointer">
                <i class="fa-brands fa-facebook me-2 text-blue-600"></i>Facebook
            </button>
        </div>
        <div class="flex items-center gap-4 mb-1">
            <hr class="grow border-gray-300">
            <span class="text-gray-500">or</span>
            <hr class="grow border-gray-300">
        </div>
        <Form class="space-y-6" v-slot="{ meta, errors }" :validation-schema="validationSchema" @submit="submitForm">
            <div class="flex flex-col gap-2">
                <label for="name" class="block text-sm font-medium text-gray-700">Name*</label>
                <Field type="text" id="name" name="name" placeholder="Ali" autoComplete="name" aria-invalid="false"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-600 focus:border-green-600 focus:outline-none" />
                <ErrorMessage name="name">
                    <template #default="{ message }">
                        <span class="text-red-500 -mt-0.5 text-sm" an>*{{ message }}</span>
                    </template>
                </ErrorMessage>
            </div>
            <div class="flex flex-col gap-2">
                <label for="email" class="block text-sm font-medium text-gray-700">Email*</label>
                <Field type="email" id="email" name="email" placeholder="Ali@example.com" autoComplete="email"
                    aria-invalid="false"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-600 focus:border-green-600 focus:outline-none" />
                <ErrorMessage name="email">
                    <template #default="{ message }">
                        <span class="text-red-500 -mt-0.5 text-sm">*{{ message }}</span>
                    </template>
                </ErrorMessage>
            </div>
            <div class="flex flex-col gap-2">
                <label for="password" class="block text-sm font-medium text-gray-700">Password*</label>
                <Field type="password" id="password" name="password" placeholder="Create a strong password"
                    aria-invalid="false" autoComplete="new-password"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-600 focus:border-green-600 focus:outline-none" />
                <ErrorMessage name="password">
                    <template #default="{ message }">
                        <span class="text-red-500 -mt-0.5 text-sm">*{{ message }}</span>
                    </template>
                </ErrorMessage>
            </div>
            <div class="flex flex-col gap-2">
                <label for="rePassword" class="block text-sm font-medium text-gray-700">Confirm Password*</label>
                <Field type="password" id="rePassword" name="rePassword" placeholder="Confirm your password"
                    autoComplete="new-password" aria-invalid="false"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-600 focus:border-green-600 focus:outline-none" />
                <ErrorMessage name="rePassword">
                    <template #default="{ message }">
                        <span class="text-red-500 -mt-0.5 text-sm">*{{ message }}</span>
                    </template>
                </ErrorMessage>
            </div>
            <div class="flex flex-col gap-2">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number*</label>
                <Field type="tel" id="phone" name="phone" placeholder="+1 234567890" autoComplete="tel"
                    aria-invalid="false"
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-600 focus:border-green-600 focus:outline-none" />
                <ErrorMessage name="phone">
                    <template #default="{ message }">
                        <span class="text-red-500 -mt-0.5 text-sm">*{{ message }}</span>
                    </template>
                </ErrorMessage>
            </div>
            <ErrorMessage name="terms">
                <template #default="{ message }">
                    <span class="text-red-500 text-sm">*{{ message }}</span>
                </template>
            </ErrorMessage>
            <div class="flex items-center  gap-2">
                <Field type="checkbox" id="terms" name="terms" class="size-4 accent-green-600" />

                <label for="terms" class="ms-2">
                    I agree to the
                    <a href="#" class="text-green-600 hover:underline">Terms of Service</a>
                    and
                    <a href="#" class="text-green-600 hover:underline">Privacy Policy</a>*
                </label>
            </div>
            <button type="submit"
                class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                <span v-if="!isLoading"><i class="fa-solid fa-user-plus me-2 text-white"></i>Create My Account</span>
                <span v-if="isLoading"><i class="fa-solid fa-spinner fa-spin mx-1"></i>Loading...</span>
            </button>
        </Form>
        <p class="border-t pt-10 border-gray-300/30 my-4 text-center">
            Already have an account? <a href="/login" class="text-green-600 hover:underline">Sign In</a>
        </p>
    </div>
</template>

<script setup>
import { ErrorMessage, Field, Form } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { boolean, date, object, string, ref as yupRef } from 'yup';
import { UseApi } from '../Composbles/UseApi';

const router = useRouter()
const successMsg = ref("");
const { fetchData, error, isLoading } = UseApi();


async function submitForm(values) {
    isLoading.value = true;
    const res = await fetchData({ url: "v1/auth/signup", method: 'post', data: values });
    successMsg.value = res.data.message ||"Registered successfully!";
    router.push({ name: 'home' })

}



const validationSchema = object({
    name: string().required('Please enter your name').min(3).max(20),
    email: string().required('Please enter a valid email').email(),
    password: string().required('Please enter a valid password').min(8)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            'Password must be at least 8 characters long and contain both letters and numbers'),
    rePassword: string().required('Please confirm your password').oneOf([yupRef('password'), null], 'Passwords do not match'),
    phone: string().required('Please enter your phone number').matches(/^01[0125][0-9]{8}$/, 'Please enter a valid phone number'),
    terms: boolean().oneOf([true], 'Please agree to the terms and conditions')
})

function OpenFacebook() {
    window.open("https://facebook.com", "_blank", "noopener,noreferrer");
}
function OpenGoogle() {
    window.open("https://accounts.google.com", "_blank", "noopener,noreferrer");
}
</script>
<style scoped></style>