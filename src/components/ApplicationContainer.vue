
<template>
    <VerticalHeader/>
    
    <VerticalSidebarVue/>
    
    <v-main >
      <v-container class="pa-2">
        <slot></slot>
      </v-container>
    </v-main>  
</template>
<script lang="ts" src="./ApplicationContainer.ts"></script>