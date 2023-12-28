// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import VerticalHeader from "./../layouts/full/vertical-header/VerticalHeader.vue";
import VerticalSidebarVue from "./../layouts/full/vertical-sidebar/VerticalSidebar.vue";


export default defineComponent({
  name: "application-container",
  props: {
    title: String, // Specify the type of the 'title' prop
  },
  data() {
    return {
    };
  },
  components: {
    VerticalSidebarVue,
    VerticalHeader
  },
  methods: {
  },
  mounted() {
    
  },
});
