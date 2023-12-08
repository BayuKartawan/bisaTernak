const express = require("express");
const routes = express();
const { login, register } = require("../controllers/auth");

routes.post("/register", register);
routes.post("/login", login);

module.exports = routes;
