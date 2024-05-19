// Файл routes/games.js

const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put(
  "/games/:id", // Слушаем запросы по эндпоинту
  // Шаг 1. Находим игру по id из запроса (выполняеться в updateGame)
  // Шаг 2. Выполняем проверки для корректного обновления (опционально)
  updateGame, // Шаг 3. Обновляем запись с игрой
  sendGameUpdated // Шаг 4. Возвращаем на клиент ответ с результатом обновления
);

gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  deleteGame,
  sendGameDeleted /// Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = gamesRouter;
