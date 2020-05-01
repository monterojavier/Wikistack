const express = require("express");
const router = express.Router();

const { Page } = require("../models");
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki");
});

router.post("/", async (req, res, next) => {
  console.log(res.body);

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await page.save();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
