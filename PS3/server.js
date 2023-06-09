const express = require("express");
const bodyParser = require("body-parser");
const ps3Router = require("./routes/ps3");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");

app.use("/ps3", ps3Router);

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
