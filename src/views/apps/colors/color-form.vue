<template>
    <div class="d-flex flex-column color-form" style="width: 400px;">
      <div class="v-container">
        <v-form ref="form">
          <v-text-field v-model="model.name"  ref="nameField" label="ឈ្មោះ" required/>
          <v-text-field v-model="model.code"  ref="nameField" label="លេខកូដ" required/>
        </v-form>
        <VSwatches v-model="model.code" inline :swatches="swatches"/>
      </div>
    </div>
  </template>
  
  <script lang="ts" src="./color-form.ts"></script>
  <style lang="scss" src="./color-form.scss"></style>
