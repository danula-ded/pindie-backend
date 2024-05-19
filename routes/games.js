// Файл routes/games.js

const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

module.exports = gamesRouter;
