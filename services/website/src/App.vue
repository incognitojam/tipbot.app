<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="tipbot.app Logo"
            class="shrink mx-2"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <status-chip
        name="Discord Bot"
        color="#7289da"
        icon="mdi-discord"
        endpoint="discord/status"
      />
      <status-chip
        name="Coin Service"
        color="info"
        icon="mdi-coin-outline"
        endpoint="coin/status"
      />

      <v-btn
        href="https://github.com/IncognitoJam/tipbot.app"
        target="_blank"
        text
      >
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
import StatusChip from "./components/StatusChip";

export default {
  name: "app",
  components: { StatusChip }
};
</script>
