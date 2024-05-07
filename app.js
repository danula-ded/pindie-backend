// app.js
// базовое =
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("./middlewares/cors");
//роуты
const mainRoute = require("./routes/main");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");

const PORT = 3000;
const app = express();

const connectToDatabase = require("./database/connect");

connectToDatabase();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  usersRouter,
  gamesRouter,
  categoriesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
