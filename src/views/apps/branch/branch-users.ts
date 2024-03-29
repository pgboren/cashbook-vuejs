// Import necessary modules from Vue
import { defineComponent } from 'vue';
import 'vue3-swatches/dist/style.css'
import AddUserDialog from './AddUserDialog.vue';

export default defineComponent({
  name: "view-branch-users",
  data() {
    
  },
  components: { 
    AddUserDialog
  }
});
