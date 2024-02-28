// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";
import UserForm from '../users/user-form.vue';
import { getDocumentInfo } from '@/config/doInfo';


// Import UserService and apiEndpoints
import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "edit-user-view",
  data() {
    return {
      viewInfo: getDocumentInfo(this.$route.meta.docName).edit,
      model: {
      }
    };
  },
  components: {
    ContentLayout,
    UserForm
  },
  methods: {
    async fertchUser() {
      try {
        this.model = await documentService.get(this.$route.params.id);  
        this.$emit('update:modelValue', this.model);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    },
    getBreadcrumbsData(): any {
      return [{
        title: this.viewInfo.title,
        href: this.getListRoute() ,
      },
      {
        title: 'កែរប្រែ',
      }
      ];
    },
    getListRoute() {
      const route = this.$router.resolve({ name: this.viewInfo.list_route_name });
      return route.path;
    },
    async saveButtonClicked() {
      const  valid  = await this.$refs.docForm.validate();
      if (valid) {  
        const userId = this.$route.params.userId;
        userService.updateUser(userId, this.$refs.docForm.getData())
        .then(response => {
          this.$router.go(-1);
        })
        .catch(error => {
          console.log(error);
          console.error('Error fetching document data:', error);
        });
      }
    },
  },
  mounted() {
    this.fertchUser();
  },
});
