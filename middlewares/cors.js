const allowedCors = [
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
  "localhost:3000",
];

function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    // Если есть в массиве
    res.header("Access-Control-Allow-Origin", origin);
  }

  next();
}

module.exports = cors;
