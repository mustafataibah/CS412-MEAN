const express = require("express");
let router = express.Router();

router.get("/string", function (req, res) {
  res.render("template", { string: "Hey now" });
});

router.post("/string", function (req, res) {
  let str = req.body.string;
  res.render("template", { string: str, length: str.length });
});

router.get("/names/:name", function (req, res) {
  res.render("template", { string: req.params.name });
});

module.exports = router;
