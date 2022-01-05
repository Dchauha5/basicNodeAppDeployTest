const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World I am new");
});

app.listen(80);
