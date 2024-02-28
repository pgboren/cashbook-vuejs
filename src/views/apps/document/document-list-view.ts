import { defineComponent, ref, onMounted } from 'vue';
import DocumentService from "@/services/DocumentService";
import apiEndpoints from '@/config/config';
import { getDocumentInfo } from '@/config/doInfo';

import ContentLayout from "./../../../layouts/full/content/list/ListContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';
import userListRow from '../users/user-list-item.vue';

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
      this.$router.push({ name: this.docinfo.list.add_route_name });
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

      documentService.getAll(this.$route.meta.docName,'',true, page, itemsPerPage, sort, order)
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
        this.view(this.docinfo.list.view_route_name , item._id);
    }
  },
  mounted() {
    // this.loadDataService(); 
  },
});
