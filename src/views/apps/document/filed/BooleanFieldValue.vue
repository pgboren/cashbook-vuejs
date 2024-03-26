<template>
  <v-chip class="user-role-chip" label  variant="tonal" size="small" :color="doc[field.name] ? 'green' : 'red'">
    {{ doc[field.name] ? (field.true || '') : (field.false || '') }}
  </v-chip>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  export default defineComponent({
    name: "boolean-field-view",
    props: {
      doc: { type: Object },
      field: { type: Object },
    }
  });
</script>

