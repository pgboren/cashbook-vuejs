<script setup lang="ts">
import { ref } from "vue";

const tickLabels = ref({
  0: "Figs",
  1: "Lemon",
  2: "Pear",
  3: "Apple",
});
</script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersTicks -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Tick marks represent predetermined values to which the user can move the
      slider.
    </p>
    <div class="mt-4">
      <v-subheader>Show ticks when using slider</v-subheader>

      <v-slider step="10"></v-slider>

      <v-subheader>Always show ticks</v-subheader>

      <v-slider step="10" show-ticks="always"></v-slider>

      <v-subheader>Tick size</v-subheader>

      <v-slider step="10" show-ticks="always" tick-size="4"></v-slider>

      <v-subheader>Tick labels</v-subheader>

      <v-slider
        :ticks="tickLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      ></v-slider>
    </div>
  </div>
</template>
