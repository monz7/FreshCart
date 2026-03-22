import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const token = ref(localStorage.getItem("token") || null);
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);

  const isLoggedIn = computed(() => {
    return token.value !== null;
  });
  const userId = computed(() => {
  if (!token.value) return null;

  try {
    const decoded = jwtDecode(token.value);
    return decoded.id;
  } catch (e) {
    return null;
  }
});
  function setToken() {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      token.value = tokenFromStorage;
    }
  }
  function loggout() {
    token.value = null;
    user.value = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push({ name: "login" });
  }
  return {
    token,
    user,
    userId,
    isLoggedIn,
    loggout,
    setToken,
  };
});
