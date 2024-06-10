const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
  title: String,
  author: String,
  body: String,
  tags: [String],
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const Article = model("Article", articleSchema);
module.exports = Article;
