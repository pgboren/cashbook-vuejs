<template>
  <v-dialog v-model="dialogVisible" max-width="500" class="dialog">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <div class="text-center dropzone" ref="myDropzone" >
          <div class="message pa-4">
            {{ message }}
          </div>
          <section class="section">
            <button class="select-picture">
              <span>Select Picture</span>
              <input
                ref="uploadInput"
                type="file"
                accept="image/jpg, image/jpeg, image/png, image/gif"
                @change="selectFile"
              />
            </button>
          </section>
          
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { ref, defineComponent, onMounted } from 'vue';
import VuePictureCropper, { cropper } from 'vue-picture-cropper'

export default defineComponent({
  props: {
    modelValue: Boolean,
    title: String,
    message: String,
    deleteDialogButtonClick: Function,
  },
  components: {
    VuePictureCropper,
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
});
</script>

<style lang="scss" src="./MediaUploadDialog.scss"></style>