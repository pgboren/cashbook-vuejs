<template>
  <ContentLayout>
    <template #title>
      <v-breadcrumbs :items="getBreadcrumbsData()">
        <template v-slot:prepend>
          <vue-feather :type="view.icon" class="feather-sm v-icon v-icon--size-default"></vue-feather>
        </template>
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>
      
    </template>

    <template #action>

        <v-menu bottom left>
          <template v-slot:activator="{ props }">
            <v-btn color="#ffffff" v-bind="props"  size="small" icon="mdi-dots-vertical" class="ml-auto btn-action"  variant="text"/>
          </template>
          <v-list>
            
          </v-list>
        </v-menu>              

        </template>

        <template #body>
          <v-col cols="3" class="pa-0">
          <v-sheet 
            elevation="12"
            class="pa-4 text-center"
            rounded="lg">
             
          </v-sheet>
      </v-col>
    </template>
  </ContentLayout>
</template>
<script lang="ts" src="./user-profile-picture-upload.ts"></script>
<style lang="scss" src="./user-profile-picture-upload.scss"></style>