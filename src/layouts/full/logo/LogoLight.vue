<template>
  <div class="logo">
    <RouterLink to="/" class="d-flex">
      <v-row>
        <v-col lg="2" class="d-none d-md-flex align-center justify-center">
          <div class="logo">
              <img src="../../../assets/images/logos/logo.png" style="width:40px"/>
          </div>                    
        </v-col>

        <v-col class="d-md-flex" v-if="!customizer.mini_sidebar">
          <h2 class="text-white font-weight-medium text-center">
            សុលាភ លក់ម៉ូតូបង់រំលស់
          </h2>
        </v-col>

      </v-row>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useCustomizerStore } from "../../../stores/customizer";
const customizer = useCustomizerStore();
import { RouterLink } from "vue-router";
</script>
