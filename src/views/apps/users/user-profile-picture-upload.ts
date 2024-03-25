// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/BaseViewContentLayout.vue";
import { getDocumentInfo } from '@/config/doInfo';

import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "document-view",
  data() {
    return {
      config:apiEndpoints ,
      view: getDocumentInfo(this.$route.meta.docName).view,
      doc:{},
      showDeleteDialog: false,
    };
  },
  components: {
    ContentLayout,
  },
  methods: {
    async fertchDocument() {
      const docId = this.$route.params.id;
      try {
        this.doc = await documentService.get(docId);  
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    calculateHeight() {
      return window.innerHeight - 199;
    },
    deleteDialogButtonClick(anwer: string) {
      if (anwer == 'Yes') {
        documentService.delete(this.doc._id)  .then((response: any) => {
          this.$router.go(-1);
        })
        .catch((error: any) => {
        });
      }
    },
    onOptionMenuClicked(menuItem: object) {
      if (menuItem.type == 'action') {
        if (menuItem.action  == 'edit') { 
            this.edit();
        }

        if (menuItem.action  == 'delete') { 
          this.delete();
        }
      }

      if (menuItem.type == 'route') {
        this.$router.push({ name: menuItem.routename, params: { id: this.doc._id } });
      }      
    },
    edit() {
      this.$router.push({ name: this.view.edit_view, params: { userId: this.doc._id } });
    },
    delete() {
      this.showDeleteDialog = true;
    },
    getListRoute() {
      const route = this.$router.resolve({ name: getDocumentInfo(this.$route.meta.docName).view.list_route_name });
      return route.path;
    },
    getBreadcrumbsData(): any {
      return [
        {
          title: this.view.doc_name,
          href: this.getListRoute() ,
        },
        {
          title: this.doc[this.view.title_filed_name],
        }
      ];
    }
  },
  mounted() {
    this.fertchDocument(); 
  },
});
