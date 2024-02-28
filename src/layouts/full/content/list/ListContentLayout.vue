<template>
    
    <v-row class="view-header" >
        <v-col cols="4" class="title">
            <slot name="title">{{ title }}</slot>
        </v-col>
        <v-col cols="4" class="search">
            <v-text-field 
                    density="compact"
                    variant="solo"
                    label="ស្វែងរក"
                    append-inner-icon="mdi-magnify"
                    single-line
                    rounded  hide-details/>
        </v-col>
        <v-col cols="4" class="action"><slot name="action"/></v-col>
    </v-row>
    
    <v-row class="list-content-view pl-1 pr-1">
        <slot name="content"/>
    </v-row>
</template>

<script lang="ts" src="./ListContentLayout.ts"></script>
<style lang="scss" src="./ListContentLayout.scss"></style>