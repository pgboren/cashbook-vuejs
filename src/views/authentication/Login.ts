import { ref } from "vue";
import AuthenticationService from "@/services/AuthenticationService";
import apiEndpoints from '@/config/config';
import { useUserStore } from '@/stores/user';
import router from "../../router";

const valid = ref(true);
const password = ref("");
const username = ref("");

const passwordRules = ref([
  (v: string) => !!v || "សូមបញ្ចូលពាក្យសំងាត់",
  (v: string) =>
    (v && v.length <= 10) || "ចំនួនពាក្យសំងាត់ត្រូវតិចជាង 10 តួរអក្សរ",
]);
const usernameRules = ref([
  (v: string) => !!v || "សូមបញ្ចូលឈ្មោះអ្នកប្រើប្រាស់",
]);

const user = ref(null);

export default {
  name: "login",
  components: {
  },
  data() {
    return {
      valid: valid,
      password: password,
      username: username,
      passwordRules: passwordRules,
      usernameRules: usernameRules
    };
  },
  methods : {
     onLogin() {
      const authService = new AuthenticationService(apiEndpoints);
      authService.login(username.value, password.value)
    .then(response => {
      useUserStore().setUser(response);
      router.push('/') ;
    })
    .catch(error => {
      useUserStore().clearUser();
      console.error('Login error:', error);
    });    
    }
  }
};