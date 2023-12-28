import { defineComponent, ref, onMounted } from 'vue';
import UserService from "@/services/UserService";
import apiEndpoints from '@/config/config';
import ContentLayout from "./../../../layouts/full/content/list/ListContentLayout.vue";
import QuestionDialog from '@/views/widgets/dialog/question/QuestionDialog.vue';

// Create an instance of the UserService
const userService = new UserService(apiEndpoints);


// Define the user list component
export default defineComponent({
  name: "userlist",
  data() {
    return {
      config:apiEndpoints ,
      headers: [
        { align: 'start', key: 'username', sortable: true, title: 'ឈ្មោះអ្នកប្រើ' },
        { align: 'start', key: 'email', sortable: true, title: 'អ៊ីមែល'},
        { align: 'start', key: 'roles', sortable: false, title: 'តួនាទី'},
        { align: 'start', key: 'deleted', sortable: false, title: 'ស្ថានភាព'},
        { align: 'end', title: '', key: 'actions', sortable: false },
      ],
      actions: [
        { title: 'View', icon:'mdi-eye', action: this.view},
        { title: 'Edit', icon:'mdi-pencil', action: this.edit },
        { title: 'Delete', icon:'mdi-delete', action: this.delete },
      ],
      dialog: false,
      formTitle: 'New User',
      editedItem: {},
      search: '',
      docs: [],
      loading: true,
      itemsPerPage: 25,
      totalItems : 0,
      showDeleteDialog: false,
      deletingId: '',
      apiBaseUrl: apiEndpoints.base,
    };
  },
  components: {
    ContentLayout,
    QuestionDialog
  },
  methods: {
    loadDataService() {
      userService.getAllUsers(true)
        .then((response: any) => {
          this.docs = response;
        })
        .catch((error: any) => {
          console.error('Error fetching user data:', error);
        });
    
    },
    view(userId: string) {
      this.$router.push({ name: 'view-user', params: { userId: userId } });
    },
    edit(userId: string) {
      this.$router.push({ name: 'edit-user', params: { userId: userId } });
    },
    openDialog() {
      (this.$refs.userInputDialog as any).dialog = true;
    },
    addNew() {
      this.$router.push({ name: 'add-user' });
    },
    handleUserSaved(user: any) {
      this.docs.push(user);
    },
    getBreadcrumbsData(): any {
      return [{
        title: 'អ្នកប្រើប្រាស់',
        href: '/users'}
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
    loadItems ({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      var sort = 'name';
      var order = 'esc';

      if (sortBy.length > 0) {
        var sortObj = sortBy[0];
        sort = sortObj.key;
        order = sortObj.order;
      }

      userService.getAllUsers(false, page, itemsPerPage, sort, order)
      .then((response: any) => {
        this.docs = response.docs;
        this.totalItems = response.totalItems;
        this.loading = false;
      })
      .catch((error: any) => {
        console.error('Error fetching user data:', error);
        this.loading = false;
      });
      
    },
  },
  mounted() {
    // this.loadDataService(); 
  },
});
