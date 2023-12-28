<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- FileInputs Selection Slot -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Using the <code>selection</code> slot, you can customize the appearance of
      your input selections. This is typically done with chips, however any
      component or markup can be used.
    </p>
    <div class="mt-4">
      <v-file-input
        v-model="files"
        placeholder="Upload your documents"
        label="File input"
        multiple
        prepend-icon="mdi-paperclip"
      >
        <template v-slot:selection="{ text }">
          <v-chip small label color="primary">
            {{ text }}
          </v-chip>
        </template>
      </v-file-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const files = ref([]);
</script>
