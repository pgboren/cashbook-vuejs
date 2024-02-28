import { defineComponent, ref, onMounted } from 'vue';
import DocumentService from "@/services/DocumentService";
import apiEndpoints from '@/config/config';
import { getDocumentInfo } from '@/config/doInfo';
import ContentLayout from "./../../../layouts/full/content/list/ListContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';
import Observer from "@/components/Observer.vue";

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
      itemsPerPage: 25,
      totalItems : 0,
      showDeleteDialog: false,
      deletingId: '',
      apiBaseUrl: apiEndpoints.base,
      docs: [],
      page: 1,
      limit: 12,
      loading: false,
      scrollContainer: null,
      statuses: ['Sold', 'Available'],
      status: [],
      keyword: '',
      state: null,
      complete: false,
      hasMoreItems: false 
    };
  },
  components: {
    Observer,
    ContentLayout,
    QuestionDialog
  },
  methods: {
    onSearch() {
      this.docs = [];
      this.page = 1;
      this.loadMoreDoc();
    },
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
      this.$router.push({ name: 'add-user' });
    },
    onMenuItemClick(action: string, id: string, target: string) {
        if (action == 'VIEW') {
          this.view(target, id);
        }

        if (action == 'EDIT') {
          this.edit(target, id);
        }

        if (action == 'DELETE') {
          this.delete(id);
        }

    },
    getBreadcrumbsData(): any {
      return [{
        title: this.docinfo.list.title,
        href: this.docinfo.list.route}
      ];
    },
    deleteDialogButtonClick(anwer: string) {
      if (anwer == 'Yes') {
        userService.deleteUser(this.deletingId).then((response: any) => {
          const index = this.docs.findIndex(item => item._id === this.deletingId);
          if (index !== -1) {
            this.docs.splice(index, 1);
          }
        })
        .catch((error: any) => {
          console.error('Error fetching user data:', error);
          this.showDeleteDialog = false;
        });
      }
      if (anwer == 'No') {
        this.showDeleteDialog = false;
      }
    },
    delete(userId: string) {
      this.deletingId = userId;
      this.showDeleteDialog = true;
    },
    loadMoreDoc() {
      console.log('loading');
      this.loadItems(this.page, this.limit);
    },
    loadItems (page: int, itemsPerPage: int) {
      this.loading = true;
      var sort = 'name';
      var order = 'esc';
      this.loading = true;
      documentService.getAll(this.$route.meta.docName, this.keyword, false, page, itemsPerPage, sort, order)
      .then((response: any) => {
        this.docs.push(...response.docs);
        this.totalItems = response.totalItems;
        this.loading = false;
        this.page++;
        if (this.docs.length == this.totalItems) {
          
        }
      })
      .catch((error: any) => {
        console.error('Error fetching user data:', error);
        this.loading = false;
      });
    },
    
  },
  mounted(){
    this.loadMoreDoc();
  }
});



     // Connect to the WebSocket server
    //  const socket = new WebSocket('ws://localhost:8080');
    //  // Listen for messages from the server
    //  socket.addEventListener('message', (event) => {
    //    this.message = event.data;
    //    console.log('message receive');
    //    // You can perform additional actions based on the received message
    //  });
 
    //  // Handle socket errors
    //  socket.addEventListener('error', (error) => {
    //    console.error('WebSocket error:', error);
    //  });
 
    //  // Handle socket closure
    //  socket.addEventListener('close', (event) => {
    //    console.log('Connection closed:', event);
    //  });