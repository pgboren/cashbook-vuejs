<template>
    <ContentLayout>
        <template #title>
          <v-breadcrumbs :items="getBreadcrumbsData()">
            <template v-slot:prepend>
              <vue-feather type="users" class="feather-sm v-icon v-icon--size-default"></vue-feather>
            </template>
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        </template>
        
        <template #action>
          <v-btn  color="green" size="small" icon="mdi-check" @click="validate()" class="ml-auto d-none d-sm-flex btn-action" variant="text"/>
        </template>

        <template #form>
          <UserForm  ref="docForm" v-model="model"/>     
        </template>
    </ContentLayout>
</template>
<script lang="ts" src="./add-vehicle-view.ts"></script>
<style lang="scss" src="./add-vehicle-view.scss"></style>