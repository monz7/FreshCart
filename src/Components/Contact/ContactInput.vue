<template>
    <div class="lg:col-span-2">
        <div class="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
            <div class="flex items-start  gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <i class="fa-solid fa-headset  text-green-600 text-lg"></i>
                </div>
                <div class="flex flex-col">
                    <h2 class="text-xl font-bold text-gray-900">Send us a Message</h2>
                    <p class="text-gray-500 text-sm pt-1">Fill out the form and we'll get back to you</p>
                </div>
            </div>
            <form class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input id="name" required placeholder="John Doe"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all">
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input id="email" required placeholder="john@example.com"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all">
                    </div>
                </div>
                <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                    </label>
                    <select id="subject" name="subject" required
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all bg-white">
                        <option>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Support</option>
                        <option value="shipping">Shipping Question</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="product">Product Information</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" name="message" required rows="5" placeholder="How can we help you?"
                        class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"></textarea>
                </div>
                <button type="submit"
                    class="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-green-600/20">
                    <i class="fa-solid fa-paper-plane text-white"></i> Send Message</button>
            </form>
        </div>
        <div class="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <i class="fa-solid fa-circle-question text-green-600 text-lg"></i>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Looking for quick answers?</h3>
                    <p class="text-gray-600 text-sm mb-3">Check out our Help Center for frequently asked questions about
                        orders, shipping, returns, and more.</p>
                    <a href="#"
                        class="text-green-600 font-medium text-sm hover:underline inline-flex items-center gap-1">Visit
                        Help Center →</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>