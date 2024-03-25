<!-- StringComponent.vue -->
<template>
  <div class="avatar-widget">
    <div class="avatar-container">
    <v-avatar :size="field.width">
      <img :width="field.width" :src="result.blobURL" />
    </v-avatar>
    <v-btn v-if="!field.readonly"
      class="camera-btn"
      size="x-small"
      color="grey-darken-1"
      icon="mdi-camera"
      @click="openFileInput"
    ></v-btn>
  </div>
    <input ref="fileInput" type="file" accept="image/jpg, image/jpeg, image/png, image/gif" @change="handleFileChange"/>
  </div>

  <PictureCropperDialog  ref="pictureCropperDialog" @onCropButtonClicked="onPictureCropped"/>
  
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import apiEndpoints from '@/config/config';
  import PictureCropperDialog from './PictureCropperDialog.vue';
  import MediaService from '@/services/MedialService';

  const mediaService = new MediaService(apiEndpoints);

  export default defineComponent({
    name: "photo-field-view",
    components: {
      PictureCropperDialog,
    },
    data() {
      return {
        pic: '',
        result: {
          dataURL: '',
          blobURL: '',
          file: File
        },
        avatarImage: '',
        isShowModal: false
      };
    },
    props: {
      doc: { type: Object },
      field: { type: Object },
      readonly: { type: Boolean },
    },
    watch: {
      doc: 'updateComponent',
      field: 'updateComponent',
    },
    methods: {
      openFileInput() {
        if (this.readonly) return;
        this.$refs.fileInput.click();
      },
      handleFileChange(event) {
        this.pic = '';
        const file = event.target.files[0];
        if (file) {
          if (file.type.startsWith('image/')) {
            this.$refs.pictureCropperDialog.show(file);
          } else {
            this.avatarImage = this.getPath();
          }
        }
      },
      onPictureCropped(result) {
        this.result = result;
        this.avatarImage = this.result.blobURL;
        mediaService.upload(this.result.file, this.field.folder, this.doc._id, this.field.docName, this.field.docField, this.doc._id);
      },
      getPath() {
        const media = this.doc[this.field.name];
        if (media != null) {
          return apiEndpoints.base + '/' + media.path;
        }
        return '';
      },
      updateComponent() {
        this.result.blobURL = this.getPath();
      },
    },
    mounted() {
      this.result.blobURL = this.getPath();
    },
  });
</script>

<style lang="scss" src="./RoundedPhotoFieldValue.scss"></style>

