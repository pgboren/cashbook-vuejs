<template>

  <ContentLayout title="អ្នកប្រើប្រាស់">
        <template #title>
          <v-breadcrumbs :items="getBreadcrumbsData()" class="pa-0">
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
          <QuestionDialog title="សំណួរ" content="តើអ្នកពិតជាចង់លុបឈ្មោះអ្នកប្រើប្រាស់នេះប្រាកដមែន?" v-model="showDeleteDialog" v-on:deleteDialogButtonClick="deleteDialogButtonClick" />
          <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="docs"
            :loading="loading"
            :search="search"
            item-value="name"
            @update:options="loadItems">
          <template v-slot:item.username="{ item }">
              <div class="d-flex align-center py-3">
                <div>
                  <v-img :src="`${ config.base + '/' + item.avatar}`"
                    width="40px" class="rounded-circle img-fluid"></v-img>
                </div>
                <div class="pl-4 textPrimary ">
                  {{ item.username }}
                </div>
              </div>
            </template>
            <template v-slot:item.roles="{ value }">
              <v-chip class="user-role-chip" label v-for="(role, index) in value" variant="tonal" size="small" color="blue" :class="index > 0 ? 'ml-1' : '' " >
                  {{ role }}
              </v-chip>
            </template>
            <template v-slot:item.deleted="{ value }">
              
              <v-chip class="user-role-chip" label variant="tonal" size="small" :color="value? 'red' : 'blue'" >
                {{ value }}
              </v-chip>

            </template>
            <template v-slot:item.actions="{ item }">
              <v-menu bottom left>
                <template v-slot:activator="{ props }">
                  <v-btn color="#ffffff" v-bind="props" size="small" icon="mdi-dots-vertical" variant="text"/>
                </template>
                  <v-list>
                    <v-list-item v-for="(menuItem, i) in actions" :key="i" @click="menuItem.action(item._id)">
                      <template v-slot:prepend>        
                        <v-icon  size="small">{{ menuItem.icon }}</v-icon>   
                      </template>
                      <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
                    </v-list-item>
                </v-list>
              </v-menu>              
            </template>
        </v-data-table-server>

        </template>
  </ContentLayout>
  
</template>
<script lang="ts" src="./user-list.ts"></script>
<style lang="scss" src="./user-list.scss"></style>