<template>
  <div class="home">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-4">
            <h1 class="pt-4 px-4 text-center">Welcome to tipbot.app</h1>

            <v-card-text>
              <p class="body-1">
                A cross-platform cryptocurrency tipping service with
                integrations for different chat platforms and streaming sites.
              </p>
            </v-card-text>

            <v-card-actions class="mx-auto">
              <v-container>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="10" md="8" lg="7" xl="6">
                    <v-btn block x-large color="primary" to="about">
                      <v-icon class="mr-2">mdi-login</v-icon>
                      Get Started
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
