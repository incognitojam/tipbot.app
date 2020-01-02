<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Tipbot.app Logo"
            class="shrink mx-2"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/IncognitoJam/tipbot" target="_blank" text>
        <span class="mr-2">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>
