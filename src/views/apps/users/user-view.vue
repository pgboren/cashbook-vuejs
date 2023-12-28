<template>
  <QuestionDialog title="សំណួរ" content="តើអ្នកពិតជាចង់លុបឈ្មោះអ្នកប្រើប្រាស់នេះប្រាកដមែន?" v-model="showDeleteDialog" v-on:deleteDialogButtonClick="deleteDialogButtonClick" />
    <ContentLayout>
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
          <v-menu bottom left>
                <template v-slot:activator="{ props }">
                  <v-btn color="#ffffff" v-bind="props" size="small" icon="mdi-dots-vertical" class="ml-auto d-none d-sm-flex btn-action" variant="text"/>
                </template>
                  <v-list>
                    <v-list-item v-for="(menuItem, i) in actions" :key="i" @click="menuItem.action()">
                      <template v-slot:prepend>        
                        <v-icon  size="small">{{ menuItem.icon }}</v-icon>   
                      </template>
                      <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
                    </v-list-item>
                </v-list>
              </v-menu>              
        </template>

        <template #content>

          <div class="d-flex flex-column" style="width: 400px;">
                <div class="v-container">
            <v-table>
              <tbody>
                <tr>
                  <td :style="{ width: '130px' }">រូបភាព</td>
                  <td><v-img :src="`${ config.base + '/' + user.avatar}`" width="60px" class="ma-2 rounded-circle img-fluid"></v-img></td>
                </tr>
                <tr>
                  <td>ឈ្មោះ</td><td>{{ user.username }}</td>
                </tr>
                <tr>
                  <td>អ៊ីមែល</td><td>{{ user.email }}</td>
                </tr>
                <tr>
                  <td>តួនាទី</td>
                  <td>
                    <v-chip class="user-role-chip ma-1" label v-for="(role, index) in user.roles" variant="tonal" size="small" color="blue" :class="index > 0 ? 'ml-1' : '' " >
                      {{ role }}
                  </v-chip>
                  </td>
                </tr>
                <tr>
                  <td>ស្ថានភាព</td>
                  <td>
                    <v-chip class="user-role-chip" label variant="tonal" size="small" color="red" >
                      {{ user.deleted? 'deleted': 'active' }}
                    </v-chip>
                  </td>
                </tr>
                <tr>
                  <td>ថ្ងៃបង្កើត</td>
                  <td>
                      {{ user.createdAt }}
                  </td>
                </tr>
                <tr>
                  <td>ថ្ងៃកែរតំរូវ</td>
                  <td>
                    {{ user.updatedAt }}
                  </td>
                </tr>
              </tbody>
            </v-table>

          </div>
          </div>
          
        </template>
    </ContentLayout>
</template>
<script lang="ts" src="./user-view.ts"></script>
<style lang="scss" src="./user-view.scss"></style>