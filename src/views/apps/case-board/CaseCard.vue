<script setup lang="ts">
const props = defineProps({
  title: String,
  sub_title: String
});
</script>

<template>
    <v-card link class="mt-2 cursor-move" :class="{ 'not-draggable': !false }">
        <v-card-item class="case-card-item">
            <v-card-item>
                    <div class="d-flex align-center">
                        <div>
                            <v-img
                                :src="`/assets/images/users/1.jpg`"
                                width="35px"
                                class="rounded-circle img-fluid"
                            ></v-img>
                        </div>

                        <div class="ml-3">
                            <v-card-title>{{ title }}</v-card-title>
                            <v-card-subtitle>
                                {{ sub_title }}
                            </v-card-subtitle>
                        </div>
                    </div>
                
            </v-card-item>
        </v-card-item>
    </v-card>
    
</template>

<style lang="scss" src="./CaseCard.scss"></style>