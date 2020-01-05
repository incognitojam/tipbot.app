const production = process.env.NODE_ENV === "production";

const config = {
  apiUrl: production ? "https://api.tipbot.app" : "http://api.localhost"
};

module.exports = config;
