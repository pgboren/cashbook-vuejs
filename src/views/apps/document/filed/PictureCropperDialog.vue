<!-- StringComponent.vue -->
<template>
  <v-dialog v-model="isShowModal" max-width="200" class="dialog align-center">
    <v-card height="60vh" width="20vw">
      <v-sheet color="#202225">
      <v-card-item>
        <template v-slot:prepend>
          <v-card-title>
            <v-icon icon="mdi-crop" size="small" start></v-icon>
            Crop
          </v-card-title>
        </template>

        <v-divider class="mx-2" vertical></v-divider>

        <template v-slot:append>
          <v-btn
            icon="$close"
            size="small"
            variant="text"
          ></v-btn>
        </template>
      </v-card-item>
    </v-sheet>
      <v-card-text class="pa-2" style="overflow: hidden">
          <VuePictureCropper 
              ref="pictureCropper"
              :boxStyle="{
                width: '100%',
                height: '80%',
                backgroundColor: '#f8f8f8',
              }"
              :img="pic"
              :options="{
                viewMode: 1,
                dragMode: 'move',
                aspectRatio: 1
              }"
            />
      </v-card-text>
      <v-card-actions class="align-center">
          <v-btn
          prepend-icon="mdi-crop"
            variant="tonal"
            size="large"
            block
            @click="onCropButtonClicked">
              Crop
            </v-btn>
      </v-card-actions> 
    </v-card>
  </v-dialog>
  
</template>

<script lang="ts" src="./PictureCropperDialog.ts"></script>
<style lang="scss" src="./PictureCropperDialog.scss"></style>

