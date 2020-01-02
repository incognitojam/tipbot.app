const app = require("./index");

app.get("/status", (req, res) => {
  res.send({
    status: "OK"
  });
});
