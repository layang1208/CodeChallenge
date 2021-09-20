const config = require("config");
const express = require("express");
const app = express();
const port = process.env.PORT || config.get("backendPort");

require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();

const server = app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = server;
