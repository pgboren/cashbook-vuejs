<template>
    
    <v-row class="view-header" >
        <v-col cols="4" class="title">
            <slot name="title">{{ title }}</slot>
        </v-col>
        <v-col cols="4" class="search">
        </v-col>
        <v-col cols="4" class="action"><slot name="action"/></v-col>
    </v-row>
    
    <v-row class="view-body pl-1 pr-1">
        <slot name="body"/>
    </v-row>
</template>

<script lang="ts" src="./BaseViewContentLayout.ts"></script>
<style lang="scss" src="./BaseViewContentLayout.scss"></style>