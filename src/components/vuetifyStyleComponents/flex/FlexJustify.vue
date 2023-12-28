<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Justify -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card class="d-flex justify-start mb-6 w-auto" flat tile>
    <v-card v-for="n in 3" :key="n" class="pa-2 w-auto" outlined tile>
      justify-start
    </v-card>
  </v-card>

  <v-card class="d-flex justify-end mb-6" flat tile>
    <v-card v-for="n in 3" :key="n" class="pa-2 w-auto" outlined tile>
      justify-end
    </v-card>
  </v-card>

  <v-card class="d-flex justify-center mb-6" flat tile>
    <v-card v-for="n in 3" :key="n" class="pa-2 w-auto" outlined tile>
      justify-center
    </v-card>
  </v-card>

  <v-card class="d-flex justify-space-between mb-6" flat tile>
    <v-card v-for="n in 3" :key="n" class="pa-2 w-auto" outlined tile>
      justify-space-between
    </v-card>
  </v-card>

  <v-card class="d-flex justify-space-around mb-6" flat tile>
    <v-card v-for="n in 3" :key="n" class="pa-2 w-auto" outlined tile>
      justify-space-around
    </v-card>
  </v-card>
</template>
