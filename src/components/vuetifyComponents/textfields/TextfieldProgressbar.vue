<script setup lang="ts">
import { ref, computed } from "vue";

const value = ref(1);
const custom = ref(true);

//Computed Property
const progress = computed(() => {
  return Math.min(100, value.value * 10);
});

const color = computed(() => {
  return ["error", "warning", "success"][Math.floor(progress.value / 40)];
});
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldProgressbar -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can display a progress bar instead of the bottom line. You can use the
      default indeterminate progress having same color as the text field or
      designate a custom one using the <code>progress</code> slot
    </p>
    <div class="mt-4">
      <v-checkbox v-model="custom" label="Custom progress bar"></v-checkbox>
      <v-text-field
        v-model="value"
        color="cyan darken"
        label="Text field"
        placeholder="Start typing..."
        loading
      >
        <template v-slot:progress>
          <v-progress-linear
            v-if="custom"
            :value="progress"
            :color="color"
            absolute
            height="7"
          ></v-progress-linear>
        </template>
      </v-text-field>
    </div>
  </div>
</template>
