<script setup lang="ts">
import { ref } from "vue";
const min = ref(-50);
const max = ref(90);
const slider = ref(40);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SlidersMinMax -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can set <code>min</code> and <code>max</code> values of sliders.
    </p>
    <div class="mt-4">
      <v-subheader>Min and max default slider</v-subheader>

      <v-row>
        <v-col class="pr-4">
          <v-slider
            v-model="slider"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
          >
          </v-slider>
          <v-text-field
            dense
            label="set Value"
            type="number"
            v-model="slider"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
