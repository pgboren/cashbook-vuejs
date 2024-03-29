// Import necessary modules from Vue
import { defineComponent } from 'vue';
import 'vue3-swatches/dist/style.css'

export default defineComponent({
  name: "ref-doc-form",
  props: {
    modelValue: Object
  },
  emits: ['update:modelValue'],
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        if (newVal === null || newVal === undefined) {
          console.error("modelValue is null or undefined");
          return;
        }
        this.model = newVal;
      },
    },
  },
  data() {
    return {
      valid: false,
      files: [],
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: this.viewUser },
        { title: 'Delete', icon:'mdi-delete', action: this.viewUser },
      ],
      model: this.modelValue,
      };
  },
  components: {
  },
  methods: {
    reset() {
      if (this.$refs.form === null || this.$refs.form === undefined) {
        console.error("$refs.form is null or undefined");
        return;
      }
      this.$refs.form.reset();
    },
    getData() {
      if (this.model) {
        const data : RefDoc = {
          name: this.model.name,
          code: this.model.code  
        };
        return data;
      }
      return null;
    },
    async validate(): Promise<boolean> {
      if (this.$refs.form === null || this.$refs.form === undefined) {
        console.error("$refs.form is null or undefined");
        return false;
      }
      
      try {
        const { valid } = await this.$refs.form.validate();
        return valid;
      } catch (error) {
        console.error('Error validating form:', error);
        return false;
              
      }
    },

  },
  mounted() {
  },
});
