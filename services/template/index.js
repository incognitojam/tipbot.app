const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Template service listening on port ${port}`);
});

// Listen for the SIGINT event (CTRL+C pressed) and exit the process if received
process.on("SIGINT", () => {
  console.log("Received SIGINT. Exiting.");
  process.exit(130);
});

module.exports = app;
