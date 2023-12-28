<script setup lang="ts">
import { ref } from "vue";

const width = ref(300);
const aspectRatio = ref(16 / 9);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Aspect Ratio -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-subtitle-1 text-grey-darken-1">
    You can set a fixed aspect ratio if you want to change aspect ratio of the
    image.
  </p>
  <div class="d-flex flex-column justify-space-between align-center mt-6">
    <v-slider
      v-model="width"
      class="align-self-stretch"
      min="200"
      max="500"
      step="1"
    ></v-slider>

    <v-img
      :aspect-ratio="aspectRatio"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      cover
    ></v-img>
    Width: {{ width }}
  </div>
</template>
