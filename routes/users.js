// Создаём роут для запросов пользователей
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");

// Обрабатываем запросs с роутом '/users'
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id", // Слушаем запросы по эндпоинту
  checkEmptyNameAndEmail,
  updateUser, // Обновляем запись в MongoDB
  sendUserUpdated // Возвращаем ответ на клиент
);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
