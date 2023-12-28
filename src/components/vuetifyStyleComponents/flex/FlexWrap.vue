<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Wrap -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card class="d-flex flex-wrap" color="grey lighten-2" flat tile>
    <v-card v-for="n in 20" :key="n" class="pa-2 w-auto" outlined tile>
      Flex item {{ n }}
    </v-card>
  </v-card>
</template>
