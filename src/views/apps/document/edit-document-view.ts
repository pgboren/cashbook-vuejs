// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";
import UserForm from '../users/user-form.vue';
import ColorForm from '../colors/color-form.vue';
import { getDocumentInfo } from '@/config/doInfo';
import type { DocumentInfos } from '@/config/doInfo';

// Import UserService and apiEndpoints
import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';
import type { RouteParams } from 'vue-router';

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "edit-doc-view",
  data() {
    return {
      docInfo: getDocumentInfo(this.$route.meta.docName as keyof DocumentInfos),
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
    async fertchUser() {
      try {
        if (!this.docInfo) {
          console.error('Document info not found.');
          return;
        }

        (this.$route.params as RouteParams)
        const id = String(this.$route.params.id);
        this.model = await documentService.get(this.docInfo.api_end_point, id);  
        this.$emit('update:modelValue', this.model);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    },
    getBreadcrumbsData(): any {

      if (!this.docInfo) {
        console.error('Document info not found.');
        return;  
      }

      return [{
        title: this.docInfo.edit.title,
        href: this.getListRoute() ,
      },
      {
        title: 'កែរប្រែ',
      }
      ];
    },
    getListRoute() {
      if (!this.docInfo) {
        console.error('Document info not found.');
        return;  
      }
      const route = this.$router.resolve({ name: this.docInfo.list_route });
      return route.path;
    },
    async saveButtonClicked() {

      if (!this.docInfo) {
        console.error('Document info not found.');
        return;
      }

      if (this.$refs.docForm) {
        const  valid  = await this.$refs.docForm.validate();
        if (valid) {  
          const id: string = this.$route.params.id as string;
          const data = this.$refs.docForm.getData();
          
          documentService.update(this.docInfo.api_end_point, id, data)
          .then(response => {
            this.$router.go(-1);
          })
          .catch(error => {
            console.log(error);
            console.error('Error fetching do+cument data:', error);
          });
        }
      }
      
    },
  },
  mounted() {
    this.fertchUser();
  },
});
