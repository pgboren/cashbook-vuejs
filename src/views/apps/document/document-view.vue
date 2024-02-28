<template>

  <QuestionDialog title="សំណួរ" :content="view.delete_question" v-model="showDeleteDialog" v-on:deleteDialogButtonClick="deleteDialogButtonClick" />

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
            <v-list-item v-for="(menuItem, i) in actions" :key="i" @click="menuItem.action()">
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

                <tr>
                  <td class="pa-2 text-left">រូបភាព</td>
                  <td class="pa-2 text-left">
                    <v-avatar size="50px">
                      <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                    </v-avatar>    
                  </td>
                </tr>

                <tr v-for="field in view.fields">

                  <td class="pa-2 text-left">
                    {{ field.title }}
                  </td>
                  <td class="pa-2 text-left">
                    <StringFieldValue v-if="field.type == 'string'" :doc="doc" :name="field.name" />
                    <ArrayFieldValue v-if="field.type == 'array'" :doc="doc" :field="field"  />
                    <DateTimeFieldValue v-if="field.type == 'datetime'" :doc="doc" :field="field"  />
                    <BooleanFieldValue v-if="field.type == 'boolean'" :doc="doc" :field="field"  />
                  </td>
                </tr>

                <!-- <tr>
                  <td class="pa-2 text-left">អ៊ីមែល</td>
                  <td class="pa-2 text-left">{{ doc.email }}</td>
                </tr>
                <tr>
                  <td class="pa-2 text-left">តួនាទី</td>
                  <td class="pa-2 text-left">
                    <v-chip class="user-role-chip" label v-for="(role, index) in doc.roles" variant="tonal" 
                    size="small" color="blue" :class="index > 0 ? 'ml-1' : '' " >
                      {{ role.name }}
                    </v-chip>

                  </td>
                </tr>
                <tr>
                  <td class="pa-2 text-left">ស្ថានភាព</td>
                  <td class="pa-2 text-left">
                    <v-chip class="user-role-chip" label variant="tonal" size="small" :color="doc.deleted? 'red' : 'blue'"  >
                      {{ doc.deleted? 'deleted': 'active' }}
                    </v-chip>
                  </td>
                </tr>
                <tr>
                  <td class="pa-2 text-left">ថ្ងៃបង្កើត</td>
                  <td class="pa-2 text-left">
                    {{ doc.createdAt }}
                  </td>
                </tr>
                <tr>
                  <td class="pa-2 text-left">ថ្ងៃកែរតំរូវ</td>
                  <td class="pa-2 text-left">
                    {{ doc.updatedAt }}
                  </td>
                </tr> -->

              </tbody>
            </v-table>
          </v-sheet>
      </v-col>
    </template>
  </ContentLayout>
</template>
<script lang="ts" src="./document-view.ts"></script>
<style lang="scss" src="./document-view.scss"></style>