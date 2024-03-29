<template>
    <div class="d-flex flex-column color-form" style="width: 400px;">
      <div class="v-container">
        <v-form ref="form">
          <v-text-field v-model="model.name"  ref="nameField" label="ឈ្មោះ" required/>
          <v-text-field v-model="model.code"  ref="nameField" label="លេខកូដ" required/>
        </v-form>
      </div>
    </div>
  </template>
  
  <script lang="ts" src="./refdoc-form.ts"></script>
  <style lang="scss" src="./refdoc-form.scss"></style>
