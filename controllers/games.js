// Файл controllers/games.js

const sendAllGames = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // Вернём найденные игры в формате JSON
  res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

const sendGameById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.game));
};

module.exports = { sendAllGames, sendGameCreated, sendGameById };
