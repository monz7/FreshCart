import Address from "@/Components/Account/address.vue";
import Setting from "@/Components/Account/setting.vue";
import CheckOut from "@/Components/Cart/CheckOut.vue";
import Notfound from "@/Components/Notfound.vue";
import MainLayout from "@/Layouts/MainLayout.vue";
import AccountUser from "@/Pages/AccountUser.vue";
import Allcategories from "@/Pages/Allcategories.vue";
import Brands from "@/Pages/Brands.vue";
import CartShop from "@/Pages/CartShop.vue";
import ContactUs from "@/Pages/ContactUs.vue";
import ForgetPassword from "@/Pages/ForgetPassword.vue";
import Home from "@/Pages/Home.vue";
import ItemProduct from "@/Pages/ItemProduct.vue";
import Login from "@/Pages/Login.vue";
import MyOrder from "@/Pages/MyOrder.vue";
import Register from "@/Pages/Register.vue";
import Shop from "@/Pages/Shop.vue";
import Wishlist from "@/Pages/Wishlist.vue";
import { useAuthStore } from "@/stores/authStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "brands",
        name: "brands",
        component: Brands,
        meta: { requiresAuth: true },
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: Wishlist,
        // meta: { requiresAuth: true },
      },
      {
        path: "contact",
        name: "contacus",
        component: ContactUs,
      },
      {
        path: "register",
        name: "register",
        component: Register,
        meta: { requiresAuth: false },
      },
      {
        path: "shop",
        name: "shop",
        component: Shop,
      },
      {
        path: "/categories",
        name: "categories",
        component: Allcategories,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/account",
        name: "account",
        component: AccountUser,
        children: [
          {
            path: "",
            name: "account-address",
            redirect: "/account/address",
          },
          {
            path: "address",
            name: "address",
            component: Address,
          },
          {
            path: "setting",
            name: "setting",
            component: Setting,
          },
        ],
      },
      {
        path: "/itemProuduct/:id",
        name: "itemProuduct",
        component: ItemProduct,
      },
      {
        path: "/CartShop",
        name: "CartShop",
        component: CartShop,
      },
      {
        path: "/Checkout",
        name: "checkout",
        component: CheckOut,
      },
      {
        path: "/forgetpassword",
        name: "forgetpassword",
        component: ForgetPassword,
      },
      {
        path: "/myorder",
        name: "MyOrder",
        component: MyOrder,
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: Notfound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn && to.meta.requiresAuth) {
    return { name: "login" };
  }
  if (authStore.isLoggedIn && to.meta.requiresAuth === false) {
    return { name: "home" };
  }
});
export default router;
