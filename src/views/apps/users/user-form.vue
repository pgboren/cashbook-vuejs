<template>
    <div class="d-flex flex-column" style="width: 400px;">
      <div class="v-container">
        <v-form ref="form">
            <v-text-field v-model="model.username" 
                      prepend-inner-icon="mdi-account"
                      :counter="10"
                      :rules="rules.username"
                      ref="usernameField"
                      label="ឈ្មោះ" required/>
                    
                  <v-text-field v-model="model.email" 
                    prepend-inner-icon="mdi-email"
                    label="អ៊ីមែល" 
                    type="email" required
                    :rules="rules.email"
                    ref="emailField"/>

                  <v-text-field
                    v-model="model.password" 
                    :append-inner-icon="password_visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="password_visible ? 'text' : 'password'"
                    label="ពាក្យសំងាត់"
                    prepend-inner-icon="mdi-lastpass"
                    @click:append-inner="password_visible = !password_visible"
                    required
                    :rules="[rules.password.required, rules.password.min]"
                    ref="passwordField"/>
                  
                  <v-text-field
                    v-model="model.confirmPassword" 
                    :append-inner-icon="confirm_password_visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="confirm_password_visible ? 'text' : 'password'"
                    label="ផ្ទៀងផ្ទាត់ពាក្យសំងាត់"
                    prepend-inner-icon="mdi-lastpass"
                    @click:append-inner="confirm_password_visible = !confirm_password_visible"
                    ref="confirmPasswordField"
                    :rules="[rules.confirm_password.required, rules.confirm_password.min, confirmPasswordMatchRule]"
                    required/>

                    <v-combobox
                    v-model="model.roles"
                    :items="roles"
                    label="តួនាទី"
                    item-title="name"
                    item-value="_id"
                    chips
                    multiple
                    prepend-inner-icon="mdi-account-multiple">
                  </v-combobox>

                  <v-switch color="primary"
                    v-model="model.enable"
                    label="សកម្ម"
                ></v-switch>
        </v-form>
      </div>
    </div>
  </template>
  
  <script lang="ts" src="./user-form.ts"></script>
  