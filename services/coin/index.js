const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.listen(port, () => console.log(`Service listening on port ${port}`));

// Listen for signals (e.g. CTRL+C pressed) and exit the process if received
const exit = (value) => () => process.exit(128 + value);
process.on("SIGINT", exit(2));
process.on("SIGQUIT", exit(3));
process.on("SIGTERM", exit(15));

module.exports = app;
