<template>
    <ContentLayout>
        <template #title>
          <v-breadcrumbs :items="getBreadcrumbsData()">
            <template v-slot:prepend>
              <v-icon :icon="docInfo?.icon"></v-icon>
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
          <ColorForm v-if="$route.meta.docName == 'color'"  ref="docForm" v-model="model"/>     
          <UserForm v-if="$route.meta.docName == 'user'"  ref="docForm" v-model="model"/>     
          
        </template>
    </ContentLayout>
</template>
<script lang="ts" src="./add-document-view.ts"></script>
<style lang="scss" src="./add-document-view.scss"></style>