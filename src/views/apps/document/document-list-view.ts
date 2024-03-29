import { defineComponent, ref, onMounted } from 'vue';
import DocumentService from "@/services/DocumentService";
import apiEndpoints from '@/config/config';
import { getDocumentInfo } from '@/config/doInfo';

import ContentLayout from "./../../../layouts/full/content/list/ListContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';
import userListRow from '../users/user-list-item.vue';
import StringFieldValue from './filed/StringFieldValue.vue'
import ArrayFieldValue from './filed/ArrayFieldValue.vue'
import DateTimeFieldValue from './filed/DateTimeFieldValue.vue'
import BooleanFieldValue from './filed/BooleanFieldValue.vue'
import RoundedPhotoFieldValue from './filed/RoundedPhotoFieldValue.vue'
import ColorFieldValue from './filed/ColorFieldValue.vue'

const documentService = new DocumentService(apiEndpoints);

export default defineComponent({
  name: "userlist",
  data() {
    return {
      config:apiEndpoints ,
      docinfo: getDocumentInfo(this.$route.meta.docName),
      dialog: false,
      formTitle: 'New User',
      editedItem: {},
      search: '',
      docs: [],
      loading: true,
      itemsPerPage: 25,
      totalItems : 0,
      apiBaseUrl: apiEndpoints.base,
    };
  },
  components: {
    userListRow,
    ContentLayout,
    QuestionDialog,
    StringFieldValue,
    ArrayFieldValue,
    DateTimeFieldValue,
    BooleanFieldValue,
    RoundedPhotoFieldValue,
    ColorFieldValue
  },
  methods: {
    calculateHeight() {
      return window.innerHeight - 199;
    },
    loadDataService() {
    },
    view(target: string, id: string) {
      this.$router.push({ name: target, params: { id: id } });
    },
    edit(target: string, id: string) {
      this.$router.push({ name: target, params: { id: id } });
    },
    openDialog() {
      (this.$refs.userInputDialog as any).dialog = true;
    },
    addNew() {
      this.$router.push({ name: this.docinfo.add_route });
    },
    getBreadcrumbsData(): any {
      return [{
        title: this.docinfo.list.title,
        href: this.docinfo.list.route}
      ];
    },
    fetchDocs ({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      var sort = 'name';
      var order = 'esc';

      if (sortBy.length > 0) {
        var sortObj = sortBy[0];
        sort = sortObj.key;
        order = sortObj.order;
      }

      documentService.getAll(this.docinfo.api_end_point,'',true, page, itemsPerPage, sort, order)
      .then((response: any) => {
        this.docs = response.docs;
        this.totalItems = response.totalItems;
        this.loading = false;
      })
      .catch((error: any) => {
        console.error('Error while fetching document data:', error);
        this.loading = false;
      });
      
    },
    handleTableRowClicked(item: any) {
      if (this.docinfo) {
        this.view(this.docinfo.view_route , item._id);
      }
    }
  },
  mounted() {
    // this.loadDataService(); 
  },
});
