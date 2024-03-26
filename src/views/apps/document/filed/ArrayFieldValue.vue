<template>
  <template v-if="field.format === 'chip'">
    <v-chip class="user-role-chip" label v-for="(item, index) in doc[field.name]" variant="tonal" 
            size="small" color="blue" :class="index > 0 ? 'ml-1' : '' " >
      {{ item.name }}
    </v-chip>
  </template>
  <template v-else>
    {{ generateStringRepresentation() }}
  </template>
</template>


<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  export default defineComponent({
    name: "string-field-view",
    props: {
      doc: {
      type: Object,
      default: () => ({})
    },
    field: {
      type: Object,
      default: () => ({})
    }
    },
    methods: {
      generateStringRepresentation() {
        if (this.doc && this.field && Array.isArray(this.doc[this.field.name])) {
          return this.doc[this.field.name].map((item: { name: any; }) => item.name).join(', ');
        } else {
          return '';
        }
      },
    },
  });
</script>
