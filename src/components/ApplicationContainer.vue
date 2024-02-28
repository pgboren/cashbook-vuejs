
<template>
    
    <v-main >
      <VerticalHeader/>
      <VerticalSidebarVue/>
      <v-col class="view-place-holder">
        <slot></slot>
      </v-col>
    </v-main>  
</template>
<script lang="ts" src="./ApplicationContainer.ts"></script>