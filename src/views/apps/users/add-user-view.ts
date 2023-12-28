// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";
import UserForm from "./user-form.vue";

// Import UserService and apiEndpoints
import UserService from "@/services/UserService";
import apiEndpoints from '@/config/config';
const userService = new UserService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "user-view",
  data() {
    return {
      config:apiEndpoints ,
      valid: false,
      files: [],
      password_visible: true,
      confirm_password_visible: true,
      model: {
        username: '',
        email:'',
        password: '',
        confirmPassword: '',
        files: [],
        roles:[]
      }
    };
  },
  components: {
    ContentLayout,
    UserForm
  },
  methods: {
    reset() {
      this.$refs.docForm.reset();
    },
    async validate () {
      const  valid  = await this.$refs.docForm.validate();
      if (valid) {    
        userService.createUser(this.$refs.docForm.getData())
        .then(response => {
          this.$emit('userSaved', response);
          this.reset();
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
      }
    },
    getBreadcrumbsData(): any {
      return [{
        title: 'អ្នកប្រើប្រាស់',
        href: '/users',
      },
      {
        title: 'បង្កើតថ្មី',
      }
      ];
    }
  },
  mounted() {
    
  },
});
