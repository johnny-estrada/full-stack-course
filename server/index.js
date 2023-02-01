// Instance of the framework express
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(cors());
app.use(express.json());

// Routers
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

app.listen(5001, () => {
  console.log("Server is running on port 5001...");

  db.sequelize.sync().then(() => {
    console.log("Database connection successful...");
  });
});
