const Article = require("./article.model");

async function getAllArticles() {
  return await Article.find();
}

async function getArticles(filter) {
  return await Article.find(filter);
}

async function getArticleById(id) {
  return await Article.findById(id).exec();
}

async function createArticle(properties) {
  const article = new Article({ ...properties });
  await article.save();
  return article;
}

async function deleteArticle(id) {
  return await Article.findByIdAndDelete(id);
}

async function updateArticle(id, article) {
  return await Article.findByIdAndUpdate(id, article, {
    new: true,
    runValidators: true,
  });
}

const ArticleService = {
  getAllArticles,
  getArticles,
  getArticleById,
  createArticle,
  deleteArticle,
  updateArticle,
};

module.exports = ArticleService;
