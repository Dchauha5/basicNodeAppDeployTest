const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(80, () => {
  console.log("Server is running on port 80");
});
