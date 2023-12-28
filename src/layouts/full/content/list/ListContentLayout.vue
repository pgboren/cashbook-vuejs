<template>
<v-card class="content-card" min-width="300" >
    <v-card-text>
        <v-row class="title pa-3" style="align-items: center;">
            <v-col>
                <slot name="title">{{ title }}</slot>
            </v-col>
            <v-col cols="2" class="text-right">
                <slot name="action"/>
            </v-col>
        </v-row>
        <v-row class="ma-0">
            <v-sheet rounded="lg" style="width: 100%;">
          <slot name="content"/>
        </v-sheet>
            
        </v-row>
    </v-card-text>
</v-card>
</template>

<script lang="ts" src="./ListContentLayout.ts"></script>
<style lang="scss" src="./ListContentLayout.scss"></style>