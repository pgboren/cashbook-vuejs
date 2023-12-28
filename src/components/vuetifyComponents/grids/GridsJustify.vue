<script setup lang="ts">
import { ref } from "vue";

const justify = ref([
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
]);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Justify  -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-container class="bg-grey-lighten-5">
    <v-row justify="start">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-card class="pa-2" outlined tile>justify-start </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-card class="pa-2" outlined tile>justify-center </v-card>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-card class="pa-2" outlined tile>justify-end </v-card>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-card class="pa-2" outlined tile>justify-space-around </v-card>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col v-for="k in 2" :key="k" cols="4">
        <v-card class="pa-2" outlined tile>justify-space-between </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
