<template>
    <td>
        {{ document.username }}
    </td>
    <td>
      {{ document.email }}
    </td>
    <td>
      <v-chip class="user-role-chip" label v-for="(role, index) in document.roles" variant="tonal" 
      size="small" color="blue" :class="index > 0 ? 'ml-1' : '' " >
        {{ role.name }}
      </v-chip>
    </td>
    <td class="v-data-table__td v-data-table-column--align-end">
      <v-chip class="user-role-chip" label variant="tonal" size="small" :color="document.deleted? 'red' : 'blue'" >
        {{ document.deleted? 'deleted': 'active' }}
      </v-chip>
    </td>
    <td></td>
</template>
<script lang="ts" src="./user-list-item.ts"></script>
<style lang="scss" src="./user-list-item.scss"></style>
