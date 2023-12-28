<template>

  <v-sheet class="pa-3">
    <div class="d-flex vertical-align-center my-2">
    <v-avatar
      class="mb-2"
      color="grey-darken-1"
      size="50">
      <img :src="avatar" width="50" alt="Julia" />
    </v-avatar>
    <div class="ml-2">
      <h3 class="fs-18">{{ username }}</h3>
      <div class="d-flex align-center">
        <span class="text-subtitle-2 ml-1">{{ email }}</span>
      </div>
    </div>
  </div>
  </v-sheet>
</template>

<script lang="ts" src="./CompanyProfile"></script>