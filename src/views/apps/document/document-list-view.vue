<template>

  <ContentLayout title="{{ view.title }}">

        <template #title>
          <v-breadcrumbs :items="getBreadcrumbsData()">
            <template v-slot:prepend>
              <v-icon :icon="docinfo?.list.icon"></v-icon>
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
            :headers="docinfo.list.columns"
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
                  <td v-for="column in docinfo?.list.columns">
                     <StringFieldValue v-if="column.type == 'string'" :doc="item" :name="column.key" /> 
                     <RoundedPhotoFieldValue v-if="column.type == 'photo'" :readonly="true" :doc="item" :field="column"/>
                     <ArrayFieldValue v-if="column.type == 'array'" :doc="item" :field="column"  />
                    <DateTimeFieldValue v-if="column.type == 'datetime'" :doc="item" :field="column"  />
                    <BooleanFieldValue v-if="column.type == 'boolean'" :doc="item" :field="column"  />
                    <ColorFieldValue v-if="column.type == 'color'" :doc="item" :field="column"  />
                  </td>
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