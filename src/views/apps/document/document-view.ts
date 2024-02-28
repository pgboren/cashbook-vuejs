// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/BaseViewContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';
import { getDocumentInfo } from '@/config/doInfo';

import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';
import StringFieldValue from './filed/StringFieldValue.vue'
import ArrayFieldValue from './filed/ArrayFieldValue.vue'
import DateTimeFieldValue from './filed/DateTimeFieldValue.vue'
import BooleanFieldValue from './filed/BooleanFieldValue.vue'

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "document-view",
  data() {
    return {
      config:apiEndpoints ,
      view: getDocumentInfo(this.$route.meta.docName).view,
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: this.edit },
        { title: 'Delete', icon:'mdi-delete', action: this.delete },
      ],
      doc:{},
      showDeleteDialog: false,
    };
  },
  components: {
    ContentLayout,
    QuestionDialog,
    StringFieldValue,
    ArrayFieldValue,
    DateTimeFieldValue,
    BooleanFieldValue
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
    edit(userId: string) {
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
