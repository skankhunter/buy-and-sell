'use strict'

const express = require('express');
const path = require(`path`);

//Маршруты
const offersRoutes = require(`./routes/offers-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const DEFAULT_PORT = 3000;
const PUBLIC_DIR = `public`;

const app = express();

//Подключение маршрутов
 app.use('/offers', offersRoutes);
 app.use('/my', myRoutes);
 app.use('/', mainRoutes);

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

 app.listen(DEFAULT_PORT);
