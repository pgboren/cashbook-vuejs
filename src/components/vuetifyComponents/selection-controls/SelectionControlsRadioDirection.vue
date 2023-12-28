<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SelectionControlsRadioDirection -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Radio-groups can be presented either as a row or a column, using their
      respective props. The default is as a column.
    </p>
    <div class="mt-4">
      <v-radio-group v-model="column" column>
        <v-radio label="Option 1" value="radio-1"></v-radio>
        <v-radio label="Option 2" value="radio-2"></v-radio>
      </v-radio-group>
      <hr />
      <v-radio-group v-model="row" row>
        <v-radio label="Option 1" value="radio-1"></v-radio>
        <v-radio label="Option 2" value="radio-2"></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const column = ref(null);
const row = ref(null);
</script>
