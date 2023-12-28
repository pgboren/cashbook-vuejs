<script setup lang="ts">
</script>

<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TextfieldDisabledReadonly -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <p class="text-subtitle-1 text-grey-darken-1">
           Text fields can be <code>disabled</code> or <code>readonly</code>.
        </p>
        <div class="mt-4">
            <v-form>
                <v-container>
                <v-row>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Regular"
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Regular"
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Solo"
                        solo
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Solo"
                        solo
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Filled"
                        filled
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Filled"
                        filled
                        readonly
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Outlined"
                        outlined
                        disabled
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        value="John Doe"
                        label="Outlined"
                        outlined
                        readonly
                    ></v-text-field>
                    </v-col>

                </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
</template>