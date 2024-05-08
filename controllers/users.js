const sendAllUsers = (req, res) => {
  // Установим заголовок ответа в формате JSON
res.setHeader('Content-Type', 'application/json');
// Отправим данные в виде JSON-объекта, 
// которые подготовим в миддлваре findAllUsers
res.end(JSON.stringify(req.usersArray));
};

// Экспортируем контроллер
module.exports = sendAllUsers;
