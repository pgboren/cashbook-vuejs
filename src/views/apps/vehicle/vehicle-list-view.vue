<template>

  <ContentLayout title="{{ view.title }}">

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

        <template #search>

        <v-col cols="auto">
            <v-row justify="center">
                <v-col cols="12" sm="6" md="10" class="pr-1">
                  <v-text-field 
                    density="compact"
                    variant="solo"
                    label="ស្វែងរក"
                    @click:append-inner="onSearch"
                    v-model="keyword"
                    append-inner-icon="mdi-magnify"
                    size="small"
                    single-line hide-details/>
                </v-col>
                <v-col cols="12" sm="6" md="2" class="pl-1">
                    <v-btn color="#ffffff" icon="mdi-filter-variant" variant="solo" rounded="lg" size="small"/>
                </v-col>
              </v-row>
        </v-col>
        

        </template>

        <template #action>
          <v-btn color="#ffffff" icon="mdi-plus" variant="solo" rounded="lg" size="small"  @click="addNew" />
        </template>

        <template #content>

          <QuestionDialog title="សំណួរ" content="តើអ្នកពិតជាចង់លុបឈ្មោះអ្នកប្រើប្រាស់នេះប្រាកដមែន?" 
          v-model="showDeleteDialog" 
          v-on:deleteDialogButtonClick="deleteDialogButtonClick" />
          <v-row dense class="pa-2">
              <v-col v-for="doc in docs" :key="doc.name" :cols="2">
                <v-card class="rounded-0 vehicle-card">
                  <v-img
                  :src="`${ config.base + '/' + doc.photo}`" 
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="180px"
                    cover>
                    <v-toolbar density="compact" color="rgba(0, 0, 0, 0)">
                      <template v-slot:append>
                        <v-btn class="btn-menu" size="small" icon="mdi-dots-vertical"></v-btn>
                      </template>
                    </v-toolbar>
                  </v-img>
                  <div class="title">
                    <v-table class="vehicle-property">
                      <tbody>
                        <tr><td colspan="2" class="name">{{ doc.name }} - {{ doc.color }} - {{ doc.horsepower }} - {{ doc.year}} </td></tr>
                        <tr><td class="label">តំលៃ</td><td class="text-red">{{ doc.price }}</td></tr>
                        <tr><td class="label">ម៉ូដែល</td><td>{{ doc.model }}</td></tr>
                        <tr><td class="label">លេខតួរ</td><td>{{ doc.chassisno }}</td></tr>
                        <tr><td class="label">លេខម៉ាស៊ីន</td><td>{{ doc.engineno }}</td></tr>
                        <tr><td class="label">លក្ខណ</td><td>{{ doc.condition }}</td></tr>
                        <tr><td class="label">ស្ថានភាព</td><td class="text-green">នៅ​ក្នុង​ស្តុក</td></tr>
                      </tbody>
                    </v-table>
                  </div>
                </v-card>
              </v-col>

              <Observer @intersect="loadMoreDoc()" />
          </v-row>
          
        </template>
  </ContentLayout>
  
</template>
<script lang="ts" src="./vehicle-list-view.ts"></script>
<style lang="scss" src="./vehicle-list-view.scss"></style>./document-list-view.js./document-list-view.js