<!-- StringComponent.vue -->
<template>
  {{ doc[name] }}
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  export default defineComponent({
    name: "string-field-view",
    props: {
      doc: { type: Object },
      name: { type: String },
    }
  });
</script>

