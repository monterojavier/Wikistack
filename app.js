const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
});
