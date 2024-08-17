<div align="center">

   # Pindie-Backend

   ![Node.js](https://img.shields.io/badge/Node.js-v18.17.1-green)
   ![Express](https://img.shields.io/badge/Express.js-v4.18.2-green)
   ![MongoDB](https://img.shields.io/badge/MongoDB-v6.0-green)
   ![API](https://img.shields.io/badge/API-REST-green)

   [![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/danula-ded/pindie-backend/blob/main/LICENSE)

</div>

## Описание проекта

**Pindie-Backend** — серверная часть приложения Pindie, которая обеспечивает управление данными через API. Backend связывается с базой данных MongoDB и предоставляет функции для работы с играми, пользователями, и голосами.

Основные функции включают:
- Обработка запросов от фронтенда.
- Управление данными о пользователях и играх.
- Маршрутизация и обработка middleware.
- Взаимодействие с базой данных MongoDB.
- Защиту данных спомощью хэширования и простую защиту от DDOS-атак с помощью cors 

## Технологии

- **Node.js** — серверная платформа для выполнения JavaScript-кода.
- **Express.js** — фреймворк для создания веб-приложений на Node.js.
- **MongoDB** — NoSQL база данных, использующаяся для хранения данных.

## Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/danula-ded/pindie-backend.git
   cd pindie-backend
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Установить MongoDB c [официального сайта](https://www.mongodb.com/try/download/community)
   
4. Создаем базу данных:
   - вначале создаем новую базу данных и называем ее `pindie`
   - затем создаем в ней 3 коллекции и называем их `categories`, `games`, `user`
   - импортируйте в колекции соответствующие данные они находяться в папке **[compass-export](https://github.com/danula-ded/pindie-backend/tree/main/compass-export)**

5. Запускаем Nodejs
   ```bash
   npm start
   ```

## Взаимодействие с frontend
#### Для полного функционала приложения требуется работающая frontend часть, расположенная в репозитории **[pindie-frontend](https://github.com/danula-ded/pindie-frontend)**, там же находиться инструкция необходимая для запуска.