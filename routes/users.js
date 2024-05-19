// Создаём роут для запросов пользователей
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
} = require("../controllers/users");

// Обрабатываем запросs с роутом '/users'
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.put(
  "/users/:id", // Слушаем запросы по эндпоинту
  updateUser, // Обновляем запись в MongoDB
  sendUserUpdated // Возвращаем ответ на клиент
);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
