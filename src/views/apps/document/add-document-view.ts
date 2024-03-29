// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";

import { getDocumentInfo, type DocumentInfos } from '@/config/doInfo';

// Import UserService and apiEndpoints
import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';

import UserForm from '../users/user-form.vue';
import ColorForm from '../colors/color-form.vue';
import RefdocForm from '../refdoc/refdoc-form.vue';
import ItemForm from '../items/item-form.vue';
import BranchForm from '../branch/branch-form.vue';

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "document-view",
  data() {
    return {
      config:apiEndpoints ,
      docInfo: getDocumentInfo(this.$route.meta.docName as keyof DocumentInfos),
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
    ColorForm,
    RefdocForm,
    ItemForm,
    BranchForm
  },
  methods: {
    reset() {
      this.$refs.docForm.reset();
    },
    async validate () {
      const  valid  = await this.$refs.docForm.validate();
      if (valid) {    
        documentService.add(this.docInfo.api_end_point, this.$refs.docForm.getData())
        .then(response => {
          this.reset();
        })
        .catch(error => {
          console.error('Error create document data:', error);
        });
      }
    },
    getListRoute() {
      const route = this.$router.resolve({ name: this.docInfo.list_route });
      return route.path;
    },
    getBreadcrumbsData(): any {
      return [{
        title: this.docInfo.new.title,
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
