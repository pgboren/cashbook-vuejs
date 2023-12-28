// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/view/ViewContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';

// Import UserService and apiEndpoints
import UserService from "@/services/UserService";
import apiEndpoints from '@/config/config';

// Create an instance of the UserService
const userService = new UserService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "user-view",
  data() {
    return {
      config:apiEndpoints ,
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: this.edit },
        { title: 'Delete', icon:'mdi-delete', action: this.delete },
      ],
      user:{},
      showDeleteDialog: false,
    };
  },
  components: {
    ContentLayout,
    QuestionDialog
  },
  methods: {
    async fertchUser() {
      const userId = this.$route.params.userId;
      try {
        this.user = await userService.getUser(userId);  
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    deleteDialogButtonClick(anwer: string) {
      if (anwer == 'Yes') {
        userService.deleteUser(this.user._id)  .then((response: any) => {
          this.$router.go(-1);
        })
        .catch((error: any) => {
        });
      }
    },
    edit(userId: string) {
      this.$router.push({ name: 'edit-user', params: { userId: this.user._id } });
    },
    delete() {
      this.showDeleteDialog = true;
    },
    getBreadcrumbsData(): any {
      return [{
        title: 'អ្នកប្រើប្រាស់',
        href: '/users',
      },
      {
        title: this.user.username,
      }
      ];
    }
  },
  mounted() {
    this.fertchUser(); 
  },
});
