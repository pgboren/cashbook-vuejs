<template>

<MediaUploadDialog :title="docInfo.view.media_upload_dialog_title" :message="docInfo.view.media_upload_dialog_msg" v-model="showUploadDialog" />
<QuestionDialog title="សំណួរ" :content="docInfo.view.delete_question" v-model="showDeleteDialog" v-on:deleteDialogButtonClick="deleteDialogButtonClick" />
  
  <ContentLayout>
    <template #title>
      <v-breadcrumbs :items="getBreadcrumbsData()">
        <template v-slot:prepend>
          <v-icon :icon="docInfo.icon"></v-icon>
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
            <v-list-item v-for="(menuItem, i) in docInfo.view.actions" :key="i" @click="onOptionMenuClicked(menuItem)">
              <template v-slot:prepend>        
                <v-icon  size="small">{{ menuItem.icon }}</v-icon>   
              </template>
              <v-list-tile-title>{{ menuItem.title }}</v-list-tile-title>
            </v-list-item>
          </v-list>
        </v-menu>              

        </template>

        <template #body>
          <v-col cols="3" class="pa-0">
          <v-sheet 
            elevation="12"
            class="pa-4 text-center"
            rounded="lg">
              <v-table>
              <tbody>

                <tr v-for="field in docInfo.view.fields">

                  <td class="pa-2 text-left">
                    {{ field.title }}
                  </td>
                  <td class="pa-2 text-left">
                    <RoundedPhotoFieldValue v-if="field.type == 'photo'" :readonly="false" :doc="doc" :field="field"/>
                    <StringFieldValue v-if="field.type == 'string'" :doc="doc" :name="field.name" />
                    <ArrayFieldValue v-if="field.type == 'array'" :doc="doc" :field="field"  />
                    <DateTimeFieldValue v-if="field.type == 'datetime'" :doc="doc" :field="field"  />
                    <BooleanFieldValue v-if="field.type == 'boolean'" :doc="doc" :field="field"  />
                    <ColorFieldValue v-if="field.type == 'color'" :doc="doc" :field="field"  />
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-sheet>
      </v-col>
    </template>
  </ContentLayout>
</template>
<script lang="ts" src="./document-view.ts"></script>
<style lang="scss" src="./document-view.scss"></style>