<script setup lang="ts">
import { ref } from "vue";

const message = ref("Hey!");
const loading = ref(false);

function clickMe() {
  loading.value = true;
  message.value = "Wait for it...";
  setTimeout(() => {
    loading.value = false;
    message.value = "You've clicked me!";
  }, 2000);
}
</script>
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TextfieldIconSlots -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <p class="text-subtitle-1 text-grey-darken-1">
      Instead of using prepend / append / append-outer icons you can use slots
      to extend input's functionality.
    </p>
    <div class="mt-4">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="message"
                outlined
                clearable
                label="Message"
                type="text"
              >
                <template v-slot:prepend>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ props }">
                      <v-icon v-bind="props">mdi-help-circle-outline</v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-progress-circular
                      v-if="loading"
                      size="24"
                      color="info"
                      indeterminate
                    ></v-progress-circular>
                    <img
                      v-else
                      width="24"
                      height="24"
                      src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                      alt=""
                    />
                  </v-fade-transition>
                </template>
                <template v-slot:append-outer>
                  <v-menu style="top: -12px" offset-y>
                    <template v-slot:activator="{ props }">
                      <v-btn v-bind="props">
                        <v-icon left>mdi-menu</v-icon>
                        Menu
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text class="pa-6">
                        <v-btn large flat color="primary" @click="clickMe"
                          ><v-icon left>mdi-target</v-icon>Click me</v-btn
                        >
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>
