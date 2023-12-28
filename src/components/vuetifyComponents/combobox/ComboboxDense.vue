<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dense -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can use <code>dense</code> prop to reduce combobox height and lower
      max height of list items.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col cols="12">
          <v-combobox
            v-model="select"
            :items="items"
            label="Combobox"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const select = ref(["Vuetify", "Programming"]);
const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
</script>
