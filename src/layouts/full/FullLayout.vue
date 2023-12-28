<script setup lang="ts">
import { RouterView } from "vue-router";
import Customizer from "./customizer/Customizer.vue";
import { useCustomizerStore } from "@/stores/customizer";
import ApplicationContainer from "./../../components/ApplicationContainer.vue";
const customizer = useCustomizerStore();
</script>

<template>
  <v-app
    :theme="customizer.darktheme ? 'dark' : 'light'"
    :class="[
      customizer.mini_sidebar ? 'mini-sidebar' : '',
      customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
    ]">
    <Customizer />
    <ApplicationContainer>
      <RouterView />  
    </ApplicationContainer>
  </v-app>
</template>
