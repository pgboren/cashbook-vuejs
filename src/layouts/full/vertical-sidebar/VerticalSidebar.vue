<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useCustomizerStore } from "@/stores/customizer";
  import sidebarItems from "@/config/sidebarItem";
  import InlineSvg from 'vue-inline-svg';
  const customizer = useCustomizerStore();
  const sidebarMenu = ref(sidebarItems);



</script>

<template>
  <v-navigation-drawer
    left
    :permanent="$vuetify.display.mdAndUp"
    v-model="customizer.Sidebar_drawer"
    :class="customizer.SidebarColor == 'white' ? '' : 'text-white'"
    :color="customizer.darktheme ? '' : customizer.SidebarColor"
    app:rail="customizer.mini_sidebar"
    v-if="!customizer.mini_sidebar"
    expand-on-hover>
  

      <v-list class="vertical-sidebar pa-4 font-kh-os-siemreap">
        <!-- ---------------------------------------------- -->
        <!---Menu Loop -->
        <!-- ---------------------------------------------- -->
        <template v-for="(item, i) in sidebarMenu">
          <!-- ---------------------------------------------- -->
          <!---Item Sub Header -->
          <!-- ---------------------------------------------- -->
          <v-list-subheader v-if="item.header">{{ item.header }}</v-list-subheader>
          <v-list-item v-else  :to="item.to" rounded="lg" class="mb-1">
            <template v-slot:prepend>
              <vue-feather :type="item.icon" class="feather-sm v-icon v-icon--size-default"></vue-feather>
            </template>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>        

        </template>
      </v-list>
    </v-navigation-drawer>
</template>

<style lang="scss" src="./VerticalSidebar.scss"></style>