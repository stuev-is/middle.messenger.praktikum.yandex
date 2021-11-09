// server.js
require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.static('./dist'));

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});