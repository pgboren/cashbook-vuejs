<script setup lang="ts"></script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextareasBackgroundColor -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      The <code>background-color</code> and <code>color</code> props give you
      more control over styling <code>v-textarea</code>'s.
    </p>
    <div class="mt-4">
      <v-textarea
        background-color="info"
        color="black"
        label="Label"
      ></v-textarea>

      <v-textarea
        background-color="grey lighten-2"
        color="info"
        label="Label"
      ></v-textarea>

      <v-textarea
        background-color="warning lighten-2"
        color="orange orange-darken-4"
        label="Label"
      ></v-textarea>
    </div>
  </div>
</template>
