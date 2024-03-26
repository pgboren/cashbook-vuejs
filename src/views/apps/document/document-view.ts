// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/BaseViewContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';
import MediaUploadDialog from '@/views/widgets/dialog/media/MediaUploadDialog.vue';
import { getDocumentInfo, type DocumentInfos } from '@/config/doInfo';

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
      docInfo: getDocumentInfo(this.$route.meta.docName as keyof DocumentInfos),
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
      if (!this.docInfo) {
        console.error('Document info not found.');
        return;
      }
      try { 
        this.doc = await documentService.get(this.docInfo.api_end_point, this.$route.params.id as String);  
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    calculateHeight() {
      return window.innerHeight - 199;
    },
    deleteDialogButtonClick(anwer: string) {
      if (anwer == 'Yes') {
        if (!this.docInfo) {
          console.error('Document info not found.');
          return;
        }
        documentService.delete(this.docInfo.api_end_point, this.$route.params.id as String)  .then((response: any) => {
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
      if (!this.docInfo) {
        console.error('Document info not found.');
        return;
      }
      this.$router.push({ name: this.docInfo.edit_route, params: { userId: this.$route.params.id  } });
    },
    delete() {
      this.showDeleteDialog = true;
    },
    getListRoute() {
      if (!this.docInfo) {
        console.error('Document info not found.');
        return;
      }
      const route = this.$router.resolve({ name: this.docInfo.list_route });
      return route.path;
    },
    getBreadcrumbsData(): any {
      if (!this.docInfo) {
        console.error('Document info not found.');
        return;
      }

      if (this.docInfo.view.title_filed_name in this.doc) {
        const title: string = this.doc[this.docInfo.view.title_filed_name] as string;
        return [
          {
            title: this.docInfo.view.doc_name,
            href: this.getListRoute() ,
          },
          {
            title: title,
          }
        ];
      } else {
        return []; 
      }
    }
  },
  mounted() {
    this.fertchDocument(); 
  },
});
