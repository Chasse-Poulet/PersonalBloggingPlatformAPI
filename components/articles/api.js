const express = require("express");
const ArticleService = require("./article.service");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const filter = req.body;

    let articles;
    if (filter && filter.length > 0) {
      articles = await ArticleService.getArticles(filter);
    } else {
      articles = await ArticleService.getAllArticles();
    }

    if (!articles) {
      res.status(404).json({ error: "Articles not found" });
      return;
    }

    res.json(articles);
  })
  .post(async (req, res) => {
    const article = req.body;
    const newArticle = await ArticleService.createArticle(article);

    if (!newArticle) {
      res.statut(400).json({ error: "Unable to create article" });
      return;
    }

    res.json(newArticle);
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const articleId = req.params.id;
    const article = await ArticleService.getArticleById(articleId);

    if (!article) {
      res.status(404).json({ error: "Article not found" });
      return;
    }

    res.json(article);
  })
  .put(async (req, res) => {
    const articleId = req.params.id;
    const article = req.body;
    const updatedArticle = await ArticleService.updateArticle(
      articleId,
      article
    );

    if (!updatedArticle) {
      res.status(404).json({ error: "Article not found" });
      return;
    }

    res.json(updatedArticle);
  })
  .delete(async (req, res) => {
    const articleId = req.params.id;
    const article = await ArticleService.deleteArticle(articleId);

    if (!article) {
      res.status(404).json({ error: "Article not found" });
      return;
    }

    res.json(article);
  });

module.exports = router;
