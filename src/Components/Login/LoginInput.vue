<template>
    <div class="w-full">
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-4">
                    <span class="text-3xl font-bold text-green-600">Fresh</span>
                    <span class="text-3xl font-bold text-gray-800">Cart</span>
                </div>
                <h1 class="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
                <p class="text-gray-600">Sign in to continue your fresh shopping experience</p>
            </div>
            <div class="space-y-3 mb-3">
                <button @click="OpenGoogle"
                    class="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
                    <i class="fa-brands fa-google text-red-500 text-lg"></i>
                    <span class="text-gray-700 font-medium">Continue with Google</span>
                </button>
                <button @click="OpenFacebook"
                    class="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
                    <i class="fa-brands fa-facebook text-blue-600 text-lg"></i>
                    <span class="text-gray-700 font-medium">Continue with Facebook</span>
                </button>
            </div>
            <div class="my-6 relative">
                <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t border-gray-300"></span>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">OR CONTINUE WITH EMAIL</span>
                </div>
                <div class="absolute inset-0 flex items-center"></div>
            </div>
            <Form @submit="submitForm" :validation-schema="validationSchema" class="space-y-6">
                <div class="flex flex-col gap-2">
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <div class="relative">
                        <Field type="email" id="email" name="email" placeholder="Enter your email" autoComplete="email"
                            aria-invalid="false"
                            class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                        <i class="fa-solid fa-envelope absolute left-4 top-6 -translate-y-1/2 text-gray-400"></i>
                        <ErrorMessage name="email">
                            <template #default="{ message }">
                                <span class="text-red-500 -mt-0.5 text-sm">*{{ message }}</span>
                            </template>
                        </ErrorMessage>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between mb-2"> <label for="password"
                            class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <RouterLink to="/forgetpassword"
                            class="text-sm text-green-600 hover:text-green-700 cursor-pointer font-medium">Forgot
                            Password?</RouterLink>
                    </div>
                    <div class="relative">
                        <Field type="password" id="password" name="password" placeholder="Enter your password"
                            autoComplete="new-password" aria-invalid="false"
                            class="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" />
                        <i class="fa-solid fa-lock absolute left-4 top-6 -translate-y-1/2 text-gray-400"></i>
                        <ErrorMessage name="password">
                            <template #default="{ message }">
                                <span class="text-red-500 -mt-0.5 text-sm">*{{ message }}</span>
                            </template>
                        </ErrorMessage>
                    </div>
                </div>
                <button type="submit" :disabled="isLoading"
                    class="w-full flex justify-center items-center bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    <span class="flex gap-2" v-if="!isLoading">Sign In</span>
                    <span class="flex gap-2" v-if="isLoading">
                        <i class="fa-solid fa-spinner fa-spin"></i>
                        <span>Loading ...</span>
                    </span>
                </button>
            </Form>
            <div class="flex justify-center text-center mt-8 pt-6 border-t border-gray-300">
                <p class="text-gray-700">New to FreshCart?</p>
                <RouterLink to="/register"
                    class="text-green-600 hover:text-green-700 hover:underline ms-2 font-semibold cursor-pointer">Create
                    an
                    account</RouterLink>
            </div>
            <div class="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
                <div class="flex items-center">
                    <i class="fa-solid fa-lock mr-1"></i>
                    <span>SSL Secured</span>
                </div>
                <div class="flex items-center">
                    <i class="fa-solid fa-users mr-1"></i>
                    <span>50K+ Users</span>
                </div>
                <div class="flex items-center">
                    <i class="fa-solid fa-star mr-1"></i>
                    <span>4.9 Rating</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApIHead from '@/ApI/AxiosInterCeptor';
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';
import { ErrorMessage, Field, Form } from 'vee-validate';
import { ref } from 'vue';
import { object, string, } from 'yup';

const apiError = ref({
    msg: "",
    param: "",
});

const authStore = useAuthStore();
const isLoading = ref(false)
const successMsg = ref("");

async function submitForm(values) {
    isLoading.value = true;
    ApIHead({
        method: "POST",
        url: "/v1/auth/signin",
        data: values,
        showToast: true,
    }).then((res) => {
        successMsg.value = res.data.message;
        const token = res.data.token;
        localStorage.setItem("token", token);
        authStore.token = token;
        authStore.user = res.data.user;
        localStorage.setItem("user", JSON.stringify(res.data.user));
        router.push({ name: "home" })
    }).catch((err) => {
        if (err.response.data.errors) {
            apiError.value.msg = err.response.data.errors.msg;
            apiError.value.param = err.response.data.errors.param;
        } else {
            apiError.value.msg = err.response.data.message;
            apiError.value.param = "error";
        }
    }).finally(() => {
        isLoading.value = false;
    })
    // axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
    //     .then((res) => {
    //         successMsg.value = res.data.message;
    //         const token = res.data.token;
    //         localStorage.setItem("token", token);
    //         authStore.token = token;
    //         authStore.user = res.data.user;
    //         console.log(res);
    //         router.push({ name: "home" })

    //     })
    //     .catch((err) => {
    //         console.log(err.response);

    //         if (err.response.data.errors) {
    //             apiError.value.msg = err.response.data.errors.msg;
    //             apiError.value.param = err.response.data.errors.param;
    //         } else {
    //             apiError.value.msg = err.response.data.message;
    //             apiError.value.param = "error";
    //         }
    //         const toastMessage = `${apiError.value.param} - ${apiError.value.msg}`;
    //     })
    //     .finally(() => {
    //         isLoading.value = false;
    //     })

}

const validationSchema = object({
    email: string().required('Please enter a valid email').email(),
    password: string().required('Please enter a valid password').min(8)
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W_]{8,}$/,
            'Password must be at least 8 characters long and contain both letters and numbers'),
})

function OpenFacebook() {
    window.open("https://facebook.com", "_blank", "noopener,noreferrer");
}
function OpenGoogle() {
    window.open("https://accounts.google.com", "_blank", "noopener,noreferrer");
}
</script>
