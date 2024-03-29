<template>
      <v-col cols="3">

          <v-row class="title pa-0" style="align-items: center;">
                <v-col><slot name="title">User and Access Right</slot></v-col>
                <v-col cols="2" class="text-right"><slot name="action">
                  <v-btn color="#ffffff"  size="small" icon="mdi-plus" 
                  class="ml-auto btn-action" variant="text" />  
                </slot></v-col>
            </v-row>

            <v-sheet
            elevation="12"
            class="text-center"
            rounded="lg">
                <v-table>
                <tbody>
                  
                </tbody>
              </v-table>
            </v-sheet>
          </v-col>
  </template>
  
  <script lang="ts" src="./branch-users.ts"></script>
  <style lang="scss" src="./branch-users.scss"></style>
