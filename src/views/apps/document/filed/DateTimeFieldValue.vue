<!-- DateTimeFormatValue.vue -->
<template>
  {{ formattedDate }}
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, computed } from 'vue';
  import moment from 'moment';

  export default defineComponent({
    name: "datetime-field-view",
    props: {
      doc: { type: Object },
      field: { type: Object },
    },
    computed: {
      formattedDate() {
        const rawDate = this.doc[this.field.name];
        const format = this.field.format || 'YYYY-MM-DD HH:mm:ss A'; // Use provided format or default
        return moment(rawDate).format(format);
      }
    }
  });
</script>
