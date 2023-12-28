// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";
import UserForm from "./user-form.vue";

// Import UserService and apiEndpoints
import UserService from "@/services/UserService";
import apiEndpoints from '@/config/config';
import userForm from './user-form';
const userService = new UserService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "edit-user-view",
  data() {
    return {
      model: {
        username: '',
        email:'',
        password: '',
        confirmPassword: '',
        files: []
      }
    };
  },
  components: {
    ContentLayout,
    UserForm
  },
  methods: {
    async fertchUser() {
      const userId = this.$route.params.userId;
      try {
        this.model = await userService.getUser(userId);  
        console.log(this.model);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    getBreadcrumbsData(): any {
      return [{
        title: 'អ្នកប្រើប្រាស់',
        href: '/users',
      },
      {
        title: 'កែរប្រែ',
      }
      ];
    },
    async saveButtonClicked() {
      const  valid  = await this.$refs.docForm.validate();
      if (valid) {  
        const userId = this.$route.params.userId;
        userService.updateUser(userId, this.$refs.docForm.getData())
        .then(response => {
          this.$router.go(-1);
          this.$emit('userSaved', response);
        })
        .catch(error => {
          console.log(error);
          console.error('Error fetching user data:', error);
        });
      }
    },
  },
  mounted() {
    this.fertchUser();
  },
});
