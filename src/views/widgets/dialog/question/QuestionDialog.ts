// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: "question-dialog",
  data() {
    return {
      dialog: Boolean,
      title: String,
      question: String
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    handleYes() {
      // Handle "Yes" button click
      console.log('Yes clicked');
      this.dialog = false; // Close the dialog
    },
    handleNo() {
      // Handle "No" button click
      console.log('No clicked');
      this.dialog = false; // Close the dialog
    },
    show() {
      this.dialog = true;
    }
  },
});
