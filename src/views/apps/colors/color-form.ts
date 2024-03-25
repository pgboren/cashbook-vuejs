// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";
import apiEndpoints from '@/config/config';
import { VSwatches } from 'vue3-swatches'
import 'vue3-swatches/dist/style.css'

export default defineComponent({
  name: "color-form",
  props: {
    modelValue: Object,
    userId: String,
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        this.model = newVal;
      },
    },
  },
  data() {
    return {
      config:apiEndpoints ,
      valid: false,
      files: [],
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: this.viewUser },
        { title: 'Delete', icon:'mdi-delete', action: this.viewUser },
      ],
      model: this.modelValue,
      swatches: ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4', '#009688',
      '#4caf50','#8bc34a','#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#3e2723', '#ffffff', '#9e9e9e', '#607d8b', '#424242','#000000'
      
      ]
      };
  },
  components: {
    ContentLayout,
    VSwatches
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    getData() {
      const data = {};
      data.name = this.model.name;
      data.code = this.model.code;
      return data;
    },
    async validate(): boolean {
      const { valid } = await this.$refs.form.validate();
      return valid;
    },

  },
  mounted() {
  },
});
