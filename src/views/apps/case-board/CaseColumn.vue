<script setup lang="ts">
const props = defineProps({
  heading: String,
  bg_color: String
});
</script>

<template>
    <v-col cols="auto" lg="3">
     <v-card class="pl-3 pr-3" sm="6" color="transparent">
        <v-toolbar color="transparent">
            <v-toolbar-title class="font-weight-medium">
                <div class="pa-2 rounded-circle d-inline-block" :style="{'background-color': bg_color + '!important'}" ></div>
                  {{ heading }}
            </v-toolbar-title>
        </v-toolbar>
        <div>
            <slot />
        </div>
    </v-card>
</v-col>
</template>
