import draggable from "vuedraggable";
import CaseCard from "./CaseCard.vue";
import CaseColumn from "./CaseColumn.vue";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";
import { ref } from "vue";

const page = ref({ title: "Case Board" });

const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Classic",
    disabled: true,
    href: "#",
  },
]);

const message = [
  "ប៉េង បូរ៉ែន",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

const columns = [
  {name: 'អតិថិជនថ្មី', color: '#ECEFF1'},
  {name: 'ប្រមូលព័តមាន', color: '#FF9800'},
  {name: 'រៀបចំឯកសារ', color: '#9CCC65'},
  {name: 'ត្រួតពិនិត្យ', color: '#4E342E'},
  {name: 'ដាក់ស្នើរ', color: '#4E342E'},
  {name: 'អនុម័ត្រ', color: '#4CAF50'},
  {name: 'បដិសេធន៏', color: '#F44336'},
];

const board = {
    name: 'សុលាភ 02 - ក្រាំងពង្ររ - ភ្នំពេញ',
    clumns: columns
};

export default {
  name: "board",
  components: {
    draggable,
    CaseCard,
    CaseColumn, 
    BaseBreadcrumb
  },
  data() {
    return {
      board: board,
      page,
      breadcrumbs,
      backlog: message.map((name, index) => {
        return { name, sub_title: '070433123', order: index + 1, fixed: false };
      }),
      todos: message.map((name, index) => {
        return { name,sub_title: '070433123' , order: index + 1, fixed: false };
      }),
      inprogress: [],
      editable: true,
      isDragging: false,
      delayedDragging: false
    };
  },
  method: {
    loadDataService  () {
      
    },
  }
};