<script setup lang="ts">
import { ref } from "vue";
const menu = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Expandable -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card class="pa-4">
    <v-row class="mt-2 ml-2">
      <span class="mr-4">To</span>
      <v-menu
        v-model="menu"
        bottom
        right
        transition="scale-transition"
        origin="top left"
      >
        <template v-slot:activator="{ props }">
          <v-chip pill v-bind="props">
            <v-avatar left>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>
            John Leider
          </v-chip>
        </template>
        <v-card width="300">
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="menu = false">
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-action>
                <v-icon>mdi-briefcase</v-icon>
              </v-list-item-action>
              <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-row>

    <div class="mt-6">
      <v-divider></v-divider>
      <v-text-field
        full-width
        value="Re: Vacation Request"
        label="Subject"
        single-line
      ></v-text-field>

      <v-textarea full-width single-line label="Message"></v-textarea>
    </div>
  </v-card>
</template>
