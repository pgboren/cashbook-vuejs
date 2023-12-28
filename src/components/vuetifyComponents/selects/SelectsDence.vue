<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- error -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      You can use <code>dense</code> prop to reduce the field height and lower
      max height of list items.
    </p>
    <div class="mt-4">
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Standard" dense></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" filled label="Filled style" dense></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            :items="items"
            label="Outlined style"
            dense
            outlined
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Solo field" dense solo></v-select>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Foo", "Bar", "Fizz", "Buzz"]);
</script>
