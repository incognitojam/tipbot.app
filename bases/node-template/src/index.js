const express = require("express");
const bodyParser = require("body-parser");

const service = process.env.TIPBOT_SERVICE || "unknown";
const sha1 = process.env.TIPBOT_SHA1;
const version = process.env.TIPBOT_VERSION || "unknown";

// Setup Express app on port 3000.
const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get("/debug", (req, res) => {
  res.send({
    service,
    template: {
      sha1,
      version
    }
  });
});

app.listen(port, () => {
  let details = `template version ${version}`;
  if (sha1) {
    details += ` - ${sha1.substring(0, 8)}`;
  }

  console.log(`${service} service (${details}) listening on port ${port}.`);
});

// Listen for signals (e.g. CTRL+C pressed) and exit the process if received
const exit = value => () => process.exit(128 + value);
process.on("SIGINT", exit(2));
process.on("SIGQUIT", exit(3));
process.on("SIGTERM", exit(15));

module.exports = {
  app,
  service,
  template: {
    sha1,
    version
  }
};
