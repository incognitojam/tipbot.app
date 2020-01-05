<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-chip :color="statusColor" v-on="on" class="mx-1">
        <v-icon class="mr-1">{{ icon }}</v-icon>
        {{ status }}
      </v-chip>
    </template>
    <span>{{ name }}</span>
  </v-tooltip>
</template>

<script>
import axios from "axios";
import config from "../config";

export default {
  name: "status-chip",
  props: {
    color: {
      type: String,
      default: "secondary"
    },
    icon: {
      type: String,
      default: "mdi-web"
    },
    name: {
      type: String,
      default: "Service"
    },
    endpoint: {
      type: String,
      required: true
    }
  },
  data: () => ({
    status: "Loading...",
    error: false
  }),
  computed: {
    statusColor: function() {
      return this.error ? "error" : this.color;
    }
  },
  mounted: function() {
    axios
      .get(`${config.apiUrl}/${this.endpoint}`)
      .then(response => {
        this.status = response.data.status;
      })
      .catch(() => {
        this.error = true;
        this.status = "Error";
      });
  }
};
</script>
