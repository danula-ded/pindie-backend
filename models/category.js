const mongoose = require('mongoose');
// Импорт модели для связывания 
const categoryModel = require('./category');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  // Добавляем свойство категории с массивом объектов, в котором укажем 
  // тип ObjectId и ref на существующую модель категорий
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: categoryModel,
  }],
});

module.exports = mongoose.model('game', gameSchema);