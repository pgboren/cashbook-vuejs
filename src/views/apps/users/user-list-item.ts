import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: "user-list-item",
  props: {
    document: {
      type: Object, 
      required: true,
    },
  },
});
