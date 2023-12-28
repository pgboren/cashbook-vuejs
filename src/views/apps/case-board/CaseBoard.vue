<template>
    <!-- <BaseBreadcrumb
        :title="page.title"
        :breadcrumbs="breadcrumbs">
    </BaseBreadcrumb> -->
    

        <div  no-gutters class="d-flex flex-row mb-6 ">
        <CaseColumn v-for="column in board.clumns" :heading="column.name" :bg_color="column.color">
            <draggable
            :force-fallback="true"
            :scroll-sensitivity="250"
            :list="backlog"
                group="people"
                ghost-class="ghost"
                class="list-group"
                item-key="name">
                <template #item="{ element }">
                    <CaseCard :title="element.name" :sub_title="element.sub_title"/>
                </template>
            </draggable>
        </CaseColumn>   
    </div>
</template>

<script lang="ts" src="./CaseBoard"></script>
<style lang="scss" src="./CaseBoard.scss"></style>