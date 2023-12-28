<template>
  <v-app-bar
    :color="customizer.darktheme ? '' : customizer.navbarColor"
    elevation="5"
    flat
    :priority="priority"
    class="border-b"
    :class="['v-topbar',customizer.navbarColor == '#f6f6f6' ? '' : 'text-white',]">

    <v-app-bar-nav-icon
      color="inherit"
      class="hidden-sm-and-down"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    />
    <v-app-bar-nav-icon
      color="inherit"
      class="hidden-md-and-up"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
    />

    <v-spacer />
    <v-menu anchor="bottom end" origin="auto" min-width="300">

      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="pa-0 px-1"
          elevation="0"
          color="transparent"
          plain
          :ripple="false">

          <v-avatar size="35">
            <img :src="avatar" width="40" :alt="username" />
          </v-avatar>
        
        </v-btn>
      </template>

      <v-list class="pa-6" elevation="10" rounded="lg">
        <h4 class="font-weight-medium fs-18">User Profile</h4>
        <div class="d-flex align-center my-4">
          <img :src="avatar" :alt="username" width="60" class="rounded-circle"/>
          <div class="ml-4">
            <h4 class="font-weight-medium fs-18">{{ username }}</h4>
            <!-- <span class="subtitle-2 font-weight-light">{{ username }}</span> -->
            <div class="d-flex align-center">
              <vue-feather
                type="mail"
                size="16"
                class="d-flex grey--text"
              ></vue-feather>
              <span class="subtitle-2 font-weight-light ml-1"
                >{{ email }}</span
              >
            </div>
          </div>
        </div>
        <v-list-item
          class="pa-3 mb-2"
          v-for="(item, i) in userprofile"
          :key="i"
          @click="href"
          :value="item"
          :title="item.title"
          :subtitle="item.desc"
          rounded="lg"
        >
          <template v-slot:prepend>
            <v-list-item-avatar start>
              <v-btn
                :color="item.color"
                variant="flat"
                icon
                elevation="0"
                size="small"
                class="mr-3">
                <vue-feather :type="item.icon" size="18"></vue-feather>
              </v-btn>
            </v-list-item-avatar>
          </template>
        </v-list-item>
        
        <v-btn
          block
          color="secondary"
          variant="flat"
          @click="logout"
          class="mt-4 py-4"
          >Logout</v-btn
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts" src="./VerticalHeader.ts"></script>