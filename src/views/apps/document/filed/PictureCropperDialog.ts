import { defineComponent, ref, onMounted } from 'vue';
import VuePictureCropper, { cropper } from 'vue-picture-cropper'

export default defineComponent({
  name: "pictureCropperDialog",
  data() {
    return {
      result: {
        dataURL: '',
        blobURL: '',
        file: File
      },
      pic: '',
      isShowModal: false
    };
  },
  components: {
    VuePictureCropper
  },
  methods: {
    show(file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.pic = String(reader.result)
          this.isShowModal = true;
        }
      }
    },
    async onCropButtonClicked() {
      await this.getResult();
      this.$emit('onCropButtonClicked', this.result);
    },
    async getResult() {
      if (!cropper) return;
      this.result.dataURL = await cropper.getDataURL();
      this.result.file = await cropper.getFile();
      this.result.blobURL = URL.createObjectURL(await cropper.getBlob());
      this.isShowModal = false;
      this.$emit('onCropButtonClick');
    },
  }
});
