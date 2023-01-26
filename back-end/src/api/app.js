const express = require('express');
const cors = require('cors');
const path = require('path');

const route = require('../router/router');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));

app.use(route);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
