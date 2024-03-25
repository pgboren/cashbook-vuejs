// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";

import { getDocumentInfo } from '@/config/doInfo';

// Import UserService and apiEndpoints
import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';

import UserForm from '../users/user-form.vue';
import ColorForm from '../colors/color-form.vue';

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "document-view",
  data() {
    return {
      config:apiEndpoints ,
      viewInfo: getDocumentInfo(this.$route.meta.docName).new,
      valid: false,
      files: [],
      password_visible: true,
      confirm_password_visible: true,
      model: {
      } 
    };
  },
  components: {
    ContentLayout,
    UserForm,
    ColorForm
  },
  methods: {
    reset() {
      this.$refs.docForm.reset();
    },
    async validate () {
      const  valid  = await this.$refs.docForm.validate();
      if (valid) {    
        documentService.add(this.viewInfo.apiEndpoints, this.$refs.docForm.getData())
        .then(response => {
          this.reset();
        })
        .catch(error => {
          console.error('Error create document data:', error);
        });
      }
    },
    getListRoute() {
      const route = this.$router.resolve({ name: this.viewInfo.list_route_name });
      return route.path;
    },
    getBreadcrumbsData(): any {
      return [{
        title: this.viewInfo.title,
        href: this.getListRoute() ,
      },
      {
        title: 'បន្ថែមថ្មី',
      }
      ];
    }
  },
  mounted() {
    
  },
});
