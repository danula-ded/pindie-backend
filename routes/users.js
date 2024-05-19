// Создаём роут для запросов пользователей
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const {
  findAllUsers,
  createUser,
  findUserById,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
} = require("../controllers/users");

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
