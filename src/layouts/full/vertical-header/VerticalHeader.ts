  import { defineComponent, ref, watch } from "vue";
  import { useCustomizerStore } from "../../../stores/customizer";
  import { useUserStore } from '@/stores/user';
  import { message, notification, profile } from "./data";
  import LogoLight from "../logo/LogoLight.vue";
  import LogoDark from "../logo/LogoDark.vue";
  import apiEndpoints from '@/config/config';
  import { useRouter } from 'vue-router'
  
  const customizer = useCustomizerStore();
  const userStore = useUserStore();
  const router = useRouter();
  const showSearch = ref(false);
  const href = ref(undefined);
  const messages = ref(message);
  const notifications = ref(notification);
  const userprofile = ref(profile);
  const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
  const avatar = `${apiEndpoints.base}` +  useUserStore().currentUser.avatar;
  const email = useUserStore().currentUser.email;
  const username = useUserStore().currentUser.username;

  watch(priority, (newPriority) => {
    priority.value = newPriority;
  });

  export default defineComponent({
    name: "vertical-header-view",
    props: {
      title: String, // Specify the type of the 'title' prop
    },
    data() {
      return {
        customizer,
        userStore,
        avatar,
        username,
        email,
        userprofile
      };
    },
    components: {
    },
    methods: {
      logout() {
        useUserStore().clearUser();
        this.$router.push('/login') 
      }
    },
    mounted() {
      
    },
  });
  