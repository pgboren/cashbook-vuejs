<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Autocompletes Dence -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can use <code>dense</code> prop to reduce autocomplete height and
      lower max height of list items.
    </p>
    <div class="mt-4">
        <v-row>
          <v-col cols="12">
            <v-autocomplete
              v-model="values"
              :items="items"
              outlined
              dense
              chips
              small-chips
              label="Outlined"
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="values"
              :items="items"
              dense
              chips
              small-chips
              label="Solo"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="value"
              :items="items"
              dense
              filled
              label="Filled"
            ></v-autocomplete>
          </v-col>
        </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["foo", "bar", "fizz", "buzz"]);
const values = ref(["foo", "bar"]);
const value = ref(undefined);
</script>
