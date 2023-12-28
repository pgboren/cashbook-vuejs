<template>
    <v-card class="view-content" min-width="500px" >

        <v-card-text class="pa-0">
            <v-row class="title pa-0" style="align-items: center;">
                <v-col><slot name="title">{{ title }}</slot></v-col>
                <v-col cols="2" class="text-right"><slot name="action"/></v-col>
            </v-row>
            <v-row class="ma-0">
                
                    <v-sheet rounded="lg" class="border-b">
                    <slot name="content"/>
                    </v-sheet>
            </v-row>

        </v-card-text>
    </v-card>
    </template>

<script lang="ts" src="./ViewContentLayout.ts"></script>
<style lang="scss" src="./ViewContentLayout.scss"></style>