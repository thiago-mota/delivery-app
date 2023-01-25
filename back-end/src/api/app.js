const express = require('express');
const cors = require('cors');

const route = require('../router/router');

const app = express();
app.use(cors());

app.use(express.json());
app.use(route);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
