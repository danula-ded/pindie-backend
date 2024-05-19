// Файл routes/games.js

const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put(
  "/games/:id", // Слушаем запросы по эндпоинту
  // Шаг 1. Находим игру по id из запроса
  // Шаг 2. Выполняем проверки для корректного обновления (опционально)
  updateGame, // Шаг 3. Обновляем запись с игрой
  sendGameUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
);

module.exports = gamesRouter;
