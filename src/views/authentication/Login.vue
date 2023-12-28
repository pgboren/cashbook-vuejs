<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col lg="11" sm="8" xl="3">
        <v-card elevation="10" class="justify-center">
          <v-row>
            <v-col>
              <div class="pa-7 pa-sm-12">
                <div class="pa-2 text-center">
                      <img src="@/assets/images/logos/logo.png" style="width: 120px; margin: auto;"  />
                      <h2 class="mt-4 text--darken-2 text-center">ហាងសុលាភ លក់ម៉ូតូសុលាភ</h2>
                    <h3 class="mt-4 text--darken-2 text-center">សូមស្វាគមន៍!</h3>
                </div>                    
                
                  <v-text-field
                    v-model="username"
                    label="ឈ្មោះអ្នកប្រើប្រាស់"
                    class="mt-3"
                    :rules="usernameRules"
                    required
                    variant="outlined"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    label="លេខសំងាត់"
                    required
                    class="mt-3"
                    variant="outlined"
                    type="password"
                  ></v-text-field>
                  <v-btn color="primary" block class="mt-2 py-6" @click="onLogin"  >ចូល</v-btn>

              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./Login"></script>