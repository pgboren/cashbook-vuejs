<template>

  <ContentLayout title="{{ view.title }}">

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
            <v-btn color="#ffffff"  size="small" icon="mdi-plus" 
            class="ml-auto btn-action" variant="text"  @click="addNew" />  
        </template>

        <template #content>
          
          <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="docinfo.list.headers"
            :items-length="totalItems"
            :items="docs"
            :loading="loading"
            :search="search"
            :fixed-header="true"
            :height="calculateHeight()"
            :hover="true"
            @update:options="fetchDocs">
            
            <template v-slot:header="{ props }">
              <tr>
                <th v-for="header in props.headers" :key="header.text">
                  {{ header.text }}
                </th>
              </tr>
            </template>

            <template v-slot:item="{ item }">
              <slot name="row">
                <tr @click="handleTableRowClicked(item)">
                  <userListRow v-if="docinfo.name == 'USER'" :document="item"/>
                </tr>
            </slot>
            </template>

          </v-data-table-server>
          
        </template>
  </ContentLayout>
  
</template>

<style scoped>
.custom-table th {
  border-right: '1px solid';
}

.custom-table td {
  border-right: '1px solid';
}
</style>

<script lang="ts" src="./document-list-view.ts"></script>
<style lang="scss" src="./document-list-view.scss"></style>