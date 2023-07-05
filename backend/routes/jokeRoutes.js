const express = require("express");
const jokeRouter = express.Router();


const { jokePostController } = require("../controllers/jokeControllers");



jokeRouter.post('/joke', jokePostController);

module.exports = { jokeRouter };