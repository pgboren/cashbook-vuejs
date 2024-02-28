<template>
  <v-dialog v-model="dialogVisible" max-width="500">
    <v-card height="25vh">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <div class="text-center">
          {{ content }}
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="green mr-2" rounded="lg" @click="deleteDialogButtonClick('Yes')">យល់ព្រម</v-btn>
        <v-btn color="red ml-2" rounded="lg" @click="deleteDialogButtonClick('No')">បដិសេធ</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
    title: String,
    content: String,
    deleteDialogButtonClick: Function,
  },
  data() {
    return {
      dialogVisible: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.dialogVisible = newValue;
    },
  },
  mounted() {
    // Listen for the keyup event on the window
    window.addEventListener('keyup', this.handleKeyUp);
  },
  beforeUnmount() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('keyup', this.handleKeyUp);
  },
  methods: {
    updateShowDeleteDialog(value) {
      this.$emit('update:modelValue', value);
    },
    deleteDialogButtonClick(response) {
      this.updateShowDeleteDialog(false); // Close the dialog
      this.$emit('deleteDialogButtonClick', response);
    },
    handleKeyUp(event) {
      // Check if the pressed key is the Escape key (key code 27)
      if (event.keyCode === 27) {
        this.updateShowDeleteDialog(false); // Hide the dialog
      }
    },
  },
};
</script>
