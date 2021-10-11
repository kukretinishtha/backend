"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

const port = 3000;
const user = require("./routes/user");
const sequelize = require("./config/databaseconnection");

app.get('/', (req, res) => {
  res.status(200).send('Iam up!!!')
})

app.use("/api/v1/user", user);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;