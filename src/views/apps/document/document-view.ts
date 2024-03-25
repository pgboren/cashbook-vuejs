// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/BaseViewContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';
import MediaUploadDialog from '@/views/widgets/dialog/media/MediaUploadDialog.vue';
import { getDocumentInfo } from '@/config/doInfo';

import DocumentService from '@/services/DocumentService';
import apiEndpoints from '@/config/config';
import StringFieldValue from './filed/StringFieldValue.vue'
import ArrayFieldValue from './filed/ArrayFieldValue.vue'
import DateTimeFieldValue from './filed/DateTimeFieldValue.vue'
import BooleanFieldValue from './filed/BooleanFieldValue.vue'
import RoundedPhotoFieldValue from './filed/RoundedPhotoFieldValue.vue'
import ColorFieldValue from './filed/ColorFieldValue.vue';

const documentService = new DocumentService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "document-view",
  data() {
    return {
      config:apiEndpoints ,
      docInfo: getDocumentInfo(this.$route.meta.docName),
      doc:{},
      showDeleteDialog: false,
      showUploadDialog: false
    };
  },
  components: {
    ContentLayout,
    QuestionDialog,
    MediaUploadDialog,
    StringFieldValue,
    ArrayFieldValue,
    DateTimeFieldValue,
    BooleanFieldValue,
    RoundedPhotoFieldValue,
    ColorFieldValue
  },
  methods: {
    async fertchDocument() {
      const docId = this.$route.params.id;
      try {
        this.doc = await documentService.get(this.docInfo.api_end_point, docId);  
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    calculateHeight() {
      return window.innerHeight - 199;
    },
    deleteDialogButtonClick(anwer: string) {
      if (anwer == 'Yes') {
        documentService.delete(this.docInfo.api_end_point, this.doc._id)  .then((response: any) => {
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
    },
    edit() {
      this.$router.push({ name: this.docInfo.edit_route, params: { userId: this.doc._id } });
    },
    delete() {
      this.showDeleteDialog = true;
    },
    getListRoute() {
      const route = this.$router.resolve({ name: this.docInfo.list_route });
      return route.path;
    },
    getBreadcrumbsData(): any {
      return [
        {
          title: this.docInfo.view.doc_name,
          href: this.getListRoute() ,
        },
        {
          title: this.doc[this.docInfo.view.title_filed_name],
        }
      ];
    }
  },
  mounted() {
    this.fertchDocument(); 
  },
});
