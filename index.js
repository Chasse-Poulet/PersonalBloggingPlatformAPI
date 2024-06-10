require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Config import
const db = require("./config/mongo");
const swagger = require("./config/swagger");

// Routers import
const articleRouter = require("./components/articles/api");

const app = express();
const port = 3000;

// Config setup
db();
swagger(app);

app.use(express.json());
app.use(cors());

// Routes setup
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
