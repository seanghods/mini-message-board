var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("new", { title: "New Message" });
});

router.post("/new", function (req, res) {
  const author = req.body.author;
  const message = req.body.message;

  // Create a new message object and push it to the messages array
  messages.push({
    text: message,
    user: author,
    added: new Date(),
  });

  // Redirect to the home page after adding the message
  res.redirect("/");
});

module.exports = router;
