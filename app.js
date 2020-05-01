const express = require("express");
const morgan = require("morgan");
const wikiRouter = require("./routes/wiki.js");
// const user = require("./routes/user.js");
const { db, Page, User } = require("./models");

const app = express();

app.use("/wiki", wikiRouter);
app.use(express.static("public"));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello world");
  res.redirect("/wiki");
});

const init = async () => {
  try {
    await Page.sync();
    await User.sync();
    // await db.sync({force: true})
  } catch (err) {
    console.log(err);
  }
};

init();

const PORT = 3000;

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.listen(PORT, () => {
  console.log("I apologize for my actions");
});
