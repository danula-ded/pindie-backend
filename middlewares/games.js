// Файл middlewares/games.js

// Импортируем модель
const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  // По GET-запросу на эндпоинт /games найдём все документы категорий
  req.gamesArray = await games.find({});
  // Выведем в терминал результат поиска
  console.log(req.gamesArray);
  next();
};

// Экспортируем функцию поиска всех игр
module.exports = findAllGames;
