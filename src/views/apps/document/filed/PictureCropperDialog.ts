import { defineComponent, ref, onMounted } from 'vue';
import VuePictureCropper, { cropper } from 'vue-picture-cropper'

interface CropResult {
  dataURL: string;
  blobURL: string;
  file: File | null;
}

export default defineComponent({
  name: "pictureCropperDialog",
  data() {
    const initialResult: CropResult = {
      dataURL: '',
      blobURL: '',
      file: null,
    };

    return {
      result: initialResult,
      pic: '',
      isShowModal: false,
    };
  },

  mounted() {
    if (this.result.file === null) {
      console.log('result.file is initially null');
    } else {
      // Handle the non-null case
      if (this.result.file.type === null) {
        console.error('result.file.type is null');
      }
      if (this.result.file.name === null) {
        console.error('result.file.name is null');
      }
      if (this.result.file.lastModified === null) {
        console.error('result.file.lastModified is null');
      }
    }
  },
  components: {
    VuePictureCropper
  },
  methods: {
    show(file: File) {
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
      if (!cropper) {
        console.error('cropper is null');
        return;
      }
      try {
        this.result.dataURL = await cropper.getDataURL();
        const file = await cropper.getFile();
        if (file !== null) { // Handle null case
          this.result.file = file;
          this.result.blobURL = URL.createObjectURL(file);
        }
      } catch (error) {
        console.error('Error getting result:', error);
      }
      this.isShowModal = false;
      this.$emit('onCropButtonClick');
    },
  }
});
