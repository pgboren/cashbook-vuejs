<!-- StringComponent.vue -->
<template>
  <div class="avatar-widget">
    <div class="pa-4 bg-secondary rounded-circle d-inline-block" :style="getBackgroundColor()"></div>
  </div>

</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import apiEndpoints from '@/config/config';
  
  export default defineComponent({
    name: "color-field-view",
    components: {
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
    
      getBackgroundColor()  {
        return "background-color: " + this.doc[this.field.name] + " !important";
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

<style lang="scss" src="./ColorFieldValue.scss"></style>

