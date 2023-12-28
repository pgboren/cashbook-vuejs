import { ref } from "vue";
import { useUserStore } from '@/stores/user';
import apiEndpoints from '@/config/config';

const avatar = `${apiEndpoints.base}` +  useUserStore().currentUser.avatar;

export default {
  name: "CompanyProfile",
  data() {
    return {
      avatar: avatar,
      email: useUserStore().currentUser.email,
      username: useUserStore().currentUser.username,
      inprogress: [],
    };
  },
  method: {
    load () {
    },
  }
};