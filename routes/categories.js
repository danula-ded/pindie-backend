// Создаём роут для запросов категорий
const categoriesRouter = require("express").Router();

// Импортируем вспомогательные функции
const findAllCategories = require("../middlewares/categories");
const sendAllCategories = require("../controllers/categories");

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
