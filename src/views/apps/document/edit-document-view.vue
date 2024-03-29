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
          <v-btn  color="green" size="small" icon="mdi-check" @click="saveButtonClicked()"  class="ml-auto d-none d-sm-flex btn-action" variant="text"/>
        </template>

        <template #form>
          <ColorForm v-if="$route.meta.docName == 'color'"  ref="docForm" v-model="model"/>     
          <UserForm v-if="$route.meta.docName == 'user'"  ref="docForm" v-model="model"/>     
          <RefdocForm v-if="$route.meta.docName == 'model'"  ref="docForm" v-model="model"/>
          <RefdocForm v-if="$route.meta.docName == 'condition'"  ref="docForm" v-model="model"/>
          <RefdocForm v-if="$route.meta.docName == 'category'"  ref="docForm" v-model="model"/>
          <ItemForm v-if="$route.meta.docName == 'item'"  ref="docForm" v-model="model"/>
          <BranchForm v-if="$route.meta.docName == 'branch'"  ref="docForm" v-model="model"/>
          
        </template>
    </ContentLayout>
</template>
<script lang="ts" src="./edit-document-view.ts"></script>