// Файл routes/games.js

const gamesRouter = require("express").Router();

const findAllGames = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);

module.exports = gamesRouter;
